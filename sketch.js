function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0, 150, 0);

  drawSky();
  drawGoal();

  fill(230, 230, 230);
  ellipse(200,330,115,115);
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
