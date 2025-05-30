var trail = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(250,250,250);
}

function draw() {
  background(0,0,100);
  trail.push([mouseX, mouseY]);
  
  for (i=0; i<trail.length; i++) {
    let s = 40*(i/trail.length);// size
    ellipse(trail[i][0], trail[i][1], s);
  }
  
  if (trail.length > 20) {
    trail.shift();
  }

}