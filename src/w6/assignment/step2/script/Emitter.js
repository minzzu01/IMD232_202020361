class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.particles = [];
    this.particleNum = 1; // 파티클 수 100개로 설정
    this.hasCreatedBall = false;
  }

  createParticle() {
    if (this.hasCreatedParticle) {
      return;
    }
    for (let i = 0; i < this.particleNum; i++) {
      // 파티클 100번 생성하기 위해서 *100
      const angle = random(TAU);
      const p = new Particle(
        this.emittingPos.x,
        this.emittingPos.y,
        angle,
        random(19, 20),
        10,
        random(0, 360)
      );
      this.particles.push(p);
    }
    this.hasCreatedParticle = true;
  }

  //
  applyGravity(gravity) {
    // particle 배열 반복, each = 배열 내 파티클
    this.particles.forEach((each) => {
      // gravity 벡터를 각 파티클 질량[mass] 곱한 값을 scaleG에 저장
      const scaledG = p5.Vector.mult(gravity, each.mass);
      // 각 입자에 새로 계산된 중력(scaledG) 적용
      each.applyForce(scaledG);
    });
  }

  update() {
    // 파티클 배열 역순으로 반복
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // this.particle에 대해 update함수 호출, 파티클 상태 업데이트
      this.particles[i].update();
      // 파티클 수명 다해 소멸 > 해당 파티클 배열에서 제거
      if (this.particles[i].isDead()) {
        // splice 함수: 배열에서 해당 인덱스 파티클 제거
        this.particles.splice(i, 1);
      }
    }
  }

  // forEach() 함수: particle 배열에 있는 각 파티클에 대한 반복 진행
  display() {
    this.particles.forEach((each) => {
      each.display();
    });
  }
  isDead() {
    return this.particles.length === 0;
  }
}
