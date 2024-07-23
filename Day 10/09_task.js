document.addEventListener("DOMContentLoaded", function () {
  // Find the <ul> element by its ID
  var list = document.getElementById("myList");

  // Add click event listener to the <ul> element
  list.addEventListener("click", function (event) {
    // Check if the clicked element is an <li> within the <ul>
    if (event.target.tagName === "LI") {
      // Log the text content of the clicked <li> item
      console.log(event.target.textContent);
    }
  });
});
