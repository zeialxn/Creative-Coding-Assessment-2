function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(100, 25, 105);
  let spacing = 80;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      let colorone = color(random(255), random(255), random(255));
      let colortwo = color(random(255), random(255), random(255));
      drawDoubleEllipse(x, y, 60, 30, colorone, colortwo);
    }
  }
}

function drawDoubleEllipse(x, y, bigcircle, smallcircle, colorone, colortwo) {
  noStroke();

  fill(colorone);
  ellipse(x, y, bigcircle);

  fill(colortwo);
  ellipse(x, y, smallcircle);
}

