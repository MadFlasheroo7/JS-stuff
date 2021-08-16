/**
 * splice() jus simply takes our the declared element and 
 * replaces it with given value 
 * splice() syntax - (start position, delete count, string array[])
 * 
 * slice() means taking only declared value and display it
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
var randomValues = ['0', '1', '2', '3', '4', '5'];

console.log(randomValues.slice(1, 3)); // [ '1', '2' ]

randomValues.splice(1, 3, "new value");
console.log(randomValues); // [ '0', 'new value', '4', '5' ]

console.log(randomValues['2'] != randomValues['02']); // true
