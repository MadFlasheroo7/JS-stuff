/**
 * 
 */

const one = () => {
    return "function one";
};

// const two = () => {
//     setTimeout(() => console.log("function two"), 3000);
// };

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function two")
        }, 3000);

    })
};

const three = () => {
    return "function three";
};

const callMe = async () => {
    let val1 = one();
    console.log(val1);

    let val2 = await two();
    console.log(val2);

    let val3 = three();
    console.log(val3);
}

callMe();