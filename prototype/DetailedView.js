class DetailedView {
  constructor(content, sideBar, sizeX, sizeY) {
    this.content = content;
    this.sideBar=sideBar;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    // Groeße des aeußeren Rahmens zum Bewegen des Kaertchens
    this.innerBuffer = 20;
    this.isHeld = false;

    this.popUp = null;
  }

  setElementDependencies(node) {
    this.node = node;
    this.content.setDetailedView(this);
    this.sideBar.setDetailedView(this);
  }


  inBounds(x, y) {
    return (abs(x - this.node.x) < this.sizeX && abs(y - this.node.y) < this.sizeY) ||
      (this.popUp != null && this.popUp.inBounds(x, y));
  }

  clicked(x, y) {
    if (this.popUp != null && this.popUp.inBounds(x, y)) {
      this.popUp.clicked(x, y);
    }
    if(abs(x-(this.node.x + this.sizeX - this.innerBuffer - this.sizeX/9))<this.sizeX/9 &&
    abs(y-this.node.y)< this.sizeY-this.innerBuffer){
        this.sideBar.clicked(x,y,this.node.y);
    } else {
      this.content.clicked(x,y);
    }
  }

  doubleClicked(x, y) {
    if (this.popUp != null && this.popUp.inBounds(x, y)) {
      this.popUp.doubleClicked(x, y);
    }

    if (this.inSidebar(x, y)) {
      this.node.switchViews();
    }
  }

  pressed(x, y) {
    if (this.popUp != null && this.popUp.inBounds(x, y)) {
      this.popUp.pressed(x, y);
    }

    if (this.inSidebar(x, y)) {

      this.isHeld = true;

      this.offsetX = mouseX - this.node.x;
      this.offsetY = mouseY - this.node.y;

    } else {
      this.content.pressed(x,y);
    }
  }

  inSidebar(x, y) {
    return abs(x - this.node.x) < this.sizeX &&
      abs(y - this.node.y) < this.sizeY &&
      abs(x - this.node.x) > this.sizeX - this.innerBuffer ||
      abs(y - this.node.y) > this.sizeY - this.innerBuffer;
  }

  released(x, y) {
    if (this.popUp != null && this.popUp.inBounds(x, y)) {
      this.popUp.released(x, y);
    }

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

    if(this.popUp != null) {
      this.popUp.draw();
    }

    pop();
  }
}
