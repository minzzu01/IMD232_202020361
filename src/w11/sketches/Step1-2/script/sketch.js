let cam;
let filteredImage;

function setup() {
  setCanvasContainer(640, 480);
  cam = createCapture(VIDEO);
  cam.size(240, 0); // Set the height to 0 to maintain aspect ratio
  cam.hide();
}

function draw() {
  background(255);

  // 이미지에 필터 적용 전에 원본 이미지를 그립니다.
  image(cam, 0, 0, width, (cam.height / cam.width) * width);

  // 필터 적용 전에 이미지의 픽셀 데이터를 가져옵니다.
  cam.loadPixels();

  // 필터를 적용한 이미지를 저장할 변수를 생성합니다.
  filteredImage = createImage(cam.width, cam.height);
  filteredImage.loadPixels();

  // 필터를 적용합니다.
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      const idx = (x + y * cam.width) * 4;
      const color = color(
        cam.pixels[idx],
        cam.pixels[idx + 1],
        cam.pixels[idx + 2]
      );

      // 여기서 필터를 적용하고 filteredImage에 저장합니다.
      color.filter(BLUR, 5);
      color.filter(BRIGHTNESS, 1.5);
      color.filter(SATURATE, 2);
      color.filter(CONTRAST, 2);

      filteredImage.set(x, y, color);
    }
  }

  // 필터를 적용한 이미지를 표시합니다.
  filteredImage.updatePixels();
  image(filteredImage, width, 0, width, (cam.height / cam.width) * width);
}
