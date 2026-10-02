# how to build

## Firefox

### local testing in firefox

for local/test builds...
1. in firefox go to `about:debugging`
2. load temporary extension
3. load any file from `ext-core` directory

### for deployment/signing upload

- use the `build-firefox.ps1` script
- go to https://extensionworkshop.com/ for signing and upload

## Safari

### regenerating the project

If you add or remove files from the extension, you need to rebuild the xcode project for the safari extension.

Use `build-safari.ps1 -BuildType RebuildProj`

### local testing in safari

For local/test builds...
1. open the `ext-safari/` directory in XCode
2. build the project for macOS
3. run the build which should launch a macOS app and install in Safari
4. NOTE: need to enable running unsigned extensions from the Safari Developer menu

### for deployment/signing upload

signing not yet supported because it requires a $99/yr apple developer license which isn't yet an expense worth paying.