/**
 * Destructuring  assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
 * or properties from objects, into distinct variables.
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// Destructuring Array
const my_info = new Array(
    "Jayesh",
    4,
    true
);

// var [firstName, langsKnown, isProgrammer] = my_info;
// console.log(firstName);

// Destructuring object
const myInfo = {
    name: 'Jayesh',
    langsKnown: 4,
    isProgrammer: true,
}

console.log(myInfo.langsKnown); // 4

let { name, langsKnown, isProgrammer } = myInfo;
/**
 * NOTE:
 * let { firstName, langsKnown, isProgrammer } = myInfo;
 * will give undefined since its not able to find `firstName` in the object.
 */
console.log(langsKnown);