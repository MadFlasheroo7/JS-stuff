/**
 * There are different ways to declare Array in js 
 * var standardWay = [1,2,3];
 * var anotherWay = new Array(1,2,3);
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

 var countries = ["India", "USA", "Japan"];
 var states = new Array("Rajasthan", "Delhi", "Mumbai");

console.log(states); // [ 'Rajasthan', 'Delhi', 'Mumbai' ]
console.log(states.length);// 3 // .length method shows the length of the array

states[1] = "Punjab"; // array[position] will replace the position value to the given value 
console.log(states); // [ 'Rajasthan', 'Punjab', 'Mumbai' ]

states.pop();// pop means simply remove last value of Array

/**
 * Looping over arrays 
 */
function isEven(element) {
    // loop is not necessary since "return" returns a value of either true or false
    return element % 2 === 0;
}

/**
 * every() checks if every element returns true or not 
 * and gives combined result
 */
var result = [2, 4, 6, 8].every(isEven);
console.log(result);

var betterResult = [2, 4, 6, 8].every((every) => (every % 2 === 0)); // A better way of writing above code
console.log(betterResult);

var countries = ["India", "USA", "Japan"];
// fill() syntax - ("value", start position, end position)
console.log(countries.fill(10, 1, 3));// [ 'India', 10, 10 ]