let img; // 변수 'img' 선언

function setup() {
  img = loadImage('assets/smileGirl.png', () => {
    setCanvasContainer('canvas', 1, 1, true);
    draw(); // draw 함수 수동 호출
  });
}

function draw() {
  // 이미지를 캔버스 크기에 맞춰 확대하여 그린다.
  image(img, 0, 0, width, height);
}
