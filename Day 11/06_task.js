// URL of a public API
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Function to fetch data and log it
function fetchAndLogData() {
  fetch(apiUrl)
    .then((response) => {
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON from the response
      return response.json();
    })
    .then((data) => {
      // Log the data to the console
      console.log("Response data:", data);
    })
    .catch((error) => {
      // Log any errors to the console
      console.error("Error fetching data:", error);
    });
}

// Call the function to fetch and log data
fetchAndLogData();
