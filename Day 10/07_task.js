const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Create a FormData object to easily access form data
  const formData = new FormData(form);

  // Log each form field and its value to the console
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});
