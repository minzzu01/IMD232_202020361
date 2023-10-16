// Original Code from: https://editor.p5js.org/natureofcode/sketches/uT9VpVvCO
// Daniel Shiffman
// The Nature of Code
// Example 2-9: N-Bodies Attraction

//Modified by OO-SUNG SON (spctrm404)

class Body {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0.001, 0.001); // 속력 수정
    this.acceleration = createVector(0.00001, 0.00001);
    this.mass = random(16, 100); //질량값은 16~100사이
    this.radius = this.mass ** (1 / 2) * 5; // 반지름은 질량의 제곱근에 비례
    //this.radius = constrain(this.radius, 20, 50); // 반지름은 20~50 사이의 값
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position);
    let distance = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    strength *= 0.02; // 개체 이동 속도가 너무 느려서 추가
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(5); // 수정

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(50); // 수정

    this.acceleration.set(0, 0);
  }

  display() {
    noStroke();
    strokeWeight(2);
    fill(200, 127); // (컬러, 0~255)인데
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }
}
