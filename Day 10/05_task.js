const inputField = document.querySelector("#myInput");

inputField.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});
