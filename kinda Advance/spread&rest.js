/**
 * Spread and Rest 
 * Spread operator takes an array or group of elements and spreads them into single element.
 * 
 * learn more(spread) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

function addtion(a, b) {
    return a + b;
}
var array = [5, 5, 6, 6, 6, 6,];

// console.log(addtion(array)); // will give undefined

// spread operator
// console.log(addtion(...array)); // 10

// Rest operator
// declaring a,b makes sure that first two values will be ignored by rest OP
function multipleAddtion(a, b, ...args) {
    console.log(args); // [5, 5, 6, 6, 6, 6,] // returns input in array form
    let sum = 0;
    let multi = a * b;
    for (const arg of args) {
        sum += arg;
    }
    return [sum , multi];
}

// console.log(multipleAddtion(1, 2, 2, 3, 4, 5,)); //
console.log(multipleAddtion(...array)); //