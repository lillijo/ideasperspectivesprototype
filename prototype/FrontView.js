class FrontView {
  constructor(title, text, sizeX, sizeY) {
    this.title = title;
    this.text = text;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.isHeld = false;
  }

  setNode(node) {
    this.node = node;
  }



  inBounds(x, y) {
    if (abs(x - this.node.x) < this.sizeX && abs(y - this.node.y) < this.sizeY) {
      return true;
    } else {
      return false;
    }
  }

  clicked(x,y) {

  }

  doubleClicked(x, y) {
    this.node.switchViews();
  }

  pressed(x, y) {
    this.isHeld = true;

    this.offsetX = mouseX - this.node.x;
    this.offsetY = mouseY - this.node.y;
  }

  released(x, y) {
    this.isHeld = false;
  }

  draw() {
    if (this.isHeld) {
      this.node.x = mouseX - this.offsetX;
      this.node.y = mouseY - this.offsetY;
    }

    fill(this.node.color);
    rect(this.node.x, this.node.y, this.sizeX, this.sizeY, 20);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.title, this.node.x, this.node.y - (this.sizeY / 3));
    textSize(16);
    text(this.text, this.node.x, this.node.y + (this.sizeY / 3));
  }
}
