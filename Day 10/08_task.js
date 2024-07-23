const selectElement = document.querySelector("#mySelect");
const displayParagraph2 = document.querySelector("#selectedValue");

selectElement.addEventListener("change", () => {
  // Get the selected value
  const selectedValue = selectElement.value;

  // Display the selected value in the paragraph
  displayParagraph2.textContent = `Selected value: ${selectedValue}`;
});
