# CPA Codes for Node

Lookups, validations, and utility functions for Canadian Payments Association (CPA)
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

[List of CPA Codes](https://www.payments.ca/sites/default/files/standard007eng.pdf)
