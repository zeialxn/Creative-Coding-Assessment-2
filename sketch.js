function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(65, 76, 82);
  
  //shadow
  fill( color('#C4CF79') );
  ellipse(200,350,130,40)
  
  fill( color('#D2E071') );
  // head
  ellipse(200, 150, 180, 150)
  noStroke();
  
  // arms
  ellipse(140,240,50,70)
  ellipse(260,240,50,70)
  
  // body
  beginShape();
  vertex(150, 210);
  vertex(250, 210);
  bezierVertex(280, 260, 280, 320, 200, 340);
  bezierVertex(120, 320, 120, 260, 150, 210);
  endShape(CLOSE);
  endShape();
  
  // ears
  rect(150,60,20,40);
  rect(230,60,20,40);
  ellipse(160,65,30,20);
  ellipse(240,65,30,20);
  
  // eyes
  push();
  fill( color('#FBFBEF') );
  ellipse(160,160,70,60,);
  ellipse(240,160,70,60,);
  fill( color('#5A6518') );
  ellipse(165,155,60,50,);
  ellipse(235,155,60,50,);
  pop();
  
  // mouth
  fill( color('#93A02D') );
  arc(200, 195, 60, 40, 0, PI);
  
}