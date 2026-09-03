param(
  [Parameter(Mandatory = $true)] [int] $BackendProcessId,
  [Parameter(Mandatory = $true)] [string] $OutputPath,
  [int] $DurationSeconds = 620,
  [int] $IntervalSeconds = 10
)

$samples = [System.Collections.Generic.List[object]]::new()
$deadline = (Get-Date).AddSeconds($DurationSeconds)

while ((Get-Date) -lt $deadline) {
  $now = Get-Date
  $os = Get-CimInstance Win32_OperatingSystem
  $backend = Get-Process -Id $BackendProcessId -ErrorAction Stop
  $totalKb = [double]$os.TotalVisibleMemorySize
  $usedPercent = [math]::Round((($totalKb - [double]$os.FreePhysicalMemory) / $totalKb) * 100, 2)
  $samples.Add([pscustomobject]@{
    timestamp_utc_plus_7 = $now.ToString('yyyy-MM-dd HH:mm:ss')
    elapsed_seconds = [math]::Round(($DurationSeconds - (($deadline - $now).TotalSeconds)), 1)
    backend_pid = $BackendProcessId
    backend_working_set_mb = [math]::Round($backend.WorkingSet64 / 1MB, 2)
    system_memory_used_percent = $usedPercent
  })
  Start-Sleep -Seconds $IntervalSeconds
}

$samples | Export-Csv -LiteralPath $OutputPath -NoTypeInformation -Encoding utf8
$maxBackend = ($samples | Measure-Object backend_working_set_mb -Maximum).Maximum
$maxSystem = ($samples | Measure-Object system_memory_used_percent -Maximum).Maximum
Write-Output "samples=$($samples.Count) backend_working_set_max_mb=$maxBackend system_memory_used_max_percent=$maxSystem"
