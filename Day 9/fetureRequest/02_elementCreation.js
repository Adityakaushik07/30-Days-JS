// Create a new div element
const newDiv = document.createElement("div");

// Set some properties for the new div
newDiv.id = "myNewDiv";
newDiv.textContent = "Hello, I am a new div!";

// Append the new div to the body
document.body.appendChild(newDiv);

// Select an existing element to remove (for example, the new div we just created)
const elementToRemove = document.getElementById("myNewDiv");

// Remove the selected element from the DOM
if (elementToRemove) {
  elementToRemove.remove();
}
