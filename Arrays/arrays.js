/**
 * There are different ways to declare Array in js 
 * var standardWay = [1,2,3];
 * var anotherWay = new Array(1,2,3);
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

 var countries = ["India", "USA", "Japan"];

console.log(states); // [ 'Rajasthan', 'Delhi', 'Mumbai' ]
console.log(states.length);// 3 // .length method shows the length of the array

states[1] = "Punjab"; // array[position] will replace the position value to the given value 
console.log(states); // [ 'Rajasthan', 'Punjab', 'Mumbai' ]

