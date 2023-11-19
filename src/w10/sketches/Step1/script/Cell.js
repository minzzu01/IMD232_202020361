class Cell {
  constructor(x, y, w, h, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.nextState = nextState;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    this.friends = [
      cellArray[idx], //왼위
      cellArray[idx], //중위
      cellArray[idx], //오위
      cellArray[idx], //오
      cellArray[idx], //오아
      cellArray[idx], //중아
      cellArray[idx], //왼아
      cellArray[idx], //왼
    ];
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
