var img;
function preload() {
  img = loadImage("smurfhouse.jpeg")
}

function setup() {
  createCanvas(1000, 750);
  background(0);
}

function draw() {
  background(0);
  image(img, 0, 0);
  var v = map(mouseX, 0, width, 1, 10);
  filter(POSTERIZE, v);
}