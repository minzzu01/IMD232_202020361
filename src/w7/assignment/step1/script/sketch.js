let traffic; // traffic 변수를 선언
let infiniteOffset = 80; // infiniteOffset 변수를 초기화

// setup() 함수 - 스케치 초기 설정을 위한 함수
function setup() {
  setCanvasContainer('canvas', 3, 2, true); // 'canvas' ID를 가진 요소를 찾아 그 안에 스케치를 생성
  colorMode(HSL, 360, 100, 100, 100); // 컬러 모드를 HSL로 설정
  background('black'); // 배경색을 black로 설정
  traffic = new Traffic(); // Traffic 객체를 생성

  // 10개의 vehicle을 무작위 위치에 추가
  for (let n = 0; n < 10; n++) {
    // n이라는 변수를 0으로 초기화, n이 10보다 작은 동안 반복하라 > n이 0에서 시작해서 1씩 증가하며 반복문 실행(반복문 총 10번 실행)
    traffic.addVehicle(random(width), random(height));
    // addVehicle(): 무작위로 결정된 x좌표와 y좌표를 받아와서 해당 위치에 새로운 차량을 추가
    // random(width)는 0부터 width까지의 무작위 x좌표를 생성하고, random(height)는 0부터 height까지의 무작위 y좌표를 생성 > 즉, 각 반복에서 새로운 차량이 무작위 위치에 추가
  }
}

// draw() 함수: 스케치의 각 프레임을 그리는 함수
function draw() {
  background('black'); // 배경색을 black로 지우고 초기화
  traffic.run(); // Traffic 객체의 run() 함수를 호출하여 차량을 업데이트하고 그림
}

// mouseDragged() 함수: 마우스가 드래그될 때 호출되는 함수
function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY); // 현재 마우스 위치에 새로운 Vehicle을 추가
}
