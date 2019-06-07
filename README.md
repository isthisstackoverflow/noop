[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Build Passing](https://travis-ci.org/isthisstackoverflow/noop.svg?branch=master)](https://travis-ci.org/isthisstackoverflow/noop)
[![Known Vulnerabilities](https://snyk.io/test/github/isthisstackoverflow/noop/badge.svg)](https://snyk.io/test/github/isthisstackoverflow/noop)
[![Maintainability](https://api.codeclimate.com/v1/badges/2f4463498d778b5a7b44/maintainability)](https://codeclimate.com/github/isthisstackoverflow/noop/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2f4463498d778b5a7b44/test_coverage)](https://codeclimate.com/github/isthisstackoverflow/noop/test_coverage)
[![NPM Version](https://badge.fury.io/js/%40underdash%2Fnoop.svg)](https://www.npmjs.com/package/@underdash/noop)

# noop ○

Doing nothing with high reliability.

## Philosophy

Doing nothing with an automated deployment pipeline and intensive testing procedures to absolutely positively make sure nothing is done, neither as effect, side-effect, nor internal effect, whilst also providing high code quality assurance. We're taking nothing serious.

## Installation

```
  npm i @underdash/noop
```

## Usage

The function can be called with no side effect and does nothing except for polluting your call stack. The return value is `undefined`.

```js
  noop()
```

Any parameter you add will be safely ignored.

```js
  noop(null) // same as noop(), but makes the code look hacky
```
