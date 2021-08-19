// learn about Closer in js

function init() {
    var firstName = "Jayesh";
    console.log(`init is running`);
    function sayName() {
        console.log(firstName);
    }
    return sayName;
}

var a = init();
a();
// console.log(a());
