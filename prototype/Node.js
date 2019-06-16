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

    this.velocity = createVector();
    this.dampening = 0.5;
    this.maxVelocity = 10;
    this.ramp = 1; // Influences the shape of the function
    this.strength = -10; // Strength: positive value attracts, negative value repels
  }

  attractNode(otherNode) {
    let thisNodeVector = createVector(this.x, this.y);
    let otherNodeVector = createVector(otherNode.x, otherNode.y);
    let d = thisNodeVector.dist(otherNodeVector);

    let radius = 900;

    if (d > 0 && d < radius) {
      let s = pow(d / radius, 1 / this.ramp);
      let f = s * 9 * this.strength * (1 / (s + 1) + ((s - 3) / 4)) / d;
      let  df = thisNodeVector.sub(otherNodeVector);
      df.mult(f);

      otherNode.velocity.add(df);
    }
  }


  applyVelocity() {
    this.velocity.limit(this.maxVelocity);

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
