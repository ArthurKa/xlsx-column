<header>

Helps you to work with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

<installation>

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

<footer>
