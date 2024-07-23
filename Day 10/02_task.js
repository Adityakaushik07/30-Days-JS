const img = document.querySelector("#hanuman");
const btn = document.querySelector("#toggle");
btn.addEventListener("dblclick", () => {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});
