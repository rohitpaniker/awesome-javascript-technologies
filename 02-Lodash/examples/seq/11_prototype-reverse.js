/**
 * reverse example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [1, 2, 3];

console.log(_(array).reverse().value());
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]