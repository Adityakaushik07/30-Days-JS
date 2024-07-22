// Get the HTML element by its ID
const element = document.getElementById("myElement");

// Check if the element exists
if (element) {
  // Change the text content of the element
  element.textContent = "New text content";
} else {
  console.log('Element with ID "myElement" not found');
}
