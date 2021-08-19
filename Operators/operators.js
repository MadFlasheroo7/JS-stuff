/**
 * Types of operators 
 * Increment and decrement operators:
 * A++ - postfix increment operator
 * A-- - postfix decrement operator 
 * ++A - prefix increment operator 
 * --A - prefix decrement operator
 * 
 * Unary operators: 
 * delete - deletes a property from a object
 * void - discards an expression's return value.
 * typeof - determines the type of a given object.
 * + - converts its operand to number type. 
 * - - converts its operand to number type and then negates it.
 * ~ - Bitwise NOT operator.
 * ! - Logical NOT operator.
 * 
 * Arithmetic operators: 
 * + - addtion operator
 * - - subtraction operator
 * / - division operator
 * * - multiplication operator
 * % - remainder operator
 * ** - exponentiation operator
 * 
 * Relational operators:
 * in - determines whether an object has a given property.
 * instanceof - determines whether an object is an instance of another object.
 * < - less than operator.
 * > - greater than operator.
 * <= - less than or equal operator.
 * >= - greater than or equal operator.
 * !! Note - => is not an operator, but notation for arrow functions.
 * 
 * Equality operators:
 * == - equality operator.
 * != - inequality operator.
 * === - identity operator.
 * !== - nonidentity operator.
 * 
 * Bitwise shift operators:
 * << - bitwise left shift operator.
 * >> - bitwise right shift operator.
 * >>> - bitwise unsigned right shift operator.
 * 
 * Bitwise shift operators:
 * & - bitwise AND.
 * | - Bitwise OR.
 * ^ - bitwise XOR.
 * 
 * Binary logical operators:
 * && - logical AND.
 * || - logical OR.
 * ?? - nullish coalescing operator.
 * 
 * Trenary operator:
 * (condition ? ifTrue : ifFalse) - The conditional operator returns one of two values based on the logical value of the condition.
 * 
 * Chaining operator:
 * ?. - this operator returns undefined insted of causing an error if a refrence is null or undefined.
 * 
 * Assignment operators:
 * = - assignment operator.
 * *= - multiplication assignment
 * **= - exponentiation assignment.
 * /= - division assignment.
 * %= - remainder assignment.
 * += - addtion assignment.
 * -= - subtraction assignment.
 * <<= - left shift assignment.
 * >>= - right shift assignment.
 * >>>= unsigned right shift assignment.
 * &= bitwise AND assignment.
 * ^= - bitwise XOR assignment.
 * != - bitwise OR assignment.
 * &&= - logical AND assignment.
 * !!= - logical OR assignment.
 * ??= - logical nullish assignment.
 * 
 * Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
 */




var listPrice = 299;
var sellingPrice = 199;
var discount = (listPrice - sellingPrice) / listPrice * 100;

console.log(discount + "%");

var roundUPCount = Math.round(discount);
console.log(roundUPCount);