class Overview {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sizeX = 200;
    this.sizeY = 50;
    this.color = GRAU;
    this.lineColor = BLACK;
    this.state = 0;
  }

  inBounds(x, y) {
    if ((abs(x - this.x) < this.sizeX && abs(y - this.y) < this.sizeY) && this.state == 0) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  }

  // xCoor, yCoor of Node, sizeX&Y of DetailView(with frame), innerBuffer: FrameWidth
  draw() {
    if (this.state == 0) {
      push();
      tint(255, 70);
      imageMode(CENTER);
      image(back, this.x, this.y, 50, 50);
      fill(0);
      noStroke();
      textSize(20);
      textAlign(LEFT, CENTER);
      text("Overview over Ideas", 100, 50);
      pop();
    }
    if (this.state == 1) {
      push();
      imageMode(CORNER);
      image(overviewMock, 0, 0, 560, 500);
      stroke(0);
      line(0, 0, 560, 0);
      line(0, 0, 0, 500);
      line(0, 500, 560, 500);
      line(560, 0, 560, 500);

      pop();
    }
  }


}
