// Resolved promise
const resolvedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved promise!"), 1000);
});

// Rejected promise
const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => reject("Rejected promise!"), 2000);
});

// Handling promises
resolvedPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

rejectedPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
