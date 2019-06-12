// currently only a placeholder
class DetailedView {
  constructor(title, text, sizeX, sizeY) {
    this.title = title;
    this.text = text;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.innerBuffer = 20;
    this.isHeld = false;
  }

  setNode(node) {
    this.node = node;
  }


  inBounds(x, y) {
    if (abs(x - this.node.x) < this.sizeX &&
      abs(y - this.node.y) < this.sizeY) {

      return true;

    } else {
      return false;
    }
  }

  clicked(x, y) {

  }

  doubleClicked(x, y) {
    this.node.switchViews();
  }

  pressed(x, y) {
    if (abs(x - this.node.x) < this.sizeX &&
      abs(y - this.node.y) < this.sizeY &&
      abs(x - this.node.x) > this.sizeX - this.innerBuffer ||
      abs(y - this.node.y) > this.sizeY - this.innerBuffer) {

      this.isHeld = true;

      this.offsetX = mouseX - this.node.x;
      this.offsetY = mouseY - this.node.y;
    }
  }

  released(x, y) {
    this.isHeld = false;
  }

  draw() {
    if (this.isHeld) {
      this.node.x = mouseX - this.offsetX;
      this.node.y = mouseY - this.offsetY;
    }

    fill(GRAU);
    rect(this.node.x, this.node.y, this.sizeX, this.sizeY, 20);
    fill(this.node.color);
    rect(this.node.x, this.node.y, this.sizeX - this.innerBuffer, this.sizeY - this.innerBuffer, 20);
    push();
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.title, this.node.x, this.node.y - (this.sizeY / 3));
    textSize(16);
    text(this.text, this.node.x, this.node.y + (this.sizeY / 3));
    pop();
  }
}
