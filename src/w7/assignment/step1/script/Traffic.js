// Class Traffic
class Traffic {
  constructor() {
    /// constructor() 함수: Traffic 클래스 인스턴스 생성 시 필요한 초기화 작업을 수행하는데 이용
    this.vehicles = [];
  } // 시뮬레이션을 업데이트하고 차량을 그리는 메서드

  run() {
    this.vehicles.forEach((eachVehicle) => {
      // 모든 Vehicle에 대해 반복
      const separate = eachVehicle.separate(this.vehicles); // Vehicle들 간의 격리 행동을 계산하고 적용
      separate.mult(1); // 격리의 영향을 증폭
      eachVehicle.applyForce(separate);

      const align = eachVehicle.align(this.vehicles); // Vehicle들 간의 방향 일치 행동을 계산하고 적용
      align.mult(0.5); // 방향 일치의 영향을 줄임
      eachVehicle.applyForce(align);

      const cohesion = eachVehicle.cohesion(this.vehicles); // Vehicle들 간의 인접성 행동을 계산하고 적용
      cohesion.mult(0.5); // 인접성의 영향 줄임
      eachVehicle.applyForce(cohesion);

      eachVehicle.update(); // Vehicle의 상태를 업데이트하고 화면 경계를 벗어나지 않도록 함
      eachVehicle.borderInfinite(); // 객체가 화면 경계 벗어나지 않도록 처리
      eachVehicle.display(); // Vehicle을 화면에 그림
    });
  }

  addVehicle(x, y) {
    // 새로운 Vehicle을 추가하는 메서드 // 주어진 위치에 Vehicle을 생성
    // const mass = floor(random(1, 3));
    const mass = 1;
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(210), 100, 40))
    );
    // Vehicle의 질량과 크기를 지정하고 무작위 색상을 설정하여 배열에 추가
    // x: vehicle 초기 위치 x 값, y: vehicle 초기 위치 y 값
    // mass: vehicle 질량
    // mass*12: vehcile 반경 계산을 위한 값
    // 5: vehicle 최대 속도
    // 0.1: vehicle이 받을 수 있는 최대 힘
    // color(random(210), 100, 40): vehicle 색상 지정
  }
}
