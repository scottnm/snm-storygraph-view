# ScottNM Storygraph View

## Overview

Web extensions to customize the storygraph site view for my own personal preference.

Today, this mostly means moving the "Current Read(s)" section to the top of the page
and incidentally pushing down the less useful elements like "Recommendations", "Popular", and "Giveaways" which are mostly noise to me.

Intended for desktop only. 

The mobile site and storygraph app already render things fine by my preferences.

| | |
|-|-|
| before | ![before](./demo/before.png) |
| after | ![after](./demo/after.png) |

## Building

### Local build and testing in firefox

Run: `./build-firefox.ps1`

Load in firefox:

1. in a firefox window, enter `about:debugging` in the address bar
2. go to the "This Firefox" section
3. load temporary extension from the `builds/` folder
4. load any file from `ext-core` directory

### Building for deployment/signing upload

- use the `build-firefox.ps1` script
- go to https://extensionworkshop.com/ for signing and upload

## Local build and testing in Safari

### regenerating the project

For local/test builds...
1. Build the project
    - use `build-safari.ps1`
    - If you've added or removed files from the extension, use `build-safari.ps1 -BuildType RebuildProj`
2. open the `ext-safari/` directory in XCode
3. go to the capabilities and signing section
    - set both the app and extension targets so that they use a personal team and the "apple development" signing certificate.
4. build the project for macOS
5. run the build which should launch a macOS app and install in Safari