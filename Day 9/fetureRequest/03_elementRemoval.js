function removeElement() {
  // Select the element by its ID
  var element = document.getElementById("element-to-remove");

  // Check if the element exists
  if (element) {
    // Remove the element from the DOM
    element.parentNode.removeChild(element);
  } else {
    console.log("Element not found");
  }
}
