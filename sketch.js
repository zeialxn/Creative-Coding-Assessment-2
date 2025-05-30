let eyecolor;

function setup() {
  createCanvas(400, 500);
  noStroke();
  eyecolor = color(83, 61, 134);
}

function draw() {
  background(71, 122, 30);
  
  // first row
  fill(47, 32, 13); rect(0, 0, 50);
  fill(43, 30, 13); rect(50, 0, 50);
  fill(47, 31, 15); rect(100, 0, 50);
  fill(40, 29, 11); rect(150, 0, 50);
  fill(36, 24, 8); rect(200, 0, 50);
  fill(38, 26, 10); rect(250, 0, 50);
  fill(43, 30, 13); rect(300, 0, 50);
  fill(42, 29, 13); rect(350, 0, 50);

  // second row
  fill(43, 30, 13); rect(0, 50, 50);
  fill(43, 30, 13); rect(50, 50, 50);
  fill(43, 30, 13); rect(100, 50, 50);
  fill(51, 36, 17); rect(150, 50, 50);
  fill(66, 42, 18); rect(200, 50, 50);
  fill(66, 42, 18); rect(250, 50, 50);
  fill(43, 30, 14); rect(300, 50, 50);
  fill(40, 29, 11); rect(350, 50, 50);

  // third row
  fill(43, 30, 14); rect(0, 100, 50);
  fill(182, 137, 108); rect(50, 100, 50);
  fill(189, 142, 116); rect(100, 100, 50);
  fill(198, 150, 128); rect(150, 100, 50);
  fill(189, 139, 114); rect(200, 100, 50);
  fill(189, 142, 116); rect(250, 100, 50);
  fill(172, 118, 90); rect(300, 100, 50);
  fill(52, 37, 18); rect(350, 100, 50);

  // fourth row
  fill(170, 125, 102); rect(0, 150, 50);
  fill(180, 132, 109); rect(50, 150, 50);
  fill(170, 125, 102); rect(100, 150, 50);
  fill(173, 128, 109); rect(150, 150, 50);
  fill(156, 114, 92); rect(200, 150, 50);
  fill(187, 137, 114); rect(250, 150, 50);
  fill(156, 105, 76); rect(300, 150, 50);
  fill(156, 105, 76); rect(350, 150, 50);

  // fifth row
  fill(180, 132, 109); rect(0, 200, 50);
  fill(255); rect(50, 200, 50);
  fill(eyecolor); rect(100, 200, 50);
  fill(181, 123, 103); rect(150, 200, 50);
  fill(187, 137, 114); rect(200, 200, 50);
  fill(eyecolor); rect(250, 200, 50);
  fill(255); rect(300, 200, 50);
  fill(170, 125, 102); rect(350, 200, 50);

  // sixth row
  fill(156, 99, 70); rect(0, 250, 50);
  fill(179, 123, 98); rect(50, 250, 50);
  fill(183, 130, 114); rect(100, 250, 50);
  fill(106, 64, 48); rect(150, 250, 50);
  fill(106, 64, 48); rect(200, 250, 50);
  fill(190, 136, 108); rect(250, 250, 50);
  fill(162, 106, 71); rect(300, 250, 50);
  fill(128, 83, 52); rect(350, 250, 50);

  // seventh row
  fill(144, 94, 67); rect(0, 300, 50);
  fill(150, 95, 64); rect(50, 300, 50);
  fill(62, 34, 13); rect(100, 300, 50);
  fill(138, 76, 61); rect(150, 300, 50);
  fill(138, 76, 61); rect(200, 300, 50);
  fill(62, 34, 13); rect(250, 300, 50);
  fill(143, 94, 61); rect(300, 300, 50);
  fill(129, 83, 57); rect(350, 300, 50);

  // eighth row
  fill(111, 69, 44); rect(0, 350, 50);
  fill(109, 67, 42); rect(50, 350, 50);
  fill(62, 34, 13); rect(100, 350, 50);
  fill(56, 34, 13); rect(150, 350, 50);
  fill(62, 34, 13); rect(200, 350, 50);
  fill(62, 34, 13); rect(250, 350, 50);
  fill(131, 85, 59); rect(300, 350, 50);
  fill(122, 78, 51); rect(350, 350, 50);

  // Instruction text
  fill(255);
  textSize(14);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Press 'G' to change eye color to Green", width / 2, 430);
  text("Press 'B' to change eye color to Blue", width / 2, 450);
  text("Press 'R' to change eye color to Brown", width / 2, 470);
}

function keyPressed() {
  if (key === 'g' || key === 'G') {
    eyecolor = color(0, 150, 0); // green
  } else if (key === 'b' || key === 'B') {
    eyecolor = color(50, 100, 200); // blue
  } else if (key === 'r' || key === 'R') {
    eyecolor = color(80, 50, 20); // brown
  }
}
