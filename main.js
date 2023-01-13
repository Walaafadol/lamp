let circleLamp = document.getElementById("circle");
let btn = document.getElementById("onoff");
let body = document.querySelector("body");
let audio = document.getElementById("audio");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  audio.play();
});
