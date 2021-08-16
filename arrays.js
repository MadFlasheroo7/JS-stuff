var countries = ["India", "USA", "Japan"];

var states = new Array("Rajasthan", "Delhi", "Mumbai");

console.log(states);
console.log(states.length);

states[1] = "Punjab";
console.log(states);
states.pop();// pop means simply remove last value of Array

/**
 * unshift simply adds a new value to the start of the array
 * and will shiftrest of value after that
 * Eg: old output
 *  [ 'Rajasthan', 'Punjab', 'Mumbai' ]
 * Eg: new output
 *  [ 'new state', 'Rajasthan', 'Punjab', 'Mumbai' ]
 */
 states.unshift("new state");

states.shift(); // Shift simply jus removes the first element of the array
console.log(states);
console.log(states.indexOf("Punjab")); // indexOf tells the position of the declared value

function isEven(element) {
    // loop is not necessary since "return" returns a value of either true or false
    return element % 2 === 0;
}

// "every" checks if every element returns true or not and gives combined result 
var result = [2, 4, 6, 8].every(isEven);
console.log(result);

var betterResult = [2, 4, 6, 8].every((e) => (e % 2 === 0)); // A better way of writing above code

// fill() syntax - ("value", start position, end position)
console.log(countries.fill(10, 1, 3));
console.log(result);