/**
 * Objects are the class used to store various keyed collections and more complex entites
 *
 * learn more -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

var myObject = new Object();

myObject = {
    firstName: "Jayesh",
    lastName: "seth"
}

console.log(myObject); // { firstName: 'Jayesh', lastName: "seth" }


var moreInfoToMyObject = {
    langsKnown: 4,
    lastName: "Seth",
    isCompetetiveProgrammer: false,
    uuid: "bunch-of-random-numbers"
}

/**
 * assign() can also edit existing data/info
 * assign Syntax - Object.assign( traget, source)
 */
var mergedInfo = Object.assign(myObject, moreInfoToMyObject);
/**
 * output -
 * firstName: 'Jayesh',
 * lastName: 'Seth',
 * langsKnown: 4,
 * isCompetetiveProgrammer: false,
 * uuid: 'bunch-of-random-numbers'
 */
console.log(mergedInfo);

// copying/cloning objects
var mergedInfoCopy = Object.assign({}, mergedInfo);

/**
 * output -
 * firstName: 'Jayesh',
 * lastName: 'Seth',
 * langsKnown: 4,
 * isCompetetiveProgrammer: false,
 * uuid: 'bunch-of-random-numbers'
 */
console.log(mergedInfoCopy);

/**
 * Object.create()
 */

var myInfo = {
    isHuman: true,
    logInfo: function () {
        console.log(`${this.firstName}, knows ${this.langsKnown} langs\nIs human ?${this.isHuman}`);
    }
}

const user = Object.create(myInfo)
user.firstName = mergedInfo.firstName;
user.langsKnown = mergedInfo.langsKnown;
user.logInfo();

/**
 * Object.defineProperty() defines a new property on an object or
 * modifies if exists already
 * 
 * syntax - Object.defineProperty(obj, prop, descriptor
 */

Object.defineProperty(mergedInfo, "langsKnown", {
    value: 6
})
Object.defineProperty(mergedInfo, "isCompetetiveProgrammer", {
    value: true
})
/**
 * output -
 * firstName: 'Jayesh',
 * lastName: 'Seth',
 * langsKnown: 6,
 * isCompetetiveProgrammer: true,
 * uuid: 'bunch-of-random-numbers'
 */
console.log(mergedInfo);

/**
 * Object.defineProperties() is similar to defineProperty() but can add or modifiy
 * "Properties" :-)
 * 
 * syntax - Object.defineProperty(obj, {prop, descriptor
 */
Object.defineProperties(mergedInfo, {
    'firstName': {
        value: "Mad"
    },
    'lastName': {
        value: "Flasher"
    }
    //  ..etc
})

// since we want uuid of a user to stay same all the time we use
Object.defineProperty(mergedInfo, "uuid", {
    writable: false,
    configurable: false
})
mergedInfo.uuid = "value remains unchanged"
/**
 * output -
 * firstName: 'Mad',
 * lastName: 'Flasher',
 * langsKnown: 6,
 * isCompetetiveProgrammer: true
 * uuid: 'bunch-of-random-numbers'
 */
console.log(mergedInfo);


/**
 * Object.entries() returns an array in [key, value] pairs.
 */

// for (let a in mergedInfo) {
//     console.log(a + ": " + mergedInfo[a]);
// }

for (let [key, value] of Object.entries(mergedInfo)) {
    console.log(`${key}: ${value}`);
};

/**
 * Object.freeze() if we want whole object to be immutable
 */

Object.freeze(mergedInfo);

// should give error in strict mode
mergedInfo.firstName = "jayesh";
console.log(mergedInfo);


/**
 * Object.seal() in a way locks object and prevents any new property to be added
 * aka makes it non-configurable
 */

// sealing mergedInfoCopy since there is lot more todo :)
Object.seal(mergedInfoCopy)

delete mergedInfoCopy.firstName;
/**
 * output - 
 * firstName: 'Jayesh',
 * lastName: 'Seth',
 * langsKnown: 4,
 * isCompetetiveProgrammer: false,
 * uuid: 'bunch-of-random-numbers'
 */
console.log(mergedInfoCopy);


/**
 * Object.fromEntries() is exact reverse of entries()
 */

var mapValue = new Map([
    ["firstName", "Mad"],
    ["lastName", "Flasher"],
    ["langsKnown", 4],
    ["programmingExperience", 4]
]);

var mapToObj = Object.fromEntries(mapValue);
/**
 * output - 
 * firstName: 'Jayesh',
 * lastName: 'Seth',
 * langsKnown: 4,
 * programmingExperience: 4
 */
console.log(mapToObj);

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }

/**
 * Object.getOwnPropertyDescriptor - it returns an object describing the configuration of 
 * a property on a given object.
 *  
 */

const descriptor = Object.getOwnPropertyDescriptor(mergedInfo, 'firstName');

// isConfigurable = false, value = Mad
console.log(`isConfigurable = ${descriptor.configurable}, value = ${descriptor.value}`); 

/**
 * Object.getOwnPropertyDescriptors() returns all own property descripons of a given object.
 */

const descriptor2 = Object.getOwnPropertyDescriptors(mergedInfo);

console.log(descriptor2.firstName.writable); // false
console.log(descriptor2.firstName.value); // Mad

/**
 * Object.getOwnPropertyNames() returns an array of all properties found 
 * in given object
 */

/**
 * output - 
 * firstName,
 * lastName,
 * langsKnown,
 * isCompetetiveProgrammer,
 * uuid
 */
console.log(Object.getOwnPropertyNames(`mergedInfo`));

/**
 * Object.getOwnPropertySymbols() returns an array of all symbol properties 
 * found in given object
 */