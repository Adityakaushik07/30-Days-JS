// Function to change the attribute of an HTML element
function changeAttribute(elementId, attributeName, newValue) {
  // Get the HTML element by its ID
  const element = document.getElementById(elementId);

  // Check if the element exists
  if (element) {
    // Change the specified attribute of the element
    element.setAttribute(attributeName, newValue);
  } else {
    console.log(`Element with ID "${elementId}" not found`);
  }
}

// Example usage:
// Change the 'src' attribute of an <img> element with ID 'myImage'
changeAttribute("myImage", "src", "newImagePath.jpg");

// Change the 'href' attribute of an <a> element with ID 'myLink'
changeAttribute("myLink", "href", "https://newurl.com");
