// Define multiple promises with different resolve times
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 1"), 3000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 2"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 3"), 1000)
);

// Function to handle the first resolved promise
function fetchFirstResolved() {
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      // Log the value of the first resolved promise
      console.log("First promise resolved with:", result);
    })
    .catch((error) => {
      // Handle any errors from the promises
      console.error("Error with promises:", error);
    });
}

// Call the function to fetch and log the first resolved promise
fetchFirstResolved();
