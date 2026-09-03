# Lọc dòng transaction cha từ JTL gốc (không sửa file nộp).
# JMeter ghi 4 sample/workflow: 1 parent + 3 HTTP sampler.
# File *_parents-only.jtl chỉ để đọc nhanh / demo video — metrics lấy từ JTL gốc.

param(
    [string]$Src,
    [string]$Dst,
    [string]$ParentLabel = 'E2E login - orders - cancel',
    [switch]$AllScenarios
)

$ErrorActionPreference = 'Stop'
$hwRoot = Split-Path $PSScriptRoot -Parent
$rawDir = Join-Path $hwRoot 'performance\raw-jtl'

function Export-ParentJtl {
    param(
        [string]$SourcePath,
        [string]$DestPath,
        [string]$Label
    )

    if (-not (Test-Path $SourcePath)) {
        throw "Không tìm thấy JTL: $SourcePath"
    }

    $rows = Import-Csv $SourcePath
    $parents = $rows | Where-Object { $_.label -eq $Label }
    if ($parents.Count -eq 0) {
        throw "Không có dòng label '$Label' trong $SourcePath"
    }

    $destDir = Split-Path $DestPath -Parent
    if ($destDir -and -not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    $parents | Export-Csv -Path $DestPath -NoTypeInformation -Encoding UTF8
    Write-Host "Wrote $($parents.Count) parent rows -> $DestPath"
}

if ($AllScenarios) {
    Get-ChildItem -Path $rawDir -Filter '23127173_*_20260831.jtl' |
        Where-Object { $_.Name -notlike '*_parents-only.jtl' } |
        ForEach-Object {
            $out = Join-Path $rawDir ($_.BaseName + '_parents-only.jtl')
            Export-ParentJtl -SourcePath $_.FullName -DestPath $out -Label $ParentLabel
        }
    exit 0
}

if (-not $Src) {
    $Src = Join-Path $rawDir '23127173_Endurance_20260831.jtl'
}
if (-not $Dst) {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($Src)
    $Dst = Join-Path (Split-Path $Src -Parent) ($base + '_parents-only.jtl')
}

Export-ParentJtl -SourcePath $Src -DestPath $Dst -Label $ParentLabel
