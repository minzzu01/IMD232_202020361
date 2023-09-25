let pos;
let vel;
let acc;
let mv;
let cv;
let cvTomv;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  mv = createVector();
  cvTomv = createVector();
  cv = createVector(width / 2, height / 2);
}

function draw() {
  background('white');
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);

  mv.x = mouseX;
  mv.y = mouseY;

  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);

  strokeWeight(2);
  stroke('black');
  // line(pos.x, pos.y, mv.x, mv.y);
  let cvTomv = p5.Vector.sub(createVector(mv.x, mv.y), cv);
  line(pos.x, pos.y, cv.x + cvTomv.x, cv.y + cvTomv.y);

  stroke('crimson');
  // mv.sub(vel);

  line(pos.x, pos.y, pos.x + 10 * vel.x, pos.y + 10 * vel.y);

  stroke('cornflowerblue');
  // let blueline = p5.Vector.sub(vel, acc);
  line(pos.x, pos.y, pos.x + 100 * acc.x, pos.y + 100 * acc.y);
}
