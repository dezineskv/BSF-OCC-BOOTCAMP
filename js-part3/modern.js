// Arrow Functions

const greet = (name) => {
    console.log(name);
}

greet("kim");

const square = (a) => a * a;
console.log(square(4));

// Rest Operator
// Rest Operator
function restOperator(first, ...restOfArgs) {
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// or. doesn't need to be called restOfArgs
function restOperator(first, ...restOfArgs) {
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');
function restOperator(...restOfArgs) {
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator takes in the first 3
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Spread Operator takes in the first 4

function sum2(x, y, z, w) {
    return x + y + z + w;
}

// filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0);
console.log(even);

const odd = nums.filter((num) => num % 2 != 0);
console.log(odd);

// split
const message = "hello, world!";
const words = message.split(", ");
console.log(words);

const message2 = "hello, world!";
const words2 = message2.split("0");
console.log(words2);

// Includes returns a boolean & is case sensitive
const message3 = "hello, world!";
const words3 = message3.includes("fox");
console.log(words3);

// length as a property
const str = "sentence here";
console.log(str.length);

// to lower and uppercase methods
let string = "HELLO";
console.log(string.toLowerCase());

// trim is another built in method for string removes before & after the sentence
// there's also trimStart or trimEnd methods
let strings= "  HELLO THERE ";
console.log(strings.trim());

// math methods. math is an object with built in methods
// max and min
const maxNumber = Math.max(10,5,20);
console.log(maxNumber);

// rounding a number
console.log(Math.round(3.6));

// floor rounds down
console.log(Math.floor(3.6));

// ceil rounds up
console.log(Math.ceil(3.2));

// random numbers from 0 to 1
console.log(Math.random());

// random numbers from 1 to 10 * by 10 returns 4.0000
console.log(Math.random() * 10);

// nested math methods * 100 + 1 to get a 2 digit number & removes .00990
console.log(Math.round(Math.random() * 100 + 1)); // or 101

// other methods
// to fixed use method directly on that number & rounds the number
const price = 40.256.toFixed(2);
console.log(price);

// date
const currentDate = new Date();
console.log(currentDate);
// uses 0 index so use 2023 for browsers & will show december timestamp
const christmas = new Date(2024, 11, 25);
console.log(christmas);






