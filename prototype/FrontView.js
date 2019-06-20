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

  drawSpacer() {
    push();
    noStroke();
    fill(WHITE);
    rect(this.node.x, this.node.y, this.sizeX+15, this.sizeY+15, 20);
    pop();
  }

  draw() {
    fill(this.node.color);
    rect(this.node.x, this.node.y, this.sizeX, this.sizeY, 20);
    push();
    if (this.text != ""){
      fill(0);
      noStroke();
      textAlign(LEFT, CENTER);
      text("Idea", this.node.x-this.sizeX+15, this.node.y - (2*this.sizeY / 3))
      textSize(20);
      text("Office Chairs", this.node.x-this.sizeX+15, this.node.y - 5);
      textAlign(LEFT, TOP);
      textSize(12);
      text(this.text, this.node.x-this.sizeX+15, this.node.y+10 );

      //+ (this.sizeY / 3)
    } else {
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      text(this.title, this.node.x, this.node.y);
      tint(255, 70);
      imageMode(CENTER);
      image(touch, this.node.x, this.node.y+18,20,20);
    }

    pop();
  }
}
