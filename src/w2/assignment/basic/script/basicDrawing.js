function setup() {
  setCanvasContainer('p1-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background('white');

  fill(255);
  rectMode(CORNER);
  colorMode(RGB);
  stroke(0);
  strokeWeight(0);

  //벽지
  fill('DarkSeaGreen');
  rect(0, 0, 1200, 1200);

  // 바닥
  fill('#F4A460');
  // rect(0, 460, 1200, 300);

  fill('#F4A460');
  rect(0, 460, 1200, 30);
  fill('Coral');
  rect(0, 490, 1200, 30);
  fill('#F4A460');
  rect(0, 520, 1200, 30);
  fill('Coral');
  rect(0, 550, 1200, 30);
  fill('#F4A460');
  rect(0, 580, 1200, 30);
  fill('Coral');
  rect(0, 610, 1200, 30);

  //전등

  fill('Beige');
  ellipse(480, 0, 400, 110);
  fill('OliveDrab');
  rect(240, 00, 480, 16, 0, 0, 40, 40);

  // 시계
  fill('#fff8dc');
  stroke('#dc143c');
  strokeWeight(10);
  circle(100, 100, 100, 100);

  stroke('DarkSalmon');
  triangle(100, 100, 100, 100, 86, 75);
  fill('#F4A460');
  triangle(100, 100, 100, 100, 120, 120);

  stroke('CornflowerBlue');
  fill('CornflowerBlue');
  circle(100, 100, 4, 4);

  // 액자
  stroke('CornflowerBlue');
  fill('#fff8dc');
  rect(50, 180, 100, 100, 20);

  // 시계 못
  stroke('Black');
  circle(100, 42, 1, 1);
  stroke('Gray');
  circle(100, 40, 1, 1);

  stroke('Black');
  circle(100, 172, 1, 1);
  stroke('Gray');
  circle(100, 170, 1, 1);

  // 창
  fill('DeepSkyBlue');
  stroke('#800000');
  strokeWeight(0);
  rect(200, 80, 480, 260, 12);
  fill('white');
  circle(300, 160, 100);
  circle(240, 140, 80);
  circle(360, 140, 90);
  circle(330, 120, 60);
  circle(400, 130, 60);

  circle(560, 220, 80);
  circle(580, 160, 70);
  circle(600, 220, 70);
  circle(660, 120, 60);

  fill('DarkOliveGreen');
  ellipse(580, 300, 400, 100);
  fill('DarkTurquoise');
  ellipse(440, 320, 180, 60);
  fill('DarkGreen');
  ellipse(340, 310, 280, 80);

  // 창틀 Brown,#800000
  stroke('Brown');
  strokeWeight(12);
  rect(440, 80, 10, 260);
  rect(200, 80, 10, 260);
  rect(200, 80, 10, 260);
  rect(680, 80, 10, 260);
  rect(200, 80, 480, 10);
  rect(200, 340, 480, 10);

  fill('#800000');
  stroke(0);
  strokeWeight(0);
  rect(216, 96, 460, 12);
  rect(216, 356, 460, 12);

  stroke('Brown');
  strokeWeight(12);
  rect(440, 80, 10, 260);

  strokeWeight(0);

  //선반

  fill('BurlyWood');
  rect(832, 90, 260, 140);
  fill('OldLace');
  rect(828, 80, 24, 180, 0, 0, 10, 10);
  fill('Moccasin');
  rect(820, 90, 260, 24, 0, 0, 10, 10);
  fill('OldLace');
  rect(810, 80, 260, 24, 0, 0, 10, 10);

  fill('Moccasin');
  rect(820, 230, 260, 24, 10, 10, 0, 0);
  fill('OldLace');
  rect(810, 240, 260, 24, 10, 10, 0, 0);

  fill('GhostWhite');
  circle(990, 184, 80);

  fill('GhostWhite');
  circle(900, 184, 80);
  fill('Gainsboro');
  circle(900, 184, 60);
  fill('Brown');
  rect(878, 214, 6, 16);
  fill('Brown');
  rect(916, 214, 6, 16);

  // 장롱
  fill('Gray');
  rect(600, 120, 200, 380);
  fill('DarkGrey');
  rect(600, 140, 200, 10);
  fill('DarkGrey');
  rect(600, 240, 200, 10);
  fill('DarkGrey');
  rect(600, 340, 200, 10);
  fill('DarkGrey');
  rect(600, 440, 200, 10);

  fill('Gainsboro');
  rect(600, 120, 200, 20);
  fill('Gainsboro');
  rect(600, 500, 200, 20);
  fill('Gainsboro');
  rect(600, 220, 200, 20);
  rect(600, 320, 200, 20);
  rect(600, 420, 200, 20);

  fill('Gainsboro');
  rect(600, 120, 20, 380);
  fill('Gainsboro');
  rect(780, 120, 20, 380);

  //책
  fill('DarkKhaki');
  rect(620, 140, 16, 80);
  fill('DarkSalmon');
  rect(636, 140, 16, 80);
  fill('CornflowerBlue');
  rect(636 + 16, 140, 16, 80);

  fill('DarkKhaki');
  rect(620, 240, 16, 80);
  fill('DarkSalmon');
  rect(636, 240, 16, 80);
  fill('CornflowerBlue');
  rect(636 + 16, 240, 16, 80);
  fill('DarkSeaGreen');
  rect(636 + 16 + 16, 240, 16, 80);
  fill('CornflowerBlue');
  rect(636 + 16 + 16 + 16, 240, 16, 80);

  fill('CornflowerBlue');
  rect(636 + 16 + 16, 340, 16, 80);
  fill('DarkSalmon');
  rect(636 + 16 + 16 + 16, 340, 20, 80);
  fill('BlueViolet');
  rect(636 + 16 + 16 + 16 + 16, 340, 30, 80);
  fill('DarkRed');
  rect(636 + 16 + 16 + 16 + 16 + 16, 340, 20, 80);
  fill('DarkTurquoise');
  rect(636 + 16 + 16 + 16 + 48, 340, 24, 80);
  fill('CornflowerBlue');
  rect(636 + 16 + 16 + 16 + 60, 340, 24, 80);
  fill('DarkKhaki');
  rect(636 + 16 + 16 + 16 + 60 + 12, 340, 14, 80);
  fill('CornflowerBlue');
  rect(636 + 16 + 16 + 16 + 60 + 18, 340, 18, 80);

  // 식탁
  fill('PapayaWhip');
  rect(0, 380, 480, 30);
  fill('PeachPuff');
  rect(0, 410, 460, 12);
  fill('PapayaWhip');
  rect(440, 380, 20, 180);

  // 의자
  fill('#dc143c');
  ellipse(190, 450, 120, 30);
  fill('PapayaWhip');
  rect(120, 300, 20, 260);
  fill('PapayaWhip');
  rect(240, 300, 20, 260);

  fill('PapayaWhip');
  rect(120, 320, 120, 100);
  fill('#dc143c');
  circle(182, 360, 24, 24);
  circle(200, 360, 24, 24);

  fill('PeachPuff');
  rect(140, 320, 8, 100);
  fill('PeachPuff');
  rect(232, 320, 8, 100);
  fill('PeachPuff');
  rect(140, 420, 100, 8);
  fill('PeachPuff');
  rect(140, 470, 100, 8);
  fill('PapayaWhip');
  rect(120, 450, 140, 20);
}
