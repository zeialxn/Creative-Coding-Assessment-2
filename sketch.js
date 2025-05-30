var img, x, y;
function preload() {
  img = loadImage("smurfhouse.jpeg");
}

function setup() {
  createCanvas (1000, 750);
  background(0);
  noStroke();
}

function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x, y);
  fill(c[0], c[1], c[2], 100);
  ellipse(x, y, 30, 30);
}