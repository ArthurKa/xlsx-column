[![All dependencies](https://img.shields.io/librariesio/release/npm/xlsx-column/2.0.1?style=flat-square "All dependencies of xlsx-column@2.0.1")](https://libraries.io/npm/xlsx-column/2.0.1)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/xlsx-column@2.0.1?style=flat-square "Reported vulnerabilities of xlsx-column@2.0.1")](https://snyk.io/test/npm/xlsx-column/2.0.1)
[![NPM-version](https://img.shields.io/badge/npm-v2.0.1-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/xlsx-column/v/2.0.1)
[![Install size](https://flat.badgen.net/packagephobia/install/xlsx-column@2.0.1?label=size 'Install size of xlsx-column@2.0.1')](https://packagephobia.now.sh/result?p=xlsx-column@2.0.1)
[![Total downloads](https://img.shields.io/npm/dt/xlsx-column?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=xlsx-column)

# xlsx-column@2.0.1

With `xlsx-column` you are convenient to operate with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

## Installation
`xlsx-column` is available via npm:
``` bash
$ npm i xlsx-column@2.0.1
```

## Usage
### Class instance:
``` js
const XLSXColumn = require('xlsx-column');

// String constructor parameter
const column = new XLSXColumn('Z');  // 26th column

column.inc();  // Increment by 1
console.log(column.toString());  // AA
console.log(+column);  // 27  // 27th column starting from 1

// Chaining is also possible
console.log(column.dec(15).toString());  // L
```
``` js
const XLSXColumn = require('xlsx-column');

// Number constructor parameter
const column = new XLSXColumn(26);  // 'Z' column

column.inc(4);  // Increment by 4
console.log(column.toString());  // AD
console.log(+column);  // 30  // 30th column starting from 1

// Chaining is also possible
console.log(column.dec().toString());  // AC
```

### Static methods with lost *this* context:
``` js
const { incColumn, decColumn, numToColumn, colToNumber } = require('xlsx-column');

console.log(numToColumn(2**14));  // XFD (max Excel column number)
console.log(numToColumn(10e9));  // AFIPYQJP (and even more)

console.log(colToNumber('A'));  // 1
console.log(colToNumber('AA'));  // 27

console.log(incColumn('AX'));  // AY
console.log(incColumn('AX', 4));  // BB

// Capital letters are not necessary
console.log(decColumn('ay'));  // AX
console.log(decColumn('bb', 4));  // AX
```

### Loops:
``` js
const XLSXColumn = require('xlsx-column');

for(const column = new XLSXColumn('ZY'); column <= new XLSXColumn('AAC'); column.inc()) {
  console.log(column.toString());
}

/*
  1st iteration: 'ZY'
  2nd iteration: 'ZZ'
  3rd iteration: 'AAA'
  4th iteration: 'AAB'
  5th iteration: 'AAC'
*/
```

### Using XLSXColumn.range method based on iterator:
``` js
const { range } = require('xlsx-column');

for(const column of range('ZY', 'AAC')) {
  console.log(column.toString());
}

/*
  1st iteration: 'ZY'
  2nd iteration: 'ZZ'
  3rd iteration: 'AAA'
  4th iteration: 'AAB'
  5th iteration: 'AAC'
*/
```

## Testing
``` bash
$ npm test
```

---

Your improve suggestions and bug reports are welcome any time.
