let emitters = [];
let g;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100);
  g = createVector(0, 0.1);

  background('white');
}

function draw() {
  background('white');
  console.log('createdEmittersNum :', emitters.length);

  for (let i = emitters.length - 1; i >= 0; i--) {
    emitters[i].createParticle(); // 새 파티클 생성
    emitters[i].applyGravity(g); // 파티클에 중력, 이때 g는 상단에 있는 것처럼 g는 0, 0.1의 벡터 > y축으로 0.1의 속도로 떨어짐
    emitters[i].update(); //
    emitters[i].display(); // 파티클 display

    if (emitters[i].isDead()) {
      // 파티클 생성 주기 끝났는지 여부 판단
      emitters.splice(i, 1); // splice() 함수: 특정 인덱스 요소 제거 시 이용, splice(i,1)> i 인덱스에 해당하는 파티클 생성기 제거, 1 개[제거할 요소 개수]의 요소 제거
    }
  }
}

//클릭
function mousePressed() {
  if (isMouseInsideCanvas()) {
    for (let i = 0; i < 100; i++) {
      // 100번 반복, 즉 마우스 클릭 1번 = 100개의 입자 발생
      const emitter = new Emitter(mouseX, mouseY); // 새로운 Emitter 생성. 마우스X, Y값 위치
      emitters.push(emitter); // 생성된 Emitter 객체를 emitter 배열에 추가. = 100개의 파티클 생성기가 생성되고, 이를 emitter 배열에 추가 > 파티클들이 그 위치에서 나오게
    }
  }
}
