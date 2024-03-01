// synchronous
console.log("first");
console.log("second");
console.log("third");

// asynchronous programming
console.log("first");

setTimeout(() => {
    console.log("second");
}, 2000); // delay of 2 seconds. third will show up before second.

console.log("third");