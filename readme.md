# Webpack Workshop

[![MIT License][license-badge]][LICENSE]
[![Build Status](https://travis-ci.org/alexpsi/travistest.svg?branch=master)](https://travis-ci.org/alexpsi/travistest)
[![Coverage Status](https://coveralls.io/repos/github/alexpsi/travistest/badge.svg?branch=master)](https://coveralls.io/github/alexpsi/travistest?branch=master)

## Running tests

In order to run the tests (which run through Karma) you need to expose as environment variables. We do that with direnv.
Create a .envrc containing: 

```
export username=tx_username
export password=tx_password
export tx_host=https://www.transifex.com|http://tx.loc:8000
export COVERALLS_REPO_TOKEN=...
export COVERALLS_SERVICE_NAME=travis
```

## Purpose

Travis

## LICENSE

MIT

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/es6-todomvc/blob/master/LICENSE
