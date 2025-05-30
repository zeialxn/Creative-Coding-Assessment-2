function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(100);
  background(128, 0, 32);
}

function draw() {
  noStroke();
  fill(128, 0, 32, 10);
  rect(0, 0, width, height);

  push();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
  drawingContext.shadowBlur = 15;
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;

  fill(0);
  noStroke();
  ellipse(500, 500, 700, 700);
  pop();

  fill(240);
  ellipse(500, 500, 100, 100);

  fill(20);
  ellipse(850, 150, 100, 100);

  //text color
  fill(128, 0, 32);

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.02);
  textFont("Brush Script MT");
  stroke(0);
  text("Bath Spa University", 0, 0);
  pop();

  push();
  stroke(255);
  strokeWeight(35);
  line(850, 150, 690, 700);

  stroke(255);
  strokeWeight(35);
  line(685, 710, 640, 720);
  pop();

  fill(255);
  ellipse(850, 150, 70, 70);
}
