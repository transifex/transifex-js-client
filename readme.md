# Transifex-js-client

[![MIT License][license-badge]][LICENSE]
[![Build Status](https://travis-ci.org/transifex/transifex-js-client.svg?branch=master)](https://travis-ci.org/transifex/transifex-js-client)
[![Coverage Status](https://coveralls.io/repos/github/transifex/transifex-js-client/badge.svg?branch=master)](https://coveralls.io/github/transifex/transifex-js-client?branch=master)

## Installation

```
  yarn
```

## Running tests

In order to run the tests (which run through Karma) you need to expose credentials as environment variables. We do that with direnv.
Create a .envrc containing:

```
export username=tx_username
export password=tx_password
export tx_host=https://www.transifex.com|http://tx.loc:8000
export COVERALLS_REPO_TOKEN=...
```

And then

```
direnv allow
yarn test
```

## LICENSE

MIT
