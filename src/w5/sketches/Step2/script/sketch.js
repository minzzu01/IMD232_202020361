// for(let 변수이름 = 초기값; 변수이름 < 값; 변수이름 += 값) {
//     조건이 부합하는 동안 할 일
// }
//
// for(let a = 0; a<3; a++) {
//     circle(a, 10, 10);
// }
//
// for(let 변수이름 = 0; 변수이름 < 어레이이름.length; 변수이름++) {
//     어레이이름[변수이름];
// }
//
// for(let 변수이름 = 0; 변수이름 < 반복횟수; 변수이름++) {
//     어레이이름[변수이름];
// }
// 정확하게 반복횟수만큼 노란색 코드를 실행함

let anArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);

  // line(10, 10, 10, height - 10);
  // line(20, 10, 20, height - 10);
  // line(30, 10, 30, height - 10);
  // line(40, 10, 40, height - 10);
  // line(50, 10, 50, height - 10);
  // line(60, 10, 60, height - 10);
  // line(70, 10, 70, height - 10);
  // line(80, 10, 80, height - 10);
  // line(90, 10, 90, height - 10);
  for (let a = 0; a < width; a += 10) {
    line(a + 10, 10, a + 10, height - 10);
  }

  for (let a = 0; a < anArray.length; a++) {
    console.log(`anArray[${a}]`, anArray[a]);
  }
  fill(0);
  for (let a = 0; a < 10; a++) {
    circle(a * 10, height / 2, 10);
  }
}

function draw() {}
