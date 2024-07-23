// URL of a public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Async function to fetch data and log it
async function fetchAndLogData() {
  try {
    // Make the fetch request
    const response = await fetch(apiUrl);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON from the response
    const data = await response.json();

    // Log the data to the console
    console.log('Response data:', data);
  } catch (error) {
    // Log any errors to the console
    console.error('Error fetching data:', error);
  }
}

// Call the async function to fetch and log data
fetchAndLogData();
