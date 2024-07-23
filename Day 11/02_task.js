const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error!");
  }, 2000);
});
promise2.catch((message) => {
  console.log(message);
});
