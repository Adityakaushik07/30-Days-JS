document.addEventListener("DOMContentLoaded", function () {
  const colorDiv = document.getElementById("colorDiv");

  // Event listener for mouseover
  colorDiv.addEventListener("mouseover", function () {
    colorDiv.style.backgroundColor = "green";
  });

  // Event listener for mouseout
  colorDiv.addEventListener("mouseout", function () {
    colorDiv.style.backgroundColor = "lightblue";
  });
});
