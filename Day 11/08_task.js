// Define multiple promises
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 2"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise 3"), 3000)
);

// Function to handle multiple promises
function fetchAllData() {
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // Log all resolved values
      console.log("All promises resolved with:", results);
    })
    .catch((error) => {
      // Handle any errors from the promises
      console.error("Error with promises:", error);
    });
}

// Call the function to fetch and log data
fetchAllData();
