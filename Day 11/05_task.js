async function handleRejectedPromise(promise) {
  try {
    const result = await promise;
    console.log("Promise resolved with:", result);
  } catch (error) {
    console.error("Promise rejected with error:", error.message);
  }
}

// Example usage
const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Something went wrong!")), 2000);
});

handleRejectedPromise(rejectedPromise);
