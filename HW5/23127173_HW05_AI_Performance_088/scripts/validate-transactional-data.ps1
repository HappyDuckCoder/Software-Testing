# Pre-run validation cho nhóm endpoint transactional (PUT /api/orders/:id/cancel).
# Map với agent-skills/transactional-test-data-manager/SKILL.md — Pre-run validation.
# Không thay thế chạy JMeter; chỉ smoke REST trước performance test.

param(
    [string]$BaseUrl = 'http://localhost:3000',
    [string]$Email = 'hw5.perf.001@eshop.local',
    [string]$Password = 'Hw5Perf!001',
    [switch]$SkipCancel,
    [string]$CsvPath = ''
)

$ErrorActionPreference = 'Stop'
$hwRoot = Split-Path $PSScriptRoot -Parent
if (-not $CsvPath) {
    $CsvPath = Join-Path $hwRoot 'performance\data\hw5-users.local.csv'
}

Write-Host "=== Transactional pre-run validation ==="
Write-Host "Base URL: $BaseUrl"

try {
    Invoke-RestMethod -Uri "$BaseUrl/api/products" -Method Get | Out-Null
} catch {
    throw "Backend không phản hồi tại $BaseUrl — chạy 'node server.js' trước."
}

$loginBody = @{ email = $Email; password = $Password } | ConvertTo-Json
$login = Invoke-RestMethod -Uri "$BaseUrl/api/login" -Method Post -Body $loginBody -ContentType 'application/json'
$headers = @{ Authorization = "Bearer $($login.token)" }
Write-Host "[OK] Login — $($login.user.email)"

$orders = Invoke-RestMethod -Uri "$BaseUrl/api/orders/my-orders" -Headers $headers
$eligible = @($orders | Where-Object { $_.status -ne 'canceled' })
if ($eligible.Count -lt 1) {
    throw "Không có đơn eligible (pending/confirmed). Chạy reset-seed-hw5.mjs."
}
Write-Host "[OK] Eligible orders: $($eligible.Count) — first id=$($eligible[0].id) status=$($eligible[0].status)"

if (-not $SkipCancel) {
    $orderId = $eligible[0].id
    $cancel = Invoke-RestMethod -Uri "$BaseUrl/api/orders/$orderId/cancel" -Method Put -Headers $headers
    Write-Host "[OK] Cancel — $($cancel.message) (order $orderId)"
    Write-Host "     → Chạy lại reset-seed trước JMeter nếu vừa smoke cancel."
}

if (Test-Path $CsvPath) {
    $csvCount = (Import-Csv $CsvPath).Count
    Write-Host "[OK] CSV rows: $csvCount — $CsvPath"
    if ($csvCount -lt 50) {
        Write-Host "[WARN] CSV < 50 — Spike 50 user có thể thiếu account."
    }
} else {
    Write-Host "[WARN] CSV not found: $CsvPath"
}

Write-Host "=== Validation complete ==="
