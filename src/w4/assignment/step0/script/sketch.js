//얘도 안잡힘+마찰력X

let mover;
let gravity;
let mVec;
let pMVec;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.2);
  mVec = createVector();
  pMVec = createVector();
  throwingForce = createVector();
  background(255);
}

function draw() {
  background(255);

  const force = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(force);
  mover.update();
  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
  pMVec.set(mouseX, mouseY);
}

function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
  mVec.set(mouseX, mouseY);
}

function mouseReleased() {
  mover.mouseReleased();

  const speed = p5.Vector.dist(mVec, pMVec);
  throwingForce = p5.Vector.sub(mVec, pMVec).mult(speed * 0.01);
  mover.applyForce(throwingForce);
}
