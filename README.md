# Steam-AppManifestor

Download Steam games unavailable to your platform through `appmanifest` trickery.

This **should** work on all platforms, although only OS X has been tested even partially.

:warning:**THIS _WILL NOT_ WORK ON ALL GAMES! YOUR MILEAGE MAY VARY!**:warning:

Based on [this repo](https://github.com/dotfloat/steam-appmanifest).

## Usage

Find the AppID for the app you want to download.
These IDs can be found here: http://steamdb.info/

Next, install globally with `npm`:

```
npm install -g steam-appmanifestor
```

And run the program:

```
appmanifestor
```

The program will walk you through the following steps:

- AppID: Just enter the AppID you found on http://steamdb.info/.

- App Name: The name of the folder inside of `Steam/SteamApps/common` that your app will install in.

- Where would you like to output the appmanifest?
This will give you four choices:
  1. Your SteamApps folder (detected based on platform, may not be correct)
  2. Your Desktop
  3. Other (will prompt you to type in a directory path)
  4. stdout (prints the resulting file to the terminal)

The other options are really not very useful, as the appmanifest must be in your
SteamApps folder to do any good. Once you have the file (named properly) in your
SteamApps folder, simply restart steam and the game should begin to download.

## Potential Issues

If your operating system creates your SteamApps folder someplace weird,
create an issue and let me know! If you're having a different problem,
create an issue and let me know! If you have an idea for a feature...
you get the idea.

## ISC License

Copyright (c) 2016 Evan Miller

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
