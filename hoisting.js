// functions can be called anywhere in code once declared cuz of Global Context
calculation("5");

function calculation(a) {
    var bill = parseInt(a); // similar to .toInt() in kotlin
    console.log(bill + 5);
}

calculation("5");

// bigCalculation(100); // executeing will give error cuz

// Function declarations are scanned and made available
// variable declarations are scanned and made undefined
var bigCalculation = function (a) {
    var bill = parseInt(a); // similar to .toInt() in kotlin
    console.log(bill + 10);
}

bigCalculation(100);
