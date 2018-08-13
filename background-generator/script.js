var c1h = document.getElementById("c1h");
var c2h = document.getElementById("c2h");
var c1rgb = document.getElementById("c1rgb");
var c2rgb = document.getElementById("c2rgb");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var colors = ["#ff0000", "#00ff00", "#0000ff"];
var btn = document.getElementById("btn");

//random hex generator
function random_color() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//hex to RGB converter
function convertHex(hex) {
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = "rgb(" + r + " , " + g + " , " + b + ")";
  return result;
}

//random button evt handler
btn.onclick = function(evt) {
  var random_color1 = random_color();
  console.log(random_color1);
  var random_color2 = random_color();
  console.log(random_color2);
  color1.value = random_color1;
  color2.value = random_color2;
  body.style.background =
    "linear-gradient(to right, " + random_color1 + ", " + random_color2 + ")";
  c1h.textContent = random_color1;
  c2h.textContent = random_color2;
  c1rgb.textContent = convertHex(random_color1);
  c2rgb.textContent = convertHex(random_color2);
  r1.style.background = random_color1;
  r2.style.background = random_color2;
};

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  c1h.textContent = color1.value;
  c2h.textContent = color2.value;
  c1rgb.textContent = convertHex(color1.value);
  c2rgb.textContent = convertHex(color2.value);
  r1.style.background = color1.value;
  r2.style.background = color2.value;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
