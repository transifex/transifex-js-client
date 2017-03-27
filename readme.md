# Transifex-js-client

[![MIT License][license-badge]][LICENSE]
[![Build Status](https://travis-ci.org/transifex/transifex-js-client.svg?branch=master)](https://travis-ci.org/transifex/transifex-js-client)
[![Coverage Status](https://coveralls.io/repos/github/transifex/transifex-js-client/badge.svg?branch=master)](https://coveralls.io/github/transifex/transifex-js-client?branch=master)

## Installation

```
  npm install or yarn
```

## Documentation

You can find a jsDoc describing all commands and parameters of the client at http://transifex.github.io/transifex-js-client/

## Example usage

### NodeJS or bundling systems

```
npm install transifex-js-client or yarn add transifex-js-client # not yet applicable
```

And then inside your file you could do:

```
const TransifexApi = require('transifex-js-client');
const txApi = TransifexApi({
  username: 'tx_username',
  password: 'tx_password',
});
txApi.projects().then((data) => console.log(data.data))
```

### Browser

To include transifex-js-client in a browser build you should use the transifex-api.min.js
file found in the dist folder. You should also provide a promise polyfill if you plan
on supporting older browsers.

```
var txApi = TransifexApi({
  username: 'tx_username',
  password: 'tx_password',
});
txApi.projects().then(function(data) { console.log(data.data); })
```

## Commands


Command | Arguments
------------ | -------------
projects                      | -
projectCreate                 | form
project                       | project_slug
projectUpdate                 | project_slug, form
projectDelete                 | project_slug
languages                     | project_slug
languageCreate                | project_slug, form
language                      | project_slug, language_code
languageUpdate                | project_slug, language_code, form
languageDelete                | project_slug, language_code
languagesInfo                 | -
languageInfo                  | language_code
resources                     | project_slug
resourceCreate                | project_slug, form
resource                      | project_slug, resource_slug
resourceFile                  | project_slug, resource_slug
resourceDetailsUpdate         | project_slug, resource_slug, form
resourceSourceStringsUpdate   | project_slug, resource_slug, form
resourceDelete                | project_slug, resource_slug
resourceString                | project_slug, resource_slug, hash
resourceStringUpdate          | project_slug, resource_slug, hash, form
translation                   | project_slug, resource_slug, language_code
translationFile               | project_slug, resource_slug, language_code
translationUpdate             | project_slug, resource_slug, language_code, form
translationStrings            | project_slug, resource_slug, language_code
translationString             | project_slug, resource_slug, language_code, hash
translationStringUpdate       | project_slug, resource_slug, language_code, hash
stat                          | project_slug, resource_slug, language_code
stats                         | project_slug, resource_slug


## Running tests

In order to run the tests (which run through Karma) you need to expose credentials as environment variables. We do that with direnv. Create an .envrc containing:

```
export username=tx_username
export password=tx_password
export tx_host=https://www.transifex.com|http://tx.loc:8000
export COVERALLS_REPO_TOKEN=...
```

And then

```
direnv allow
npm test or yarn test
```

## LICENSE

MIT

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/transifex/transifex-js-client/blob/master/LICENSE
