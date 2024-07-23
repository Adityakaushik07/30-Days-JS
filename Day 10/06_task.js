const inputField2 = document.querySelector("#myInput");
const displayParagraph = document.querySelector("#displayText");

inputField2.addEventListener("keyup", () => {
  displayParagraph.textContent = inputField2.value;
});
