let ball;
let ballSpeed = -1;

function setup() {
  createCanvas(400, 400);
  noStroke();
  ball = height;
}

function draw() {
  background(0, 150, 0);

  let x = width / 2;
  let y = map(ball, height, 70, 130, 30);  

  drawSky();
  drawGoal();

  fill(230, 230, 230);
  ellipse(x, ball, y, y);

  if (ball > 70) {
    ball += ballSpeed;
  }
}

function drawSky() {
  fill(200, 250, 255);
  rect(0, 0, 400, 90);
}

function drawGoal() {
  push();
  fill(255, 255, 255);
  rect(100, 40, 200, 50);
  pop();

  push();
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(10);
  ellipse(200, 140, 160, 100);
  pop();

  push();
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(10);
  beginShape();
  vertex(102, 95);
  vertex(298, 95);
  vertex(350, 150);
  vertex(50, 150);
  endShape(CLOSE);
  pop();

  push();
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(15);
  ellipse(200, 400, 300, 150);
  pop();
}
