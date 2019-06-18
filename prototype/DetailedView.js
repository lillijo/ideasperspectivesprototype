class DetailedView {
  constructor(content, sideBar, sizeX, sizeY) {
    this.content = content;
    this.sideBar=sideBar;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    // Groeße des aeußeren Rahmens zum Bewegen des Kaertchens
    this.innerBuffer = 20;
    this.isHeld = false;
  }

  setElementDependencies(node) {
    this.node = node;
    this.content.setDetailedView(this);
    this.sideBar.setDetailedView(this);
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
    if (abs(x - (this.node.x+(this.sizeX-28))) < 40 &&
      abs(y - (this.node.y-(this.sizeY-5))) < 40 &&
      abs(x - this.node.x) > this.sizeX - this.innerBuffer ||
      abs(y - this.node.y) > this.sizeY - this.innerBuffer)  {
      console.log("clicked on frame");
      this.content.clicked(x,y);
    } else {
      this.content.clicked(x,y);
    }
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

    } else {
      this.content.pressed(x,y);
    }
  }

  released(x, y) {
    this.isHeld = false;
  }

  drawSpacer() {
    //NOP
  }

  draw() {
    // äußeres Rechteck - Rahmen zum Bewegen der Ansicht
    fill(this.node.color);
    rect(this.node.x, this.node.y, this.sizeX, this.sizeY, 20);
    // Inneres Rechteck - eigentlicher Hintergrund
    fill(WHITE);
    stroke(WHITE);
    rect(this.node.x, this.node.y, this.sizeX - this.innerBuffer, this.sizeY - this.innerBuffer, 20);
    push();
    // Content
    this.content.draw(this.node.x, this.node.y, this.sizeX, this.sizeY, this.innerBuffer);

    // Seitenleiste zeichnen
    this.sideBar.draw(this.node.x, this.node.y, this.sizeX, this.sizeY, this.innerBuffer);
    pop();
  }
}
