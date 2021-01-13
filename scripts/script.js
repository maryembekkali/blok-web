var button = document.querySelector("button")
// console.log("button");

var body = document.querySelector("body")
// console.log("dit is de body");


button.addEventListener("click", function() {
  body.classList.toggle("achtergrondkleur")
});