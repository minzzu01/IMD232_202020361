let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  //cam.size(240, 480); //숫자 낮을수록 픽셀 수 줄어서 깨져보임
  cam.hide();
  console.log(cam);
  //noLoop();
}

function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = width * y + x;
      const color = pixels[idx];
      const b = brightness(color);
    }
  }
  updatePixels();

  filter(GRAY);
  // THRESHOLD: 이미지를 이진 이미지로 변환합니다.
  // GRAY: 이미지를 흑백으로 변환합니다.
  // OPAQUE: 이미지를 불투명하게 만듭니다.
  // INVERT: 이미지의 색상을 반전시킵니다.
  // POSTERIZE: 이미지의 색상 수를 감소시킵니다.
  // DILATE: 이미지의 라이트 영역을 확장합니다.
  // ERODE: 이미지의 라이트 영역을 축소합니다.
  // BLUR: 이미지를 흐리게 만듭니다.
  // OPACITY: 이미지의 불투명도를 조절합니다.
  // ERODE: 이미지의 라이트 영역을 축소합니다.
}
