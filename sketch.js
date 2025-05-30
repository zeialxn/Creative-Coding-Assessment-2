let songs = [
  { title: "Blinding Lights - The Weeknd", streams: 4852716648 },
  { title: "Shape of You - Ed Sheeran", streams: 4374210715 },
  { title: "Someone You Loved - Lewis Capaldi", streams: 3914114085 },
  { title: "Starboy - The Weeknd", streams: 3907266717 },
  { title: "As It Was - Harry Styles", streams: 3888601567 },
  { title: "Sunflower - Post Malone", streams: 3824982285 },
  { title: "Sweater Weather - The Neighbourhood", streams: 3791439168 },
  { title: "One Dance - Drake", streams: 3643327795 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
  noLoop();
}

function draw() {
  background(30);
  
  let barwidth = 130;
  let gap = 50;
  let margintop = 150;
  let marginbottom = 100;
  let marginleft = 70;
  let barheight = height - margintop - marginbottom;
  let streamcount = max(songs.map(s => s.streams));

  fill(255);
  textAlign(CENTER);
  textSize(24);
  
  push();
  textStyle(BOLD);
  textSize(35);
  textFont("Trebuchet MS");
  text("Top 8 Most Streamed Songs on Spotify of All Time", width / 2, 80);
  pop();

  for (let i = 0; i < songs.length; i++) {
    let x = marginleft + i * (barwidth + gap);
    let h = map(songs[i].streams, 0, streamcount, 0, barheight);
    let y = height - marginbottom - h;

    fill('#1DB954');
    rect(x, y, barwidth, h, 5);

    fill(200);
    textSize(14);
    textAlign(CENTER, BOTTOM);
    text(nfc(songs[i].streams, 0), x + barwidth / 2, y - 8);

    fill(255);
    textSize(12);
    textAlign(CENTER, TOP);
    text(songs[i].title, x + barwidth / 2, height - marginbottom + 8);
  }
}
