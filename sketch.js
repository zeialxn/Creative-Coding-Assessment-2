let sound, amp, start = false;

let colors = ["#410445",
              "#A5158C",
              "#FF2DF1",
              "#D34DEE",
              "#BF4BF8"];

function preload() {
  sound = loadSound('beat.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text("Press anywhere to start.", width / 2, height / 2);
  textFont('Georgia');
}

function draw() {
  if (!start) return;

  background(0, 15);
  let level = amp.getLevel();
  let bars = 50;
  let w = width / bars;

  for (let i = 0; i < bars; i++) {
    let h = level * random(200, 800);
    fill(random(colors));
    rect(i * w, height - h, w - 2, h);
  }
}

function mousePressed() {
  if (!start) {
    sound.play();
    amp = new p5.Amplitude();
    start = true;
  }
}
