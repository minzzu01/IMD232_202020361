let aDrunkenObj;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  aDrunkenObj = new Drunken(width / 2, height / 2);

  background('white');
}

function draw() {
  // background('white');
  //ellipse(mouseX, mouseY);
  const randomForce = p5.Vector.random2D();
  randomForce.mult(0.5);
  aDrunkenObj.applyForce();
  aDrunkenObj.update();
  aDrunkenObj.infiniteEdge();
  aDrunkenObj.display();
}
