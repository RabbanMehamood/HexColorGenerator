let bgId= document.getElementById("buttonbg");
let hexPara= document.getElementById("code")
let refreshId= document.getElementById("refresh")

const colorsArray = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#000000", // Black
    "#FFFFFF"  // White
];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  bgId.style.backgroundColor=getRandomColor();
}

