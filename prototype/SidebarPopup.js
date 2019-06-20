class SidebarPopup {
  constructor(type, detailedViewParent) {
    this.sizeX = detailedViewParent.sizeX / 3;
    this.sizeY = detailedViewParent.sizeY;
    this.type = type;
    this.color = detailedViewParent.node.color;
    this.detailedViewParent = detailedViewParent;
  }

  getCenterX() {
    return this.detailedViewParent.node.x + this.detailedViewParent.sizeX + this.sizeX;
  }

  getCenterY() {
    return this.detailedViewParent.node.y;
  }

  inBounds(x, y) {
    let centerX = this.getCenterX();
    let centerY = this.getCenterY();

    return abs(x - centerX) < this.sizeX &&
      abs(y - centerY) < this.sizeY;
  }

  draw() {
    let centerX = this.getCenterX();
    let centerY = this.getCenterY();
    let textX = centerX-this.sizeX+30
    textAlign(LEFT, CENTER);

    // TODO implement real drawing functionality

    switch (this.type) {
      case 1:
        push();
        fill(this.color);
        rect(centerX, centerY, this.sizeX, this.sizeY, 20);
        noStroke();
        fill(0);
        text("Add user group",textX, centerY-this.sizeY+30);
        pop();
        break;
      case 2:
        push();
        fill(this.color);
        rect(centerX, centerY, this.sizeX, this.sizeY, 20);
        noStroke();
        fill(0);
        text("Comment",textX, centerY-this.sizeY+30);
        fill(255);
        rect(centerX, centerY+80, this.sizeX-20,10);
        fill(0);
        text("write...",centerX-55, centerY+80);
        pop();
        break;
      case 3:
        push();
        fill(this.color);
        rect(centerX, centerY, this.sizeX, this.sizeY, 20);
        noStroke();
        fill(0);
        text("Attach a file or image",textX, centerY-this.sizeY+30);
        pop();
        break;
      case 4:
        //TODO delete functionality
        break;

    }
  }

  clicked(x, y) {
    //TODO
  }

  doubleClicked(x, y) {
    //TODO
  }

  pressed(x, y) {
    //TODO
  }

  released(x, y) {
    //TODO
  }
}
