/**
 * 
 */

const User = require("./classesAndModules.js");

const jayesh = new User("Jayesh", "jayeshseth45@gmai.com");

console.log(jayesh.getInfo());

jayesh.enrollCourse("Kotlin");
jayesh.enrollCourse("Angular");

var courseCount = jayesh.getCourselist();
console.log(courseCount);

courseCount.forEach(c => console.log(c));