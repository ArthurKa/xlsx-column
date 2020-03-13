<header>

With `xlsx-column` you are convenient to operate with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

<installation>

## Usage
### Class instance:
``` js
const XLSXColumn = require('.');

// String constructor parameter
const column = new XLSXColumn('Z');  // 26th column

column.inc();  // Increment by 1
console.log(column.toString());  // AA
console.log(+column);  // 27  // 27th column starting from 1

// Chaining is also possible
console.log(column.dec(15).toString());  // L
```
``` js
const XLSXColumn = require('.');

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
const { incColumn, decColumn, numToColumn, colToNumber } = require('.');

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
```js
const XLSXColumn = require('.');

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
```js
const { range } = require('.');

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

<testing>

<suggestions>
