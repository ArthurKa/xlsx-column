'use strict';

const checks = require('./checks.js');

const zero = 'A'.charCodeAt(0);
function toString(n) {
  const arr = [];
  do {
    arr.push((n-1) % 26);
  } while(n = Math.floor((n-1) / 26));
  return arr.reverse().map(e => String.fromCharCode(e + zero)).join('');
}
function toNumber(s) {
  return s.split('').reduce((acc, cur) => acc*26 + cur.charCodeAt(0) + 1 - zero, 0);
}

function XLSXColumn(p) {
  const type = checks.strOrNum(p);
  if(type === 0) {
    checks.stringNotEmpty(p);
    checks.hasLettersOnly(p);
    p = toNumber(p.toUpperCase());
  } else {
    checks.isInteger(p);
    checks.isPositive(p);
  }
  let column = p;

  this.incColumn = (n = 1) => {
    // Проверка на число
    column += n;
  };
  this.decColumn = (n = 1) => {
    // Проверка на число
    // Проверка на положительный результат
    column -= n;
  };
  this.valueOf = () => column;
  this.toString = () => toNumber(toString(column));
}

const _this = XLSXColumn;
XLSXColumn.incColumn = function(str, n = 1) {

}
XLSXColumn.decColumn = function(str, n = 1) {

}
XLSXColumn.fromNumber = function(n) {
  return toString(n);
}

module.exports = XLSXColumn;
