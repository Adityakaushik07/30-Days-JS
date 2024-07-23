// Function returning a promise that resolves or rejects after a delay
function delayedPromise(message, delay, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? reject(message) : resolve(message);
    }, delay);
  });
}

// Async function to handle promises
async function asyncFunction() {
  try {
    const result1 = await delayedPromise("First resolved promise", 1000);
    console.log(result1);

    const result2 = await delayedPromise("Second resolved promise", 1000);
    console.log(result2);

    // This will reject
    const result3 = await delayedPromise("This will reject", 1000, true);
    console.log(result3);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

// Call the async function
asyncFunction();
