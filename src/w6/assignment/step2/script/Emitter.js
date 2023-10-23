class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.particles = [];
    this.particleNum = 1; // Set the number of particles to 100
    this.hasCreatedParticle = false;
  }

  createParticle() {
    if (this.hasCreatedParticle) {
      return;
    }
    for (let i = 0; i < this.particleNum; i++) {
      // Loop through 100 times to create 100 particles
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

  applyGravity(gravity) {
    this.particles.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    this.particles.forEach((each) => {
      each.display();
    });
  }
  isDead() {
    return this.particles.length === 0;
  }
}
