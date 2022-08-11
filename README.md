# reach-installer

A simple Node.js installer for the [Reach](https://reach.sh) command line tool. Can be used to install `reach` globally or within your local package to e.g. automate package scripts.

## Installation
To install locally:
```bash
$ npm install -D reach-installer
```

To install globally:
```bash
$ npm install -g reach-installer
```

## Usage
You can use `reach` in your package scripts like this:
```js
// package.json:

{
  ...
  "scripts": {
    "compile": "REACH_CONNECTOR_MODE=ALGO reach compile"
  }
}
```

Alternatively, you can run the local `reach` executable using `npx`:
```bash
$ npx reach compile
```

If you installed the package globally it should be available in your PATH and you should be able to just run `reach` from your terminal emulator.
