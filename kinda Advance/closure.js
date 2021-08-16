/** 
 * Closure is like a combination of functions bundled together
 * with reference to its surrounding state.
 * learn More - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function doAddtion(value1) {

    return function(value2) {
        return value1 + value2;
    }
}

// var add5 = doAddtion(5);
// console.log(add5(5)); // 10

// the power of closure
console.log(doAddtion(5)(5)); //10 