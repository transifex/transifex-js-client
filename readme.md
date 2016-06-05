# transifex-api

This is a universal module (works on browser and server) that implements a client
for the Transifex API. It is written in ES6 that it transpiled through babel and
webpack to a regular universal javascript module. The client is Promise based and
has no external dependencies as AJAX is handled through superagent.

## Installation

Not yet

```
$ npm install --save transifex-api
```

## Usage

In node:

```js
var txApi = require('transifex-api').connect(username, password);
```

In browser:

```js
var txApi = TransifexApi.connect(username, password);
```

## Development

Install dependencies: `npm install`

- `npm run build` - Build task that generates both minified and non-minified scripts;
- `npm run test-node` - Run Mocha tests once server side;
- `npm run test-browser` - Run Mocha tests in the browser using Karma once;
- `npm run test` - Shortcut for `npm run test-node && npm run test-browser`;
- `npm run tdd` - Run Mocha tests & watch files for changes;
- `npm run coverage` - Run Isparta, a code coverage tool;

[travis-url]: https://travis-ci.org/alexpsi/transifex-api
[travis-image]: https://img.shields.io/travis/alexpsi/transifex-api.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/alexpsi/transifex-api
[coveralls-image]: https://img.shields.io/coveralls/alexpsi/transifex-api.svg?style=flat-square

[depstat-url]: https://david-dm.org/alexpsi/transifex-api
[depstat-image]: https://david-dm.org/alexpsi/transifex-api.svg?style=flat-square
