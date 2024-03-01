const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 is complete");
        callback();
    }, 5000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 is complete");
        callback();
    }, 5000);
}
// setTimeout has 2 params, first is arrow function, second is the delay amount
const step3 = () => {
    setTimeout(() => {
        console.log("Step 3 is complete");
        console.log("Request is complete & all steps done!")
    }, 5000);
}

// nested callbacks. no need for callback for step3 because it doesn't have a callback.
step1(() => {
    step2(() => {
        step3();
    });
});