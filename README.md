Helps you to work with *.xlsx column names such as `Z`, `AA`, `AAB`, etc.

## Installation
`xlsx-column` is available via npm:
``` bash
$ npm i xlsx-column
```

## Usage
### Class instance
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

### Static methods with lost *this* context
``` js
const { incColumn, decColumn, numToColumn } = require('xlsx-column');

console.log(numToColumn(2**14));  // XFD (max Excel column)
console.log(numToColumn(10e9));  // AFIPYQJP (even more)

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
