// Types of Falsy values
// undefined
// null
// ''
// NaN

var user = 2;
if (user == "2") {
    console.log("condition is true");
}
// output - condition is true

// coercion 
// use === wen u dont want js to assume something on it self
if (user === "2") {
    console.log("condition is true");
}
