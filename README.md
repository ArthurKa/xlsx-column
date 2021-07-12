[![All dependencies](https://img.shields.io/librariesio/release/npm/xlsx-column/2.2.0?style=flat-square "All dependencies of xlsx-column@2.2.0")](https://libraries.io/npm/xlsx-column/2.2.0)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/xlsx-column@2.2.0?style=flat-square "Reported vulnerabilities of xlsx-column@2.2.0")](https://snyk.io/test/npm/xlsx-column/2.2.0)
[![Commits](https://flat.badgen.net/github/commits/ArthurKa/xlsx-column)](https://github.com/ArthurKa/xlsx-column/commits/master)
[![NPM-version](https://img.shields.io/badge/npm-v2.2.0-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/xlsx-column/v/2.2.0)
[![Total downloads](https://img.shields.io/npm/dt/xlsx-column?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=xlsx-column)
[![Developed by](https://img.shields.io/badge/developed_by-ArthurKa-blueviolet.svg?style=flat-square "GitHub")](https://github.com/ArthurKa)\
[![Publish size](https://flat.badgen.net/packagephobia/publish/xlsx-column@2.2.0?label=publish 'Publish size of xlsx-column@2.2.0')](https://packagephobia.now.sh/result?p=xlsx-column@2.2.0)
[![Install size](https://flat.badgen.net/packagephobia/install/xlsx-column@2.2.0?label=install 'Install size of xlsx-column@2.2.0')](https://packagephobia.now.sh/result?p=xlsx-column@2.2.0)
[![Minified size](https://img.shields.io/bundlephobia/min/xlsx-column@2.2.0?style=flat-square&label=minified "Minified size of xlsx-column@2.2.0")](https://bundlephobia.com/result?p=xlsx-column@2.2.0)
[![Minified + gzipped size](https://img.shields.io/bundlephobia/minzip/xlsx-column@2.2.0?style=flat-square&label=minzipped "Minified + gzipped size of xlsx-column@2.2.0")](https://bundlephobia.com/result?p=xlsx-column@2.2.0)

# xlsx-column@2.2.0

With `xlsx-column` you are convenient to operate with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

## Installation
`xlsx-column` is available via NPM:
```bash
$ npm i xlsx-column@2.2.0
```

## Usage
### Class instance:
```ts
import XLSXColumn from 'xlsx-column';

// String constructor parameter
const column = new XLSXColumn('Z');  // 26th column

column.inc();  // Increment by 1
console.log(String(column));  // AA
console.log(+column);  // 27  // 27th column starting from 1

// Chaining is also possible
console.log(column.dec(15).toString());  // L
```

```ts
import XLSXColumn from 'xlsx-column';

// Number constructor parameter
const column = new XLSXColumn(26);  // 'Z' column

column.inc(4);  // Increment by 4
console.log(String(column));  // AD
console.log(+column);  // 30  // 30th column starting from 1

// Chaining is also possible
console.log(column.dec().toString());  // AC
```

### Static methods with lost *this* context:
```ts
import { incColumn, decColumn, numToColumn, colToNumber } from 'xlsx-column';

console.log(numToColumn(2 ** 14));  // XFD (max Excel column number)
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
```ts
import XLSXColumn from 'xlsx-column';

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
```ts
import { range } from 'xlsx-column';

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
```bash
$ npm test
```

---

Your improve suggestions and bug reports [are welcome](https://github.com/ArthurKa/xlsx-column/issues) any time.
