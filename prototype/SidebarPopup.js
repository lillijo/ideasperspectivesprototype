class SidebarPopup {
  constructor(sizeX, sizeY, detailedViewParent) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
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

    // TODO implement real drawing functionality

    push();

    fill(color(255, 0, 0));
    rect(centerX, centerY, this.sizeX, this.sizeY, 20);

    pop();
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