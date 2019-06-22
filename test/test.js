'use strict';

const XLSXColumn = require('../src');
const { incColumn, decColumn } = require('../src');


// 1 макс A
// 7 макс G
// 26 макс Z
// 27 макс AA
// 6384 макс IKN
// 7577 макс KEK
// 8614 макс LOL
// 16169 макс WWW
// 16384 макс XFD

let x = new XLSXColumn(16384);
console.log(incColumn());
console.log(x.toString());
