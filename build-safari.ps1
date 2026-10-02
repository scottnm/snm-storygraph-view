param(
    [ValidateSet("NewProj", "RebuildProj", "JustBuild")]
    [string]$BuildType = "JustBuild"
    )

if ($BuildType -eq "NewProj")
{
    xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter ./ext-core `
        --project-location ext-safari `
        --app-name ScottNM-StoryGraph-View `
        --macos-only `
        --no-open
}
elseif ($BuildType -eq "RebuildProj")
{
    xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter ./ext-core `
        --project-location ext-safari `
        --app-name ScottNM-StoryGraph-View `
        --rebuild-project ./ext-safari/ScottNM-StoryGraph-View/ScottNM-StoryGraph-View.xcodeproj `
        --macos-only `
        --no-open
}

xcodebuild `
    -project "ext-safari/ScottNM-StoryGraph-View/ScottNM-StoryGraph-View.xcodeproj" `
    -scheme "ScottNM-StoryGraph-View"