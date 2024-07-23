document.addEventListener("DOMContentLoaded", function () {
  const parentList = document.getElementById("parentList");
  const addButton = document.getElementById("addButton");
  let itemCounter = 1;

  // Event listener for adding items
  addButton.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCounter++;
    parentList.appendChild(newItem);
  });

  // Event listener using event delegation
  parentList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log("Clicked item:", event.target.textContent);
      // You can perform other actions here based on the clicked item
    }
  });
});
