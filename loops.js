var states = [
    "Delhi",
    6969,
    "Punjab",
    "Tamil Nadu",
    "Assam",
];

// for (var i = 0; i < states.length; i++) {
//     if (typeof states[i] !== "string") continue;
//     console.log(states[i]);
// }

// let i = 0; // js engine jus removes 'let' variable from memory once the execution is done

// while(i < states.length) {
//     console.log(states[i]);
//     i++;
// }

// do {
//     console.log(states[i]);
//     i++;
// } while (i < states.length);

// ForEach loop its like made for looping in array
// states.forEach( (s) => {console.log(s)});

// for in loop and for of loop

// for of loop is used for array
// for (const n of states) {
    // console.log(n);
// }

// for in loop is for objects and method
const langShorts = {
    kt: "Kotlin",
    py: "Python",
    js: "JavaScript",
    ts: "TypeScript"
}

for (const n in langShorts) {
    console.log(`${langShorts[n]} is called ${n} in short`);
}