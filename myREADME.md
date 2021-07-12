<header>

With `<pkg.name>` you are convenient to operate with *.xlsx column names such as `A`, `Z`, `AA`, `AAB`, etc.

<installation>

## Usage
### Class instance:
```ts
import XLSXColumn from './xlsx-column/src';

// String constructor parameter
const column = new XLSXColumn('Z');  // 26th column

column.inc();  // Increment by 1
console.log(String(column));  // AA
console.log(+column);  // 27  // 27th column starting from 1

// Chaining is also possible
console.log(column.dec(15).toString());  // L
```

```ts
import XLSXColumn from './xlsx-column/src';

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
import { incColumn, decColumn, numToColumn, colToNumber } from './xlsx-column/src';

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
import XLSXColumn from './xlsx-column/src';

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
import { range } from './xlsx-column/src';

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
