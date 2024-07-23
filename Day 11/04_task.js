async function waitAndLog(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});
waitAndLog(myPromise);
