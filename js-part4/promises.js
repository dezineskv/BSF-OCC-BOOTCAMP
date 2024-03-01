// promises. setTimeout has 2 params, arrow function & delay amount. setTimeout goes into the promise function. Promise holds resolve and reject params.

const step1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 1 is complete');
        resolve();
      }, 4000);
    });
  };

  const step2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 2 is complete');
        resolve();
      }, 4000);
    });
  };

  const step3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 3 is complete');
        resolve();
      }, 4000);
    });
  };

// chaining promises is better than nested steps using .then. & promise instead of callback.
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps are complete");
    })
    .catch((error) => {
        console.error("Error occured", error)
    });
