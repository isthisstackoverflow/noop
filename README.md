[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# noop ○

Doing nothing with high reliability.

## Philosophy

Doing nothing with an automated deployment pipeline and intensive testing procedures to absolutely positively make sure nothing is done, neither as effect, side-effect, nor internal effect, whilst also providing high code quality assurance. We're taking nothing serious.

## Installation

noop is not yet published on npm, but feel free to fork it for now!

## Usage

The function can be called with no side effect and does nothing except for polluting your call stack. The return value is `undefined`.

```js
  noop()
```

Any parameter you add will be safely ignored.

```js
  noop(null) // same as noop(), but makes the code look hacky
```

## TODO

* Publish on npm
* Automatic build with Travis
* Use an automated testing tool
* Use something to sniff code smells
* Maybe a GitHub Page with documentation
* Add Emojis?
* Add graphics
