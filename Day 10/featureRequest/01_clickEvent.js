document.addEventListener("DOMContentLoaded", function () {
  const changeButton = document.getElementById("changeButton");
  const myParagraph = document.getElementById("myParagraph");

  // Add click event listener to the button
  changeButton.addEventListener("click", function () {
    // Change the text content of the paragraph
    myParagraph.textContent =
      "New text content updated by clicking the button.";
  });
});
