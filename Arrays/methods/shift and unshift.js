
/**
 * unshift simply adds a new value to the start of the array
 * and will shiftrest of value after that
 * 
 * Shift simply jus removes the first element of the array
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

var states = new Array("Rajasthan", "Delhi", "Mumbai");

states.unshift("new state");

console.log(states); // [ 'new state', 'Rajasthan', 'Delhi', 'Mumbai' ]
states.shift();
console.log(states); // [ 'Rajasthan', 'Delhi', 'Mumbai' ]
