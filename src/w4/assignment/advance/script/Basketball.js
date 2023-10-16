class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y); //
    this.vel = createVector(0, 0); //
    this.acc = createVector(0, 0); //
    this.mass = mass; //
    this.rad = mass; //
    this.isHover = false; //
    this.isDragging = false; //
    this.draggingOffset = createVector(0, 0); //
  }

  applyForce(force) {
    const f = force.copy().div(this.mass); //
    this.acc.add(f); //
  }

  update() {
    this.vel.mult(0.98); // 마찰력
    this.vel.add(this.acc); //
    this.pos.add(this.vel); //
    this.acc.set(0, 0); //
    this.edgeBounce(); // 화면 edge에서 튕기게
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
    fill('#ff7733');
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true; // 커서가 물체에 있을 때 드래그 상태로 설정
      // 물체의 x 좌표와 마우스 x 좌표의 차이를 계산하여 드래그 시 물체의 위치를 고정시키기 위한 오프셋으로 설정
      this.draggingOffset.x = this.pos.x - mX; //
      // 위와 x -> y 변경되면 동일
      this.draggingOffset.y = this.pos.y - mY; //
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x; //
      this.pos.y = mY + this.draggingOffset.y; //
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
