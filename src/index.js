'use strict';

const checks = require('./checks.js');
const { toString, toNumber } = require('./utils.js');

function XLSXColumn(p) {
  let column = checks.combine.forConstructor(p);

  this.inc = (n = 1) => {
    column = toNumber(XLSXColumn.incColumn(toString(column), n));
    return this;
  };
  this.dec = (n = 1) => {
    column = toNumber(XLSXColumn.decColumn(toString(column), n));
    return this;
  };
  this.valueOf = () => column;
  this.toString = () => toString(column);
}

XLSXColumn.incColumn = function(s, n = 1) {
  const column = checks.combine.forAction(s, n);
  return toString(column + n);
}
XLSXColumn.decColumn = function(s, n = 1) {
  return XLSXColumn.incColumn(s, -n);
}
XLSXColumn.numToColumn = function(n) {
  return toString(n);
}
XLSXColumn.colToNumber = function(str) {
  return toNumber(str.toUpperCase());
}
XLSXColumn.range = function(from, to) {
  const column = new XLSXColumn(from);
  const lastColumn = new XLSXColumn(to);
  return {
    [Symbol.iterator]: function*() {
      while(column <= lastColumn) {
        yield column;
        column.inc();
      }
    }
  };
}

module.exports = XLSXColumn;
