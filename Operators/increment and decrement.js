/**
 * Increment and decrement operators:
 * A++ - postfix increment operator
 * A-- - postfix decrement operator 
 * ++A - prefix increment operator 
 * --A - prefix decrement operator
 */

let x = 3;
const y = x++;
console.log(`x = ${x}, y = ${y}`); // x = 4, y = 3

let a = 3;
const b = ++a;
console.log(`a = ${a}, b = ${b}`); // a = 4, b = 4

let value1 = 3;
const value2 = value1--;
console.log(`value1 = ${value1}, value2 = ${value2}`); // value1 = 2, value2 = 3

let value3 = 3;
const value4 = --value3;
console.log(`value3 = ${value3}, value4 = ${value4}`); // value3 = 2, value4 = 2