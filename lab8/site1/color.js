const background = document.getElementById("colorCode");
const button1 = document.getElementsByClassName("btn")[0];
const button2 = document.getElementsByClassName("btn")[1];
const button3 = document.getElementsByClassName("btn")[2];
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const firstbtn = document.querySelector(".btn1");
const secondbutton = document.querySelector(".btn2");
const thirdbutton = document.querySelector(".btn3");
const colorPanel = document.querySelector("#colorPanel");
const colorCode = document.querySelector("#colorCode");
const body = document.querySelector("body");

function ChangeColor() {
  let index = Math.floor(colors.length * Math.random());
  colorPanel.style.backgroundColor = colors[index];
  colorCode.innerHTML = colors[index];
}
firstbtn.addEventListener("click", ChangeColor);
// -----------------------------------------
// for second function
function randomRgbValues() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const redgreenblue = `rgba(${red},${green},${blue})`;
  colorPanel.style.backgroundColor = redgreenblue;
  colorCode.innerHTML = redgreenblue;
}
secondbutton.addEventListener("click", randomRgbValues);
// -----------------------------------------
// for third function
function randomHexValues() {
  let hexColor = "#";
  const characters = "0123456789ABCDEF";
  for (let i = 1; i <= 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hexColor += characters[randomIndex];
    colorPanel.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor;
  }
}
thirdbutton.addEventListener("click", randomHexValues);
