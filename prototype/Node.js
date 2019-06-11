class Node {
  constructor(x, y, color, lineColor, frontView, detailView) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.frontView = frontView;
    this.frontView.setNode(this);
    this.detailView = detailView;
    this.lineColor = lineColor;

    if (this.detailView != null) {
      this.detailView.setNode(this);
    }
    this.state = 0;
    this.selectedView = frontView;

    this.velocity = createVector(0, 0);
    this.dampening = 0.5;
  }

  applyVelocity() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.velocity.mult(1 - this.dampening);
  }

  inBounds(x, y) {
    return this.selectedView.inBounds(x, y);
  }

  clicked(x, y) {
    this.selectedView.clicked(x, y);
  }

  doubleClicked(x, y) {
    this.selectedView.doubleClicked(x, y);
  }

  pressed(x, y) {
    this.selectedView.pressed(x, y);
  }

  released(x, y) {
    this.selectedView.released(x, y);
  }

  switchViews() {
    if (this.state == 0 && this.detailView != null) {
      this.state = 1;
      this.selectedView = this.detailView;
    } else {
      this.state = 0;
      this.selectedView = this.frontView;
    }
  }

  draw() {
    stroke(this.lineColor);
    this.selectedView.draw(this.x, this.y);
  }
}
