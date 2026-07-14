# CoolBrew hosting — deploy to Fly.io
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ">> build.py"
python (Join-Path $PSScriptRoot "..\build.py")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$img = Join-Path $PSScriptRoot "assets\coffee-box.png"
if (-not (Test-Path $img)) {
  Write-Error "Missing assets/coffee-box.png — run build.py from coolbrew-calculator/"
  exit 1
}

Write-Host ">> fly deploy (from coolbrew-calculator/ root)"
Set-Location (Join-Path $PSScriptRoot "..")
fly deploy @args
