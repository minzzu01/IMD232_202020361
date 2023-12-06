class Drunken {
  constructor() {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector();
    this.mass = 1;
  }

  applyForce(force) {
    const acc = p5.Vector.dix(force, this.mass);
    this.acc.add(calcedAcc);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.x = height;
    }
    if (this.pos.y > height) {
      this.pos.x = 0;
    }
  }

  display() {
    stroek(0);
    fill(255);
    ellipse(this.pos.x, this.pos.y, 50);
  }
}
