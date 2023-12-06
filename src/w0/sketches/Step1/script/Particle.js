class Particle {
  constructor(x, y, color, size) {
    (this.x = x + canvas.width / 2 - png.width * 2),
      (this.y = y + canvas.height / 2 - png.height * 2),
      (this.color = color),
      (this.size = 2),
      (this.baseX = x + canvas.width / 2 - png.width * 2),
      (this.baseY = y + canvas.height / 2 - png.height * 2),
      (this.density = Math.random() * 10 + 2);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.clostPath();
    ctx.fill();
  }
  update() {
    ctx.fillStyle = this.color;
  }
}
