// Original Code from: https://editor.p5js.org/natureofcode/sketches/uT9VpVvCO
// Daniel Shiffman
// The Nature of Code
// Example 2-9: N-Bodies Attraction

//Modified by OO-SUNG SON (spctrm404)

let bodies = [];

let G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 30; i++) {
    // 'body' 수 10개에서 20개 이상으로 변경
    bodies[i] = new Body(random(width), random(height));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
