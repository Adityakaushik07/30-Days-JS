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

// Function to handle promises with Promise.all
function handleAllPromises() {
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("All promises resolved with:", results);
    })
    .catch((error) => {
      console.error("Error with Promise.all:", error);
    });
}

// Function to handle promises with Promise.race
function handleRacePromises() {
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log("First promise resolved with:", result);
    })
    .catch((error) => {
      console.error("Error with Promise.race:", error);
    });
}

// Call the functions
handleAllPromises();
handleRacePromises();
