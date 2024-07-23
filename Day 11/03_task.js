// Function to simulate a server fetch with a delay
function fetchDataFromServer(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

// Chain promises to log messages in a specific order
fetchDataFromServer("Starting data fetch...", 1000)
  .then(() => fetchDataFromServer("Fetching data...", 2000))
  .then(() => fetchDataFromServer("Data processing...", 1500))
  .then(() => fetchDataFromServer("Data processed successfully!", 500))
  .then(() => console.log("All tasks completed."));
