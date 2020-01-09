[![All dependencies](https://img.shields.io/librariesio/release/npm/xlsx-column/1.0.9?label=all%20dependencies)](https://libraries.io/npm/xlsx-column/1.0.9)
[![Known vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/xlsx-column@1.0.9?label=known%20vulnerabilities)](https://snyk.io/test/npm/xlsx-column/1.0.9)
[![NPM-version](https://img.shields.io/badge/npm-v1.0.9-blue.svg)](https://www.npmjs.com/package/xlsx-column/v/1.0.9)
[![Install size](https://packagephobia.now.sh/badge?p=xlsx-column@1.0.9)](https://packagephobia.now.sh/result?p=xlsx-column@1.0.9)
[![Total downloads](https://img.shields.io/npm/dt/xlsx-column?label=total%20downloads)](https://npm-stat.com/charts.html?package=xlsx-column)

# xlsx-column@1.0.9

Helps you to work with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

## Installation
`xlsx-column` is available via npm:
``` bash
$ npm i xlsx-column@1.0.9
```

## Usage
### Class instance:
``` js
const XLSXColumn = require('xlsx-column');

// String constructor parameter
const column = new XLSXColumn('Z');  // 26th column

column.incColumn();  // increment by 1
console.log(column.toString());  // AA
console.log(+column);  // 27

// Chaining is also possible
console.log(column.decColumn(15).toString());  // L
```
``` js
const XLSXColumn = require('xlsx-column');

// Number constructor parameter
const column = new XLSXColumn(26);  // 'Z' column

column.incColumn(4);  // increment by 4
console.log(column.toString());  // AD
console.log(+column);  // 30

// Chaining is also possible
console.log(column.decColumn().toString());  // AC
```

### Static methods with lost *this* context:
``` js
const { incColumn, decColumn, numToColumn } = require('xlsx-column');

console.log(numToColumn(2**14));  // XFD (max Excel column number)
console.log(numToColumn(10e9));  // AFIPYQJP (and even more)

console.log(incColumn('AX'));  // AY
console.log(incColumn('AX', 4)); // BB

// Capital letters are not necessary
console.log(decColumn('ay'));  // AX
console.log(decColumn('bb', 4)); // AX
```

## Testing
``` bash
$ npm test
```

---

Your improve suggestions and bug reports are welcome any time.
