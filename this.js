/**
 * 'this' keyword means
 * "For all regular function calls, 'this' points to window object"
 */

var myInfo = {
    firstName: "Jayesh",
    lastName: "Seth",
    knownLanguages: 4,
    languagesCount: function () {
        console.log("line 11", this);
    }
};

myInfo.languagesCount();