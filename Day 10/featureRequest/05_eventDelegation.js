document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const addItemButton = document.getElementById("addItemButton");
  let itemCounter = 1;

  // Event listener for adding items
  addItemButton.addEventListener("click", function () {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = "Item " + itemCounter++;
    container.appendChild(newItem);
  });

  // Event delegation: Listen for click events on the container and delegate to .item elements
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("item")) {
      console.log("Clicked item:", event.target.textContent);
      // Example of handling the click event (you can do more here)
      event.target.classList.toggle("clicked");
    }
  });
});
