'use strict';

function Checks() {
  this.strOrNum = p => {
    const index = ['string', 'number'].indexOf(typeof p);
    if(index === -1) {
      throw new Error('The parameter should be one of type String or Number');
    }
    return index;
  };
  this.isInteger = n => {
    if(!(isFinite(n) && Math.floor(n) === n)) {
      throw new Error('The number should be integer');
    }
  };
  this.isPositive = n => {
    if(n <= 0) {
      throw new Error('The number should be positive');
    }
  };
  this.stringNotEmpty = s => {
    if(!s.length) {
      throw new Error('The string should not be empty');
    }
  };
  this.hasLettersOnly = s => {
    if(s.match(/[a-z]/i)) {
      throw new Error('The string should contain letters only');
    }
  };
}

module.exports = new Checks();
