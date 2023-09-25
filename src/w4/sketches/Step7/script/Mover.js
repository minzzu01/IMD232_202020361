class Mover {
  // constructor 생성자 //mass 질량...
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    // this.vel = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.acc = createVector(0, 0);
    // 초기값 x,y 0,0으로
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    //force.div(this.mass);
    let divedForce = p5.Vector.div(force, this.mass); // p5.Vector.div 는 괄호 안 숫자는 변화시키지 않음
    this.acc.add(divedForce);
  }

  update() {
    //속도에 가속도 더하기, 위치에 속도 더하기
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // 반복되면서 계속 더해지니까 가속도 초기화하기 위해
  }

  edgeBounce() {
    //this.radius: 기준선
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
    // pos 앞에 this 꼭 붙이기
  }
}
