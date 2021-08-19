/**
 * Event Loop
 */

const one = () => {
    console.log("function one");
};

const two = () => {
    setTimeout(() => console.log("am timed out for 3 seconds"),3000);
    console.log("function two");
};

const three = () => {
    console.log("function three");
};

one();
two();
three();
/**
 * output: 
 * function one
 * function two
 * function three
 * 
 * debugger: 
 * [Done] exited with code=0 in 3.083 seconds
 */

