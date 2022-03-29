// console.log(arguments);
// console.log(require('module').wrapper); - the wrapper function

// module.exports
const Calc = require('./test-module-1');
const calc = new Calc();
console.log(calc.add(2, 3));

// exports
// const calc2 = require('./test-module-2');
const { add, subtract, multiply, divide } = require('./test-module-2');
console.log(add(2, 3));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
