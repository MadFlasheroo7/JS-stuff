/**
 * let allows you to declare variables that are limited to the scope of a block statement, 
 * or expression on which it is used
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

var x = 1;

if (x === 1) {
    var x = 2;
    console.log(x); // 2
}

console.log(x); // 2

let y = 1;

if (y === 1) {
    let y = 2;
    console.log(y); // 2
}

console.log(y); // 1
