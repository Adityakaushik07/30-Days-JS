document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myForm");
  const selectFruit = document.getElementById("selectFruit");
  const selectedFruitOutput = document.getElementById("selectedFruit");

  // Event listener for form submission
  myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Get the selected option value and update output
    const selectedOption = selectFruit.options[selectFruit.selectedIndex];
    selectedFruitOutput.textContent = selectedOption.textContent;
  });

  // Event listener for select dropdown change
  selectFruit.addEventListener("change", function () {
    // Update the output immediately when the dropdown value changes
    const selectedOption = selectFruit.options[selectFruit.selectedIndex];
    selectedFruitOutput.textContent = selectedOption.textContent;
  });
});
