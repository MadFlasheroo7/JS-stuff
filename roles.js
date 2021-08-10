// admin - gets full access
// subadmin - gets access to certain stuff
// user - gets access to consume stuff

var user = "user";

switch (user) {
    case "user":
        console.log("u r user");
        break;
    case "admin":
        console.log("ur admin");
        break;

    default:
        console.log("who even are u?");
        break;
}