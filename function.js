function funcName(name) {
    console.log(`Functions in js ${name}`);
}
// funcName(); means calling a function
// funcName; means refrenceing a function
funcName("hemlo");

// admin - gets full access
// subadmin - gets access to certain stuff
// user - gets access to consume stuff

function getUserRoles(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin`;

        case "subadmin":
            return `${name} is subadmin`;

        case "user":
            return `${name} is user`;

            default:
            break;
    }
}

console.log(getUserRoles("Jayesh", "admin"));

// in JS we can declare variable as a function 
var getUserRoles = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin`;

        case "subadmin":
            return `${name} is subadmin`;

        case "user":
            return `${name} is user`;

            default:
            break;
    }
};

console.log(getUserRoles("Jayesh", "subadmin"));