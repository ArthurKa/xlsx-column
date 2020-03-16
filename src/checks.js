'use strict';

const { toNumber } = require('./utils.js');

function Checks() {
  const checks = this;
  this.strOrNum = p => {
    let res;
    try {
      this.isString(p);
      res = 'str';
    } catch(e) {}
    try {
      this.isNumber(p);
      res = 'num';
    } catch(e) {}
    if(!res) {
      throw new Error('The parameter should be one of type String or Number');
    }
    return res;
  };
  this.isString = p => {
    if(typeof p !== 'string' && !(p instanceof String)) {
      throw new Error('The parameter should be only String type');
    }
  };
  this.isNumber = p => {
    if(typeof p !== 'number' && !(p instanceof Number)) {
      throw new Error('The parameter should be only Number type');
    }
  };
  this.isInteger = n => {
    if(!(isFinite(n) && Math.floor(n) === n)) {
      throw new Error('The number should be integer');
    }
  };
  this.isPositive = (n, arg = 'number') => {
    if(n <= 0) {
      throw new Error(`The ${arg} should be positive`);
    }
  };
  this.stringNotEmpty = s => {
    if(!s.length) {
      throw new Error('The string should not be empty');
    }
  };
  this.hasLettersOnly = s => {
    if(s.match(/[^a-z]/i)) {
      throw new Error('The string should contain letters only');
    }
  };
  this.combine = {
    forConstructor(p) {
      const type = checks.strOrNum(p);
      if(type === 'str') {
        checks.stringNotEmpty(p);
        checks.hasLettersOnly(p);
        p = toNumber(p.toUpperCase());
      } else {
        checks.isInteger(p);
        checks.isPositive(p);
      }
      return p;
    },
    forAction(s, n) {
      checks.isString(s);
      checks.stringNotEmpty(s);
      checks.hasLettersOnly(s);
      checks.isNumber(n);
      checks.isInteger(n);
      const column = toNumber(s.toUpperCase());
      checks.isPositive(column + n, 'result');
      return column;
    },
  };
}

module.exports = new Checks();
