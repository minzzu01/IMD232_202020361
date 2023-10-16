let mover;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 50);
  gravity = createVector(0, 0.5); // 중력힘(x좌표,y좌표)

  throwingForce = createVector(); // 던지는 힘

  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  const force = p5.Vector.mult(gravity, mover.mass);

  background(255);
  mover.applyForce(force);
  mover.update(); //
  mover.display(); //
}

function mouseMoved() {}

function mousePressed() {
  pMVec.set(pmouseX, pmouseY); //
}

function mouseDragged() {
  mVec.set(mouseX, mouseY); //
  pMVec.set(pmouseX, pmouseY); //
  //중력 힘
  let gravityForce = gravity.copy().mult(mover.mass); //
  mover.applyForce(gravityForce); //
  // 드래그로 개체 끌고오는 힘 추가
  let throwingForceVec = p5.Vector.sub(mVec, pMVec); //
  throwingForceVec.mult(20); //
  mover.applyForce(throwingForceVec); //
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  mover.applyForce(throwingForce);
}
