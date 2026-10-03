# How to Build

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
2. go to the capabilities and signing section
    - set both the app and extension targets so that they use my personal team and the "apple development" signing certificate.
3. build the project for macOS
4. run the build which should launch a macOS app and install in Safari