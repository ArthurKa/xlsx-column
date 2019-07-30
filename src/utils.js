'use strict';

const zero = 'A'.charCodeAt(0);

function Utils() {
  this.toString = n => {
    const arr = [];
    do {
      arr.push((n-1) % 26);
    } while(n = Math.floor((n-1) / 26));
    return arr.reverse().map(e => String.fromCharCode(e + zero)).join('');
  };
  this.toNumber = s => {
    return s.split('').reduce((acc, cur) => acc*26 + cur.charCodeAt(0) + 1 - zero, 0);
  };
}

module.exports = new Utils();
