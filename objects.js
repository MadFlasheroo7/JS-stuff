// Objects in JS
var myInfo = {
    firstName: "Jayesh",
    lstName: "Seth",
    isProgrammer: true,
};

console.log(myInfo.firstName);
// console.log(myInfo["firstName"]); // gae way of doing

console.table(myInfo);

// Functional objects in js 
// var User = function(firstName, langsKnown) {
//     this.firstName = firstName;
//     this.langsKnown = langsKnown;
//     this.getLangsCount = function () {
//         console.log(`Known Languages count is: ${this.langsKnown}`);
//     }
// }

// var madFlasher = new User("Jayesh", 69);
// console.log(madFlasher);

// var newUser = new User("new user", 69);
// console.log(newUser);

// User.prototype.getFirstName = function () {
//     console.log(`user's first name is ${this.firstName}`);
// }
// newUser.getFirstName();
// madFlasher.getFirstName();

// TODO: READ ABOUT IIFE - immidiately invoked function expression