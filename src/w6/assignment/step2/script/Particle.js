class Particle {
  constructor(posX, posY, velAngle, velMag, mass, Hue) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);
    this.vel.rotate(velAngle);
    this.vel.mult(velMag);
    this.acc = createVector();
    this.mass = mass;
    this.rad = 6;
    this.lifespan = 60;
    this.Hue = Hue;
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass); //p5.Vector 클래스의 div() 함수를 사용하여 힘(force)을 입자의 질량(this.mass)으로 나눠줌
    this.acc.add(calcedAcc); //나눠진 힘(calcedAcc)을 현재 입자의 가속도(this.acc)에 더함
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.mult(0.89);
    this.acc.mult(0);
    this.lifespan--; // 파티클 수명을 1만큼 감소
  }

  display() {
    colorMode(HSB, 100);
    noStroke();
    // 'this.lifespan*2' : 입자의 수명을 기반으로 투명도를 조절
    fill(this.Hue / random(1, 7), 100, 100, this.lifespan * 2);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      this.pos.y > height + this.rad ||
      this.lifespan < 0
    );
  }
}
