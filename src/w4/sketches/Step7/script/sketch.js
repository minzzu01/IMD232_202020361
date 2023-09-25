let ball;
let ball2;
let gravity;
let wind;
let att;

// 모든 물체는 중력 가속도가 똑같음ㅋ

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Mover(width / 3, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  //우리가 설계해놓은 Mover 사용 가능
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
  att = new Attractor(width / 2, height / 2, 100);
}
function draw() {
  //   let g = p5.Vector.mult(gravity, ball.mass);
  //   ball.applyForce(g);
  //   let g2 = p5.Vector.mult(gravity, ball2.mass);
  //   ball2.applyForce(g2);
  //   if (mouseIsPressed) {
  //     ball.applyForce(wind);
  //     ball2.applyForce(wind);
  //   }
  // wind는 마우스 클릭했을 때만 생성
  //   let force1 = att.attract(ball);
  //   ball.applyForce(force1);
  //   let force2 = att.attract(ball2);
  //   ball2.applyForce(force2);
  ball.applyForce(att.attract(ball));
  ball2.applyForce(att.attract(ball2));

  ball.update();
  ball2.update();
  //   ball.edgeBounce();
  //   ball2.edgeBounce();
  background('salmon');
  fill('white');
  ball.display();
  ball2.display();
  att.display();
}
