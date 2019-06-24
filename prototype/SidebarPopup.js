class SidebarPopup {
  constructor(type, detailedViewParent) {
    this.sizeX = detailedViewParent.sizeX / 3;
    this.sizeY = detailedViewParent.sizeY;
    this.type = type;
    this.color = detailedViewParent.node.color;
    this.detailedViewParent = detailedViewParent;
    this.button;
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
    let textX = centerX - this.sizeX + 30;
    textAlign(LEFT, CENTER);
    // TODO implement real drawing functionality
    if (this.color == ROT) {
      switch (this.type) {
        case 1:
          this.drawAdd(centerX,centerY, textX,2);
          break;
        case 2:
          this.drawComment(centerX,centerY,textX,2);
          break;
        case 3:
          push();
          fill(this.color);
          rect(centerX, centerY, this.sizeX, this.sizeY, 20);
          noStroke();
          fill(0);
          text("Attach a file or image", textX, centerY - this.sizeY + 30);
          pop();
          break;
        case 4:
          //TODO delete functionality
          break;
      }
    }
    else if (this.color == GRUEN){
      switch (this.type) {
        case 1:
          this.drawAdd(centerX,centerY, textX,1);
          break;
        case 2:
          this.drawComment(centerX,centerY,textX,1);
          break;
        case 3:
          push();
          fill(this.color);
          rect(centerX, centerY, this.sizeX, this.sizeY, 20);
          noStroke();
          fill(0);
          text("Attach a file or image", textX, centerY - this.sizeY + 30);
          pop();
          break;
        case 4:
          //TODO delete functionality
          break;
      }
    }
    else if (this.color == LILA){
      if (this.type == 1){
        this.drawRating(centerX,centerY, textX);
      }
      if (this.type == 2){
        this.drawComment(centerX,centerY,textX, 3)
      }
    }

    else {
      fill(this.color);
      rect(centerX, centerY, this.sizeX, this.sizeY, 20);
      if (this.type == 2){
        this.drawComment(centerX,centerY,textX, 3)
      }
    }
  }

  clicked(x, y) {
    let centerX = this.getCenterX();
    let centerY = this.getCenterY();
    if (abs(x - centerX) < this.sizeX - 20 && abs(y - (centerY + 80)) < 10 && this.type == 2) {
      this.button = "writing";
    } else if (abs(x - centerX) < 50 && abs(y - (centerY + 50)) < 15 && this.type == 1) {
      this.button = "search";
    } else {
      this.button = "";
    }
  }

  doubleClicked(x, y) {
    //TODO
  }

  drawComment(centerX,centerY, textX,view){
    push();
    fill(this.color);
    rect(centerX, centerY, this.sizeX, this.sizeY, 20);
    noStroke();
    fill(0);
    text("Comment", textX, centerY - this.sizeY + 30);
    fill(WHITE);
    if (this.button == "writing") {
      rect(centerX, centerY + 70, this.sizeX - 20, 30);
      fill(0);
      text("here would be typing functionality...", textX, centerY + 30, this.sizeX, 80);

      text("submit", textX+50, centerY + 80, this.sizeX, 80);
    } else {
      rect(centerX, centerY + 80, this.sizeX - 20, 10);
      fill(0);
      text("write...", textX, centerY + 80);
    }
    textAlign(LEFT, CENTER);
    if(view == 2){
      fill(WHITE);
      rect(centerX, centerY - 60, this.sizeX - 20, 30, 10);
      rect(centerX, centerY - 5, this.sizeX - 20, 20, 10);
      fill(0);
      text("There should be some more groups interested in this!", textX, centerY - 100, this.sizeX, 70);
      text("Self-optimizers? really? haha", textX, centerY - 40, this.sizeX, 70);
      fill(ROT);
      text("JK", centerX + 50, centerY - 115, this.sizeX, 70);
      text("ML", centerX + 50, centerY - 50, this.sizeX, 70);
    } else if (view == 1) {
      fill(WHITE);
      rect(centerX, centerY - 60, this.sizeX - 20, 30, 10);
      fill(0);
      text("We need more categories here, this doesnt help :(", textX, centerY - 100, this.sizeX, 70);
      fill(GRUEN);
      text("JK", centerX + 50, centerY - 115, this.sizeX, 70);
    } else {

    }
    pop();
  }


  drawAdd(centerX,centerY, textX, type){
    push();
    fill(this.color);
    rect(centerX, centerY, this.sizeX, this.sizeY, 20);
    fill(WHITE);
    rect(centerX, centerY, this.sizeX - 20, this.sizeY - 50);
    fill(this.color);
    rect(centerX, centerY - 70, 50, 15, 20);
    rect(centerX, centerY - 30, 50, 15, 20);
    rect(centerX, centerY + 10, 50, 15, 20);
    push();
    stroke(this.color);
    fill(WHITE);
    rect(centerX, centerY + 50, 50, 15, 20);
    pop();
    fill(0);
    noStroke();
    textAlign(CENTER);
    if (type == 2){
      text("Add user group", centerX, centerY - this.sizeY + 30);
      text("athlete", centerX, centerY - 70);
      text("gamer", centerX, centerY - 30);
      text("student", centerX, centerY + 10);
      text("search...", centerX, centerY + 50);
    } else if (type == 1){
      text("Add category", centerX, centerY - this.sizeY + 30);
      text("gaming", centerX, centerY - 70);
      text("work", centerX, centerY - 30);
      text("health", centerX, centerY + 10);
      text("search...", centerX, centerY + 50);
    }
    if (this.button == "search") {
      text("searching functionality", centerX, centerY + 80);
    }
    pop();
  }

  drawRating(centerX,centerY, textX) {
    push();
    fill(this.color);
    rect(centerX, centerY, this.sizeX, this.sizeY, 20);
    fill(0);
    noStroke();
    text("Rate the idea", textX, centerY-120);
    text("Value\n\nNovelty\n\nFeasability\n\nElaboration", textX, centerY-20);
    text("low         high", textX+70, centerY-90);
    for(let i = 0; i<5; i++){
      noFill();
      stroke(0);
      ellipse(textX+75+(i*15),centerY-65,10);
      ellipse(textX+75+(i*15),centerY-35,10);
      ellipse(textX+75+(i*15),centerY-5,10);
      ellipse(textX+75+(i*15),centerY+25,10);
    }
    fill(WHITE);
    noStroke();
    rect(centerX, centerY+80, this.sizeX-20, 15);
    fill(0);
    text("submit", centerX-20,centerY+80);


    pop();

  }

  pressed(x, y) {
    //TODO
  }

  released(x, y) {
    //TODO
  }
}
