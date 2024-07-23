const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});
