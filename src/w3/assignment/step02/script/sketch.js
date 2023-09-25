let ellipse_center;
let vel;
let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ellipse_center = createVector(width / 2, height / 2);
  vel = createVector();
}

function draw() {
  background('white');

  let centerToMouse = createVector(mouseX, mouseY).sub(ellipse_center);

  acc = centerToMouse.normalize().mult(0.1);

  vel.add(acc);

  ellipse_center.add(vel);

  noStroke();
  fill('black');
  ellipse(ellipse_center.x, ellipse_center.y, 100);

  stroke(0);
  line(
    ellipse_center.x,
    ellipse_center.y,
    ellipse_center.x + acc.x * 100,
    ellipse_center.y + acc.y * 100
  );

  stroke(0, 0, 255);
  line(
    ellipse_center.x,
    ellipse_center.y,
    ellipse_center.x + vel.x * 100,
    ellipse_center.y + vel.y * 100
  );

  stroke(255, 0, 0);
  line(ellipse_center.x, ellipse_center.y, mouseX, mouseY);
  strokeWeight(1);
  ellipse_center.normalize();
  ellipse_center.mult(500);
}
