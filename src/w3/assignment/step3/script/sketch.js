let center;
let mouse;
let centerToMouse;

let pos;
let vel;
let ellipseX;
let ellipseY;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerToMouse = createVector();
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);

  console.log('pos', pos);
  console.log('vel', vel);

  ellipseX = 0;
  ellipseY = 0;
}
function draw() {
  background('white');
  checkEdge();
  display();

  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, centerToMouse.x, centerToMouse.y);

  centerToMouse.normalize();
  centerToMouse.mult(50);
  strokeWeight(4);
  stroke('red');
  line(pos.x, pos.y, centerToMouse.x, centerToMouse.y);
  console.log(centerToMouse.mag());
}

function update() {
  ellipseX += random(0, 1);
  ellipseY += random(0, 1);
}

function checkEdge() {
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
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 100);
}
