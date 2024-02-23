//  variable var has global scope, value can be changed too
// var name = "Regel";
// console.log(name);

// if (true) {
//     console.log(name);  
// }

if (true) {
    var name = "Regel";
    name = "new";
}
console.log(name);  

// let keyword scope is at block level
let age = 21;
console.log(age);

if (true) {
    let animal = "cat";
    animal = "dog"; // let's value can be updated, assigned value
    console.log(animal);
}
// console.log(animal) would not work because it's outside of the code block for let variable.

// const we dont expect to change in value. not changeable. 
const birthday = "Sept 5";
console.log(birthday);

// let is better practice over var