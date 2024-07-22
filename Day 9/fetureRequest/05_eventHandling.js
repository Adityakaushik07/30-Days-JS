// Get the HTML element
const element = document.getElementById("myElement");

// Add event listener to change content on click
element.addEventListener("click", function () {
  element.textContent = "Content changed!";
});

// Add event listener to change style on mouseover
element.addEventListener("mouseover", function () {
  element.style.color = "red";
});

// Add event listener to reset style on mouseout
element.addEventListener("mouseout", function () {
  element.style.color = "black";
});
