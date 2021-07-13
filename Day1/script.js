const color = document.getElementById("color-name");
const btn = document.getElementById("btn");
const box = document.querySelector(".box");
const button = document.querySelector("button");

const colorArr = ["#32de84", "#00308F", "#E52B50", "#FEBE10"];

btn.addEventListener("click", () => {
  index = Math.floor(Math.random() * 4);
  box.style.backgroundColor = colorArr[index];
  color.style.backgroundColor = colorArr[index];
  button.style.backgroundColor = colorArr[index];
  color.innerHTML = colorArr[index];
  box.innerHTML = colorArr[index];
});
