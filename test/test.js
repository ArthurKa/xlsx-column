'use strict';

const assert = require('assert');
// eslint-disable-next-line import/no-unresolved
const XLSXColumn = require('..');

const className = 'XLSXColumn';

const staticMethods = [
  ['incColumn', 'string', ['X', 10]],
  ['decColumn', 'string', ['X', 10]],
  ['numToColumn', 'string', [10]],
  ['colToNumber', 'number', ['X']],
];
const instanceMethods = [
  'inc',
  'dec',
];
const actionTestCases = [
  // eslint-disable-next-line no-sparse-arrays
  ['A', , 'B', 1, 2],
  ['SAME', 0, 'SAME', 334963, 334963],
  ['A', 2, 'C', 1, 3],
  ['A', 3, 'D', 1, 4],
  ['A', 25, 'Z', 1, 26],
  ['A', 26, 'AA', 1, 27],
  ['Z', 1, 'AA', 26, 27],
  ['ZY', 4, 'AAC', 701, 705],
  ['Z', -1, 'Y', 26, 25],
  ['ZY', -4, 'ZU', 701, 697],
];
const loopCases = [
  ['A', 'A', ['A']],
  ['A', 'B', ['A', 'B']],
  ['Z', 'AB', ['Z', 'AA', 'AB']],
  ['ZX', 'AAC', ['ZX', 'ZY', 'ZZ', 'AAA', 'AAB', 'AAC']],
];

describe('Basic types', () => {
  it(`${className} should be a function`, () => {
    assert.strictEqual(typeof XLSXColumn, 'function');
  });
});
describe('Basic methods', () => {
  for(const [method] of staticMethods) {
    it(`class ${className} should contain static method "${method}"`, () => {
      assert.strictEqual(typeof XLSXColumn[method], 'function');
    });
  }

  const column = new XLSXColumn(1);
  for(const method of instanceMethods) {
    it(`instance of ${className} should contain method "${method}"`, () => {
      assert.strictEqual(typeof column[method], 'function');
    });
  }
});
describe('Basic types', () => {
  for(const [method, res, args] of staticMethods) {
    it(`static method "${method}" should return ${res}`, () => {
      assert.strictEqual(typeof XLSXColumn[method](...args), res);
    });
  }

  const column = new XLSXColumn(10);
  for(const method of instanceMethods) {
    it(`method "${method}" of class instance should return the same instance`, () => {
      assert.strictEqual(column[method](5), column);
    });
  }
});
describe('Basic behaviour of static methods', () => {
  describe(`${className}.incColumn`, () => {
    for(const [val, add, res] of actionTestCases) {
      it(`${className}.incColumn('${val}'${add == null ? '' : `, ${add}`}) equals ${res}`, () => {
        assert.strictEqual(XLSXColumn.incColumn(val, add), res);
      });
    }
  });
  describe(`${className}.decColumn`, () => {
    for(const [res, dec, val] of actionTestCases) {
      it(`${className}.decColumn('${val}'${dec == null ? '' : `, ${dec}`}) equals ${res}`, () => {
        assert.strictEqual(XLSXColumn.decColumn(val, dec), res);
      });
    }
  });
  describe(`${className}.numToColumn`, () => {
    const actionTestCases = [
      [1, 'A'],
      [7, 'G'],
      [26, 'Z'],
      [27, 'AA'],
      [6384, 'IKN'],
      [8514, 'LOL'],
      [7577, 'KEK'],
      [16169, 'WWW'],
      [2 ** 14, 'XFD', '2^14', 'last column in Excel'],
      [1e9, 'CFDGSXL', '10^9', 'even more than Excel can'],
    ];
    for(const [val, res, valStr, msg] of actionTestCases) {
      it(`${className}.numToColumn(${valStr || val}) equals ${res}${msg ? ` (${msg})` : ''}`, () => {
        assert.strictEqual(XLSXColumn.numToColumn(val), res);
      });
    }
  });
  describe(`${className}.colToNumber`, () => {
    const actionTestCases = [
      ['A', 1],
      ['G', 7],
      ['Z', 26],
      ['AA', 27],
      ['IKN', 6384],
      ['LOL', 8514],
      ['KEK', 7577],
      ['WWW', 16169],
      ['XFD', 2 ** 14, '2^14'],
      ['CFDGSXL', 1e9, '10^9'],
    ];
    for(const [val, res, resStr] of actionTestCases) {
      it(`${className}.colToNumber(${val}) equals ${resStr || res}`, () => {
        assert.strictEqual(XLSXColumn.colToNumber(val), res);
      });
    }
  });
});
describe('Basic behaviour of instance methods', () => {
  describe('new XLSXColumn(<string>).inc', () => {
    for(const [sVal, add, sRes, , nRes] of actionTestCases) {
      it(`new XLSXColumn('${sVal}').inc(${add == null ? '' : add}) equals '${sRes}' and ${nRes}`, () => {
        const column = new XLSXColumn(sVal);
        column.inc(add);
        assert.strictEqual(column.toString(), sRes);
        assert.strictEqual(+column, nRes);
      });
    }
  });
  describe('new XLSXColumn(<number>).inc', () => {
    for(const [, add, sRes, nVal, nRes] of actionTestCases) {
      it(`new XLSXColumn(${nVal}).inc(${add == null ? '' : add}) equals '${sRes}' and ${nRes}`, () => {
        const column = new XLSXColumn(nVal);
        column.inc(add);
        assert.strictEqual(column.toString(), sRes);
        assert.strictEqual(+column, nRes);
      });
    }
  });
  describe('new XLSXColumn(<string>).dec', () => {
    for(const [sRes, dec, sVal, nRes] of actionTestCases) {
      it(`new XLSXColumn('${sVal}').dec(${dec == null ? '' : dec}) equals '${sRes}' and ${nRes}`, () => {
        const column = new XLSXColumn(sVal);
        column.dec(dec);
        assert.strictEqual(column.toString(), sRes);
        assert.strictEqual(+column, nRes);
      });
    }
  });
  describe('new XLSXColumn(<number>).dec', () => {
    for(const [sRes, dec, , nRes, nVal] of actionTestCases) {
      it(`new XLSXColumn(${nVal}).dec(${dec == null ? '' : dec}) equals '${sRes}' and ${nRes}`, () => {
        const column = new XLSXColumn(nVal);
        column.dec(dec);
        assert.strictEqual(column.toString(), sRes);
        assert.strictEqual(+column, nRes);
      });
    }
  });
});
describe('Exceptions', () => {
  const nonStrOrNumParams = [
    true,
    false,
    null,
    undefined,
    {},
    [],
  ];
  it('throws when new class instance parameter neither String nor Number', () => {
    for(const param of nonStrOrNumParams) {
      assert.throws(() => new XLSXColumn(param));
    }
  });

  const wrongStrOrNumParams = [
    '',
    '0',
    '51',
    'A5',
    NaN,
    -Infinity,
    Infinity,
    0,
    -1,
    -1245,
  ];
  it('throws when new class instance parameter wrong String or Number', () => {
    for(const param of wrongStrOrNumParams) {
      assert.throws(() => new XLSXColumn(param));
    }
  });

  const correctStrOrNumParams = [
    'asdasdasd',
    'HfKbjhG',
    1,
    100,
    1e3,
  ];
  it('does not throw when new class instance parameter String or Number', () => {
    for(const param of correctStrOrNumParams) {
      assert.doesNotThrow(() => new XLSXColumn(param));
    }
  });
});
describe('Static methods with lost *this* context', () => {
  const { incColumn, decColumn, numToColumn } = XLSXColumn;
  describe('incColumn', () => {
    for(const [val, add, res] of actionTestCases) {
      it(`incColumn('${val}'${add == null ? '' : `, ${add}`}) equals ${res}`, () => {
        assert.strictEqual(incColumn(val, add), res);
      });
    }
  });
  describe('decColumn', () => {
    for(const [res, dec, val] of actionTestCases) {
      it(`decColumn('${val}'${dec == null ? '' : `, ${dec}`}) equals ${res}`, () => {
        assert.strictEqual(decColumn(val, dec), res);
      });
    }
  });
  describe('numToColumn', () => {
    const actionTestCases = [
      [1, 'A'],
      [7, 'G'],
      [26, 'Z'],
      [27, 'AA'],
      [6384, 'IKN'],
      [8514, 'LOL'],
      [7577, 'KEK'],
      [16169, 'WWW'],
      [2 ** 14, 'XFD', '2^14', 'last column in Excel'],
      [1e9, 'CFDGSXL', '10^9', 'even more than Excel can'],
    ];
    for(const [val, res, valStr, msg] of actionTestCases) {
      it(`numToColumn(${valStr || val}) equals ${res}${msg ? ` (${msg})` : ''}`, () => {
        assert.strictEqual(numToColumn(val), res);
      });
    }
  });
});
describe('Ranges', () => {
  describe('Basic "for" loop', () => {
    for(const [from, to, res] of loopCases) {
      describe(`Range ${from}..${to}`, () => {
        for(let column = new XLSXColumn(from), i = 0; column <= new XLSXColumn(to); column.inc(), i++) {
          const col = column.toString();
          it(res[i], () => {
            assert.strictEqual(col, res[i]);
          });
        }
      });
    }
  });
  describe('XLSXColumn.range based on iterator', () => {
    for(const [from, to, res] of loopCases) {
      describe(`Range ${from}..${to}`, () => {
        let i = 0;
        for(const column of XLSXColumn.range(from, to)) {
          const col = column.toString();
          const j = i++;
          it(res[j], () => {
            assert.strictEqual(col, res[j]);
          });
        }
      });
    }
  });
});
