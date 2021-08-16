/**
 * for in loop iterates over all properties of an object
 * 
 * learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

 const langShorts = {
    kt: "Kotlin",
    py: "Python",
    js: "JavaScript",
    ts: "TypeScript"
}

for (const n in langShorts) {
    console.log(`${langShorts[n]} is called ${n} in short`);
}
/**
 * output- 
 * Kotlin is called kt in short
 * Python is called py in short
 * JavaScript is called js in short
 * TypeScript is called ts in short
 */