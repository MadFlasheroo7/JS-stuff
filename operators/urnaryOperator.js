/**
 * Unary operators: 
 * delete - deletes a property from a object
 * void - discards an expression's return value.
 * typeof - determines the type of a given object.
 * + - converts its operand to number type. 
 * - - converts its operand to number type and then negates it.
 * ~ - Bitwise NOT operator.
 * ! - Logical NOT operator.
 */

// delete operator
let myInfo = {
    firstName: 'Jayesh',
    lastName: 'Seth'
};

// console.log(myInfo.firstName); //  Jayesh 
// delete myInfo.firstName;
// // delete myInfo[`firstName`]; // similar to above syntax
// console.log(myInfo.firstName); // undefined 


// void operator
void function funcName() {
    console.log(`hello world!`);
}();

try {
    funcName();
} catch (e) {
    console.log(e);
}

// Typeof operator
console.log(typeof 69); // number

// urnary + operator
console.log(+'hello'); // output: NaN
