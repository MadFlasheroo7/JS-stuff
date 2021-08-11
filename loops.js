var states = [
    "Delhi",
    "Punjab",
    "Tamil Nadu",
    "Assam",
    6969
];

// for (var i = 0; i < states.length; i++) {
//     if (typeof states[i] !== "string") continue;
//     console.log(states[i]);
// }

let i = 0; // js engine jus removes 'let' variable from memory once the execution is done

// while(i < states.length) {
//     console.log(states[i]);
//     i++;
// }

do {
    console.log(states[i]);
    i++;
} while (i < states.length);