const changeBtn = document.createElement("button");
changeBtn.innerText = "Click to Change";

const h1 = document.querySelector("#task1");
h1.insertAdjacentElement("afterend", changeBtn);

changeBtn.addEventListener("click", () => {
  const changeText = document.querySelector("#task1");
  changeText.innerHTML = "TypeScript is better than javaScript";
});
