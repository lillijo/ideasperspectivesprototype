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

  clicked(x, y) {

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
    push();
    noStroke();
    fill(WHITE);
    rect(this.node.x, this.node.y, this.sizeX+20, this.sizeY+20, 20);
    pop();
    fill(this.node.color);
    rect(this.node.x, this.node.y, this.sizeX, this.sizeY, 20);
    push();
    if (this.text != ""){
      fill(0);
      noStroke();
      textAlign(LEFT, CENTER);
      textSize(20);
      text(this.title, this.node.x-this.sizeX+15, this.node.y - (this.sizeY / 3));
      textAlign(LEFT, TOP);
      textSize(12);
      text(this.text, this.node.x-this.sizeX+15, this.node.y );
      //+ (this.sizeY / 3)
    } else {
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      text(this.title, this.node.x, this.node.y);
    }

    pop();
  }
}
