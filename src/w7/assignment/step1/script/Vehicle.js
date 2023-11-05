// Vehicle  Class
class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 초기 위치를 나타내는 벡터를 생성
    // vehicle 객체의 생성자입니다. 초기 위치(x, y), 질량(mass), 반경(rad), 최대 속도(speedMx), 최대 힘(forceMx), 색상(color)을 매개변수로 받아와서 차량을 초기화합니다
    this.pos = createVector(x, y);
    // 무작위 방향으로 초기 속도 벡터를 생성
    this.vel = p5.Vector.random2D();
    // 가속도 벡터 생성
    this.acc = createVector();
    //  vehicle의 질량 지정
    this.mass = mass;
    //  vehicle의 반경 지정
    this.rad = rad;
    // 최대 속도 지정
    this.speedMx = speedMx;
    // 최대 힘 지정
    this.forceMx = forceMx;
    // vehicle 이웃 범위 반경 설정
    this.neighborhooodRad = 50;
    // vehicle 색상 지정
    this.color = color;
  }

  // 다른 vehicle과의 인접성을 유지하는 행동을 구현한 함수인 'cohesion' 정의
  cohesion(others) {
    // 관련 vehicle 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 vehicle에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 vehicle과 다른 vehicle 사이의 거리 제곱을 계산
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 이웃 범위 이내라면 조절력 벡터에 다른 vehicle의 위치를 합한다!
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    // 이웃 vehicle이 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      //cnt 변수가 0보다 크다면 아래의 계산을 수행
      steer.div(cnt); // steer 벡터를 cnt로 나눠서 (평균을 구함) 방향을 조절. (이렇게 함으로써 차량은 주변 차량들의 평균 위치로 향함)
      steer.sub(this.pos); // steer 벡터에서 현재 차량의 위치 벡터 this.pos를 뺀 결과를 steer 벡터에 할당
      steer.setMag(this.speedMx); //steer 벡터의 크기를 this.speedMx로 설정
      steer.sub(this.vel); // steer 벡터에서 현재 차량의 속도 벡터(this.vel)를 빼서 새로운 방향을 계산
      steer.limit(this.forceMx); // steer 벡터의 크기를 this.forceMx로 제한
    }
    return steer; //계산된 steer 벡터를 반환
  }

  // 다른 vehicle과의 일치된 방향을 유지하는 행동을 구현한 함수인 align을 정의
  align(others) {
    // 관련 vehicle 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 vehicle에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 vehicle과 다른 vehicle 사이의 거리 제곱을 계산
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 이웃 범위 이내라면 조절력 벡터에 다른 vehicle의 속도를 더한다
        steer.add(each.vel);
        cnt++;
      }
    });
    // 이웃 vehicle이 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 다른 vehicle과의 격리를 유지하는 행동을 구현한 함수인 separate을 정의
  separate(others) {
    // 관련 vehicle 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 vehicle에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 vehicle과 다른 vehicle 사이의 거리를 계산
        const dist = this.pos.dist(each.pos);
        // 만약 거리가 0보다 크고 두 vehicle의 반경 합보다 작다면 조절력을 추가
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    // 이웃 vehicle이 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      // 71번째 줄 참고
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 힘을 vehicle에 적용하는 함수를 정의
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  // vehicle의 상태를 업데이트하는 함수를 정의
  update() {
    this.vel.add(this.acc); //현재 Vehicle의 속도(this.vel)에 가속도(this.acc)를 더함
    this.vel.limit(this.speedMx); //Vehicle의 속도를 최대 허용 속도(this.speedMx)로 제한
    this.pos.add(this.vel); //현재 Vehicle의 위치(this.pos)에 속도(this.vel)를 더하여 Vehicle을 이동
    this.acc.mult(0); //가속도(this.acc)를 0으로 재설정
  }

  // vehicle이 화면 경계를 벗어나지 않도록 하는 함수를 정의
  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      // vehicle의 x 좌표가 화면 왼쪽 경계보다 작은(-infiniteOffset보다 작은) 경우:
      this.pos.x = width + infiniteOffset; // vehicle의 x 좌표를 화면의 오른쪽 끝으로 이동 // width: 화면 너비, infiniteOffset: 화면 밖으로 객체가 벗어났을 때 여분의 거리
    } else if (this.pos.x > width + infiniteOffset) {
      //vehicle의 x 좌표가 화면 오른쪽 경계보다 큰(width + infiniteOffset보다 큰) 경우:
      this.pos.x = -infiniteOffset; //vehicle의 x 좌표를 화면의 왼쪽 끝으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      //vehicle의 y 좌표가 화면 위쪽 경계보다 작은(-infiniteOffset보다 작은) 경우
      this.pos.y = height + infiniteOffset; // vehicle의 y 좌표를 화면의 아래쪽 끝으로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      // vehicley 좌표가 화면 아래쪽 경계보다 큰(height + infiniteOffset보다 큰) 경우
      this.pos.y = -infiniteOffset; //vehicle의 y 좌표를 화면의 위쪽 끝으로 이동
    }
  }

  // vehicle을 화면에 그리는 함수를 정의
  display() {
    // 현재 좌표계를 저장하고  vehicle의 위치로 이동
    push();
    translate(this.pos.x, this.pos.y);
    //  vehicle의 방향으로 회전
    rotate(this.vel.heading());
    //  vehicle의 외형을 그림
    noStroke(); // stroke X
    fill(this.color);
    beginShape();
    vertex(this.rad, 0); // vertex() 함수는 각 꼭지점의 x, y 좌표를 받아 해당 좌표에 점을 그리는 역할
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); // 현재 좌표계를 복원
  }
}
