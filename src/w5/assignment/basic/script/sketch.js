const cNum = 8;
const rNum = 8;
const cellSize = 50; // 각 셀의 크기
let angleBegin = 0;
let angleBeginVel = 0.01; // 회전 속도
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleStep = TWO_PI / cNum;
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      const x = c * cellSize + cellSize / 2;
      const y = r * cellSize + cellSize / 2;

      push();
      translate(x, y); // 셀의 중심으로 이동
      rotate(angleBegin + c * angleStep); // 회전 각도 적용
      fill(200, 80, 70); // 예시로 사용할 노란색 셀
      ellipse(0, 0, cellSize, cellSize); // ellipse로 변경
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
