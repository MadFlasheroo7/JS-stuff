/**
 * There are 3 ways to declare variable
 * var - mutable and function scoped
 * let - mutable and block scoped
 * const - used to declare immutable values
 */

var firstName = "Jayesh";
let lastName = "Seth";
console.log(`${firstName} ${lastName}`); //Jayesh Seth

firstName = "Mad";
lastName = "Flasher";
console.log(`${firstName} ${lastName}`); //Mad Flasher

/**
 * so as we can see both var and let are mutable so whats the difference?
 * 
 * The main differnce is scoping rules. Variable declared by 'var' are scoped to immediate
 * function body. while 'let' is scoped to the immediate enclosing block denoted by {}
 * 
 * src - https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var 
 */
var foo = "var1"
{
    let bar = "var2"
    console.log(foo+bar);//var1var2
}
console.log(bar); //Reference Error