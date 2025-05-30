// text
let mic;
let color = "white";
let welcome = "Welcome to Bath Spa University!";
let font;

// C,D,E,F,G,A,B,C (mid)
var lowC, lowD, lowE, lowF, lowG;
var midC, midD, midE, midF, midG;
var highD, highE, highF, highG;
var highCs, highDs, highFs, highGs; // sharp

function preload() {
  font = loadFont('Chivo-Italic.ttf');
  
  // low
  lowC = loadSound("Low C.mp3");
  lowD = loadSound("Low D.mp3");
  lowE = loadSound("Low E.mp3");
  lowF = loadSound("Low F.mp3");
  lowG = loadSound("Low G.mp3");
  
  // mid
  midC = loadSound("Mid C.mp3");
  midD = loadSound("Mid D.mp3");
  midE = loadSound("Mid E.mp3");
  midF = loadSound("Mid F.mp3");
  midG = loadSound("Mid G.mp3");
  
  // high
  highD = loadSound("High D.mp3");
  highE = loadSound("High E.mp3");
  highF = loadSound("High F.mp3");
  highG = loadSound("High G.mp3");
  
  // high sharp - black keys
  highCs = loadSound("High C Sharp.mp3");
  highDs = loadSound("High D Sharp.mp3");
  highFs = loadSound("High F Sharp.mp3");
  highGs = loadSound("High G Sharp.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Welcome to text
  mic = new p5.AudioIn();
  mic.start();
  textFont(font);
  textAlign(CENTER, CENTER);
  fill(color);
  
  // keys
  strokeWeight(1);
  
  // sounds
  lowC.setVolume(1); lowD.setVolume(1); lowE.setVolume(1); lowF.setVolume(1); lowG.setVolume(1);
  
  midC.setVolume(1); midD.setVolume(1); midE.setVolume(1); midF.setVolume(1); midG.setVolume(1);
  
  highD.setVolume(1); highE.setVolume(1); highF.setVolume(1); highG.setVolume(1);
}

function draw() {
  background(20, 38, 77);

  // Draw 26 white keys
  fill(255);
  push();
  translate(windowWidth/4.5, 0);
    let key1 = rect(0, 650, 38, 650);
    let key2 = rect(38, 650, 38, 650);
    let key3 = rect(76, 650, 38, 650);
    let key4 = rect(114, 650, 38, 650);
    let key5 = rect(152, 650, 38, 650);
    let key6 = rect(190, 650, 38, 650);
    let key7 = rect(228, 650, 38, 650);
    let key8 = rect(266, 650, 38, 650);
    let key9 = rect(304, 650, 38, 650);
    let key10 = rect(342, 650, 38, 650);
    let key11 = rect(380, 650, 38, 650);
    let key12 = rect(418, 650, 38, 650);
    let key13 = rect(456, 650, 38, 650);
    let key14 = rect(494, 650, 38, 650);
    let key15 = rect(532, 650, 38, 650);
    let key16 = rect(570, 650, 38, 650);
    let key17 = rect(608, 650, 38, 650);
    let key18 = rect(646, 650, 38, 650);
    let key19 = rect(684, 650, 38, 650);
    let key20 = rect(722, 650, 38, 650);
    let key21 = rect(760, 650, 38, 650);
    let key22 = rect(798, 650, 38, 650);
    let key23 = rect(836, 650, 38, 650);
    let key24 = rect(874, 650, 38, 650);
    let key25 = rect(912, 650, 38, 650);
    let key26 = rect(950, 650, 38, 650); // G4

  // Add labels to white keys (C,D,E,F,G,A,B pattern repeating)
  fill(0);
  push();
  translate(5, 20);
    textSize(16);
    text("C1", 15, 795);
    text("D1", 52, 795);
    text("E1", 90, 795);
    text("F1", 128, 795);
    text("G1", 166, 795);
    text("A1", 204, 795);
    text("B1", 242, 795);
    text("C2", 280, 795);
    text("D2", 318, 795);
    text("E2", 356, 795);
    text("F2", 394, 795);
    text("G2", 432, 795);
    text("A2", 470, 795);
    text("B2", 508, 795);
    text("C3", 546, 795);
    text("D3", 584, 795);
    text("E3", 622, 795);
    text("F3", 660, 795);
    text("G3", 698, 795);
    text("A3", 736, 795);
    text("B3", 774, 795);
    text("C4", 812, 795);
    text("D4", 850, 795);
    text("E4", 888, 795);
    text("F4", 926, 795);
    text("G4", 964, 795);
  pop();

  // Draw black keys (skip after E and B)
  fill(0);
  let bkey1 = rect(25, 650, 25, 120);   // C#
  let bkey2 = rect(63, 650, 25, 120);   // D#
  // skip E–F
  let bkey3 = rect(138, 650, 25, 120);  // F#
  let bkey4 = rect(176, 650, 25, 120);  // G#
  let bkey5 = rect(214, 650, 25, 120);  // A#
  // skip B–C
  let bkey6 = rect(290, 650, 25, 120);  // C#
  let bkey7 = rect(328, 650, 25, 120);  // D#
  // skip E–F
  let bkey8 = rect(404, 650, 25, 120);  // F#
  let bkey9 = rect(442, 650, 25, 120);  // G#
  let bkey10 = rect(480, 650, 25, 120);  // A#
  // skip B–C
  let bkey11 = rect(556, 650, 25, 120);  // C#
  let bkey12 = rect(594, 650, 25, 120);  // D#
  // skip E–F
  let bkey13 = rect(670, 650, 25, 120);  // F#
  let bkey14 = rect(708, 650, 25, 120);  // G#
  let bkey15 = rect(746, 650, 25, 120);  // A#
  // skip B–C
  let bkey16 = rect(822, 650, 25, 120); // C#
  let bkey17 = rect(860, 650, 25, 120); // D#
  // skip E–F
  let bkey18 = rect(936, 650, 25, 120); // F#

    // Add labels to black keys
    fill(255);
    push();
    translate(10, 0);
    textSize(12);
      text("C#1", 27, 710);
      text("D#1", 65, 710);
      text("F#1", 140, 710);
      text("G#1", 178, 710);
      text("A#1", 216, 710);
      text("C#2", 292, 710);
      text("D#2", 330, 710);
      text("F#2", 405, 710);
      text("G#2", 442, 710);
      text("A#2", 482, 710);
      text("C#3", 558, 710);
      text("D#3", 596, 710);
      text("F#3", 672, 710);
      text("G#3", 710, 710);
      text("A#3", 748, 710);
      text("C#4", 822, 710);
      text("D#4", 862, 710);
      text("F#4", 938, 710);
    pop();
  pop();
  
  // text
  let micLevel = mic.getLevel();
  let sizeIncrease = map(micLevel, 0, 1, 40, 200);
  textSize(sizeIncrease);
  text(welcome, width / 2, height/2.5);
  
  if (mouseIsPressed) {
    // 🔲 Check black keys first
    if (mouseX > 25 && mouseX < 63 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > 63 && mouseX < 101 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > 138 && mouseX < 176 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > 176 && mouseX < 214 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > 214 && mouseX < 252 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > 290 && mouseX < 328 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > 328 && mouseX < 360 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > 404 && mouseX < 442 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > 442 && mouseX < 480 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > 480 && mouseX < 515 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > 556 && mouseX < 594 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > 594 && mouseX < 632 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > 670 && mouseX < 708 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > 708 && mouseX < 746 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > 746 && mouseX < 784 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > 822 && mouseX < 860 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > 860 && mouseX < 898 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > 936 && mouseX < 974 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    }

    //  Then check white keys
    else if (mouseX > 0 && mouseX < 38 && mouseY > 650 && mouseY < 1300) {
      lowC.play();
    } else if (mouseX > 38 && mouseX < 76 && mouseY > 650 && mouseY < 1300) {
      lowD.play();
    } else if (mouseX > 76 && mouseX < 114 && mouseY > 650 && mouseY < 1300) {
      lowE.play();
    } else if (mouseX > 114 && mouseX < 152 && mouseY > 650 && mouseY < 1300) {
      lowF.play();
    } else if (mouseX > 152 && mouseX < 190 && mouseY > 650 && mouseY < 1300) {
      lowG.play();
    } else if (mouseX > 190 && mouseX < 228 && mouseY > 650 && mouseY < 1300) {
      midC.play();
    } else if (mouseX > 228 && mouseX < 266 && mouseY > 650 && mouseY < 1300) {
      midD.play();
    } else if (mouseX > 266 && mouseX < 304 && mouseY > 650 && mouseY < 1300) {
      midE.play();
    } else if (mouseX > 304 && mouseX < 342 && mouseY > 650 && mouseY < 1300) {
      midF.play();
    } else if (mouseX > 342 && mouseX < 380 && mouseY > 650 && mouseY < 1300) {
      midG.play();
    } else if (mouseX > 380 && mouseX < 418 && mouseY > 650 && mouseY < 1300) {
      highD.play();
    } else if (mouseX > 418 && mouseX < 456 && mouseY > 650 && mouseY < 1300) {
      highE.play();
    } else if (mouseX > 456 && mouseX < 494 && mouseY > 650 && mouseY < 1300) {
      highF.play();
    } else if (mouseX > 494 && mouseX < 532 && mouseY > 650 && mouseY < 1300) {
      highG.play();
    } else if (mouseX > 532 && mouseX < 570 && mouseY > 650 && mouseY < 1300) {
      lowC.play();
    } else if (mouseX > 570 && mouseX < 608 && mouseY > 650 && mouseY < 1300) {
      lowD.play();
    } else if (mouseX > 608 && mouseX < 646 && mouseY > 650 && mouseY < 1300) {
      lowE.play();
    } else if (mouseX > 646 && mouseX < 684 && mouseY > 650 && mouseY < 1300) {
      lowF.play();
    } else if (mouseX > 684 && mouseX < 722 && mouseY > 650 && mouseY < 1300) {
      lowG.play();
    } else if (mouseX > 722 && mouseX < 760 && mouseY > 650 && mouseY < 1300) {
      midC.play();
    } else if (mouseX > 760 && mouseX < 798 && mouseY > 650 && mouseY < 1300) {
      midD.play();
    } else if (mouseX > 798 && mouseX < 836 && mouseY > 650 && mouseY < 1300) {
      midE.play();
    } else if (mouseX > 836 && mouseX < 874 && mouseY > 650 && mouseY < 1300) {
      midF.play();
    } else if (mouseX > 874 && mouseX < 912 && mouseY > 650 && mouseY < 1300) {
      midG.play();
    } else if (mouseX > 912 && mouseX < 950 && mouseY > 650 && mouseY < 1300) {
      highD.play();
    }else if (mouseX > 418 && mouseX < 456 && mouseY > 650 && mouseY < 1300) {
      highE.play();
    } else if (mouseX > 456 && mouseX < 494 && mouseY > 650 && mouseY < 1300) {
      highF.play();
    } else if (mouseX > 494 && mouseX < 532 && mouseY > 650 && mouseY < 1300) {
      highG.play();
    }
  }
}