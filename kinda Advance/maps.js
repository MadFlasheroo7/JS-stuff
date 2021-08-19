/**
 * Map object holds key-value pairs and remembers the original insertion order of the keys.
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

var myMap = new Map();

myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");

console.log(myMap);

for (let key of myMap.keys()) {
    console.log(`key is ${key}`);
}

for (let value of myMap.values()) {
    console.log(`value is ${value}`);
};

// for of loop will always give `key` first then value
for (let [key, value] of myMap) {
    console.log(`key is ${key} & value is ${value}`);
}

// for Each loop will always return `value` first
myMap.forEach((v, k) => console.log(`value is ${v} & key is ${k}`));

// delete() deletes the given key from map
myMap.delete('2');

// size is similar to array.length
console.log(myMap.size);