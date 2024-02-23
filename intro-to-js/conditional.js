// conditional
// conditional IF statements
let age = 17;

if (age >= 18) {
    console.log("You are eligible to vote!")
} else {
    console.log("You are not eligible to vote")
}

// if & else if statements
let temprature = -1;
if (temprature < 0) {
    console.log("It is freezing!");
} else if (temprature >= 0  && temprature < 20) {
    console.log("It's cool outside!");
} else {
    console.log("It's a warm day.");
}

// switch statement is a case then code block. no condition, just varialbe. good for many cases.
let day = 'Friday';

switch(day) {
    case 'Monday':
        console.log("It is the start of the week");
        break;
    case 'Friday':
        console.log("It is the end of the week");
        break;
    default:
        console.log("It is an ordinary day.");
        break;
}

