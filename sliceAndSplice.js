/**
 * [IMPORTANT] when ever declaring a array 
 * the first value is always 'inclusive'
 * and the last value is always 'exclusive'
 */

var randomValues = ["1", "2", "3", "4", "5", "6", "7"];

// slice() means taking only declared value and display it
// console.log(randomValues.slice(1, 3));

// splice() jus simply takes our the declared element and 
// replaces it with given value 
// splice() syntax - (start position, delete count, string array[])
randomValues.splice(1, 3, "gae ")