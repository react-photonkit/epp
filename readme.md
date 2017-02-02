# epp

<img src='assets/epp.png' width=256 />

Electron aPPlication

- photon
- coffeescrirpt (cjsx)
- electron
- react
- react-router
- webpack

![screenshot]


## Dev

```sh
# install dependencies
$ npm install

# support for reloading views, restarting electron
# if app/* and/or index.js, electron/* are changed
$ npm start
```


### Build

```sh
$ npm run build      # all
$ npm run build-osx  # osx(64)
$ npm run build-win  # win(32, 64)
```


## Trouble shooting

* Case: Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.
  * Run on shell:
    ```sh
    $ sudo xcodebuild -license
    ```
  * This will show agreement. Read if you want or go to end of agree and type "agree".


## License

MIT © react-photonkit



[screenshot]: assets/screenshot.png
