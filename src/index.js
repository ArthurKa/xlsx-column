'use strict';

const checks = require('./checks.js');
const { toString, toNumber } = require('./utils.js');

function XLSXColumn(p) {
  let column = checks.combine.forConstructor(p);

  this.incColumn = (n = 1) => {
    column = toNumber(XLSXColumn.incColumn(toString(column), n));
    return this;
  };
  this.decColumn = (n = 1) => {
    column = toNumber(XLSXColumn.decColumn(toString(column), n));
    return this;
  };
  this.valueOf = () => column;
  this.toString = () => toString(column);
}

XLSXColumn.incColumn = function(s, n = 1) {
  let column = checks.combine.forAction(s, n);
  return toString(column + n);
}
XLSXColumn.decColumn = function(s, n = 1) {
  return XLSXColumn.incColumn(s, -n);
}
XLSXColumn.numToColumn = function(n) {
  return toString(n);
}

module.exports = XLSXColumn;
