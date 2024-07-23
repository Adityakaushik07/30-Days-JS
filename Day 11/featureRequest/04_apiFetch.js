// URL of a public API
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Function to fetch data and log it using promises
function fetchDataWithPromises() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched with promises:", data);
    })
    .catch((error) => {
      console.error("Error fetching data with promises:", error);
    });
}

// Call the function
fetchDataWithPromises();

// Async function to fetch data and log it using async/await
async function fetchDataWithAsyncAwait() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched with async/await:", data);
  } catch (error) {
    console.error("Error fetching data with async/await:", error);
  }
}

// Call the async function
fetchDataWithAsyncAwait();
