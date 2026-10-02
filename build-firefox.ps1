$manifest = (Get-Content .\ext-core\manifest.json | ConvertFrom-Json)
$version = $null
if ($manifest.psobject.properties.name -eq "version")
{
    $version = $manifest.version
}
else {
    write-warning "no version. writing default version value";
    $version="0.0"
}

web-ext build `
    --source-dir ext-core `
    --artifacts-dir (Join-Path $PSScriptRoot "builds" "firefox") `
    --filename="snmstoryview_v$version.xpi" `
    --overwrite-dest