document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const keyPressedOutput = document.getElementById("keyPressed");
  const inputValueOutput = document.getElementById("inputValue");

  // Event listener for keydown
  textInput.addEventListener("keydown", function (event) {
    keyPressedOutput.textContent = event.key;
  });

  // Event listener for keyup
  textInput.addEventListener("keyup", function () {
    inputValueOutput.textContent = textInput.value;
  });
});
