// functions that take other functions in as params/args and return
function higherOrderFunction (callback) {
    console.log("this is the higher order function speaking");
    callback();
}
function passedFunction() {
    console.log("this is the passed function being called");
}
// don't need parenthesis on the function arg
higherOrderFunction(passedFunction);

// passing a variable instead
function higherOrderFunction (variable) {
    console.log("this is the higher order function speaking", variable);

}
function passedFunction() {
    console.log("this is the passed function being called");
}
let num = 5;
let num2 = 10;
higherOrderFunction(num);
higherOrderFunction(num2);