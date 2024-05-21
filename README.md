# CPA Codes for Node

[![NPM Version](https://img.shields.io/npm/v/%40cityssm%2Fcpa-codes)](https://www.npmjs.com/package/@cityssm/cpa-codes)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-cpa-codes.svg/?label=active+issues&show_trend=true&token=-WoOE34nRUKoJN8e7lTQRQ1w)](https://app.deepsource.com/gh/cityssm/node-cpa-codes/)
[![Maintainability](https://api.codeclimate.com/v1/badges/f58ba7b1bc5af08b789c/maintainability)](https://codeclimate.com/github/cityssm/node-cpa-codes/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-cpa-codes/graph/badge.svg?token=TRMF4FQSBG)](https://codecov.io/gh/cityssm/node-cpa-codes)
[![Coverage Testing](https://github.com/cityssm/node-cpa-codes/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/node-cpa-codes/actions/workflows/coverage.yml)

Lookups, validations, and utility functions for
[Canadian Payments Association (CPA) Standard 007](https://www.payments.ca/sites/default/files/standard007eng.pdf)
transaction and return codes.

## Installation

```sh
npm install @cityssm/cpa-codes
```

## Usage

```javascript
import * as CPA from '@cityssm/cpa-codes'

console.log(CPA.isCPACode('200'))
// -> true

console.log(CPA.isCPACode('abc'))
// -> false

console.log(CPA.getCPACode('230'))
/*
  {
    cpaCodeFullName: 'Pension',
    cpaCodeAbbreviationEnglish: 'PEN',
    cpaCodeAbbreviationFrench: 'PEN'
  }
*/

console.log(CPA.getCodeCategory('300'))
/*
  { 
    cpaCodeMin: '300',
    cpaCodeMax: '329',
    cpaCodeCategory: 'Federal Government Transactions'
  }
*/
```
