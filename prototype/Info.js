class Info {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sizeX = 40;
    this.sizeY = 40;
    this.color = GRAU;
    this.lineColor = BLACK;
    this.state = 1;
  }

  inBounds(x, y) {
    if (abs(x - this.x) < this.sizeX) {
      this.state = (this.state + 1) % 2;
    }
  }

  // xCoor, yCoor of Node, sizeX&Y of DetailView(with frame), innerBuffer: FrameWidth
  draw() {
    // info Bar ist geschlossen
    if (this.state == 0) {
      push();
      tint(255, 70);
      imageMode(CENTER);
      stroke(GRAU);
      strokeWeight(2);
      noFill();
      ellipse(this.x, this.y, 50, 50);
      fill(0);
      noStroke();
      image(info, this.x, this.y, 50, 50);
      pop();
    }
    //info Bar ist offen
    if (this.state == 1) {
      push();
      fill(this.color);
      // x-Position: Mittelpunkt Knoten + Ausdehnung in x Richtung - Rahmen - Ausdehnung x richtung der Sidebar
      // = Sidebar liegt an der rechten Seite am Rahmen an
      rectMode(CORNER);
      rect(1550, 0, 270, 950, 20);
      imageMode(CENTER);
      image(info, 1580, 50, 50, 50);
      fill(0);
      noStroke();
      tint(255, 70);
      image(touch, 1580, 105, 20, 20);
      image(cross, 1580, 140, 20, 20);
      image(trash, 1580, 185, 20, 20);
      image(plus, 1580, 240, 20, 20);
      image(edit, 1580, 275, 20, 20);
      image(comment, 1580, 318, 20, 20);
      image(attach, 1580, 355, 20, 20);
      text("click to open window \n \nclose window (can als be closed by double clicking on the frame)\n\nenable deletion mode (press the 'x' on items in usergroups or categories to delete them)\n\nadd new usergroups or categories\n\nedit the content of the current perspective \n\ncomment on the current perpective\n\nattach a file or image to the current perspective \n\n ",
        1600, 100, 210, 930);
      text("Target Audience\nis a collection of groups of people that this idea might be useful for \n\nDescription\ncontains more details about the idea, optionally with pictures and implementation thoughts \n\nCategories\nis a collection of applications or spheres of life this idea might fit in\n\nRating\nhere you can see how others have rated the idea and give your own feedback\n\nContext\nclick this to see what original technology or new research result has sparked this idea.\nYou can also get back to the main overview over all ideas from here. ",
        1575, 420, 220, 950);
      image(cross, this.x + 30, this.y - 20, 20, 20,);
      pop();
    }
  }


}
