const PARTICLE_SIZE = 16; //Particle size
const RESOLUTION = 10;
const MAX_FORCE = 20;
const MIN_FORCE = 0;

// let imgUrl = '../assets/smileGirl.png';
let img;
let img2;
let particles = [];

function preload() {
  img = loadImage('./assets/smileGirl.png');
  img2 = loadImage('./assets/smileGrandma.jpg');
}

function setup() {
  createCanvas(800, 800);

  //캔버스를 중앙에 고정시키기 위한
  let canvasElement = document.querySelector('canvas');
  canvasElement.style.display = 'block';
  canvasElement.style.margin = 'auto';

  spawnParticles();
}

function draw() {
  background(img2);
  //image(img, 0, 0, width, height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}

function spawnParticles() {
  for (let i = 0; i < width; i += RESOLUTION) {
    for (let j = 0; j < height; j += RESOLUTION) {
      let x = (i / width) * img.width;
      let y = (j / height) * img.height;

      const color = img.get(x, y);
      particles.push(
        new Particle(i + PARTICLE_SIZE / 2, j + PARTICLE_SIZE / 2, color)
      );
    }
  }
}
