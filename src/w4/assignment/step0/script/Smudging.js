class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = sqrt(mass) * 5;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector();
    this.throwingForce = createVector();
  }

  applyForce(force) {
    const f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.edgeBounce();
  }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x = 0 + this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x = width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y = height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 6 * this.rad);
  }

  mouseMoved(mX, mY) {
    const d = dist(mX, mY, this.pos.x, this.pos.y);
    this.isHover = d <= this.rad;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.draggingOffset.x = this.pos.x - mX;
      this.draggingOffset.y = this.pos.y - mY;
      this.mVec.set(mX, mY);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x;
      this.pos.y = mY + this.draggingOffset.y;
    }
  }

  mouseReleased() {
    if (this.isDragging) {
      this.isDragging = false;
      this.throwingForce = p5.Vector.sub(this.mVec, this.pMVec) * mult(0.1);
      this.applyForce(this.throwingForce);
    }
  }
}
