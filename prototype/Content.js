class Content {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.adultShow = true;
    this.officeWorkerShow = true;
    this.selfOptimizerShow = true;
    this.officeCategoryShow = true;
    this.gamerShow = true;

  }

  setDetailedView(detailedView) {
    this.parent = detailedView;
  }

  draw(xCoor, yCoor, sizeX, sizeY, innerBuffer, trashBinState) {
    push();
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    push();
    textStyle(BOLD);
    textSize(20);
    text(this.title, xCoor - (sizeX - 30), yCoor - (sizeY - 30));
    pop();
    if (this.title == "Target Audience") {
      // targetAudience = new TargetAudience(xCoor,yCoor,sizeX,sizeY,innerBuffer);
      // targetAudience.draw();
      push();
      rectMode(CORNER);
      fill(ROT);


      if (this.adultShow) {
        var firstrect = rect(xCoor - (sizeX - 30), yCoor - (sizeY - 100), 80, 30, 20);
        fill(0);
        text("adult", xCoor - (sizeX - 50), yCoor - (sizeY - 110));
      }
      if (this.officeWorkerShow) {
        fill(ROT);
        var scndrect = rect(xCoor - (sizeX - 120), yCoor - (sizeY - 100), 100, 30, 20);
        fill(0);
        text("office-worker", xCoor - (sizeX - 140), yCoor - (sizeY - 110));
      }
      if (this.selfOptimizerShow) {
        fill(ROT);
        var thdrect = rect(xCoor - 70, yCoor - (sizeY - 100), 120, 30, 20);
        fill(0);
        text("self-optimizer", xCoor - 50, yCoor - (sizeY - 110));
      }
      if (trashBinState == 1) {
        // adult
        if (this.adultShow) {
          image(cross, xCoor - sizeX + 32, yCoor - sizeY + 105, 20, 20);
        }
        // office worker
        if (this.officeWorkerShow) {
          image(cross, xCoor - sizeX + 122, yCoor - sizeY + 105, 20, 20);
        }
        // self optimizer
        if (this.selfOptimizerShow) {
          image(cross, xCoor - 68, yCoor - sizeY + 105, 20, 20);
        }
      }
      pop();
    } else if (this.title == "Categories") {
      push();
      rectMode(CORNER);
      fill(GRUEN);
      if (this.officeCategoryShow) {
        var firstrect = rect(xCoor - sizeX + 30, yCoor - sizeY + 90, 80, 30, 20);
        fill(0);
        text("office", xCoor - sizeX + 50, yCoor - sizeY + 100);
      }
      if (this.gamerShow) {
        fill(GRUEN);
        var scndrect = rect(xCoor - sizeX + 120, yCoor - sizeY + 90, 100, 30, 20);
        fill(0);
        text("gaming", xCoor - sizeX + 140, yCoor - sizeY + 100);
      }
      // rect(xCoor-(sizeX-210), yCoor-(sizeY-90),80,30, 20);
      // rect(xCoor-(sizeX-300), yCoor-(sizeY-90),80,30, 20);
      if (trashBinState == 1) {
        // office
        if (this.officeCategoryShow) {
          image(cross, xCoor - sizeX + 32, yCoor - sizeY + 95, 20, 20);
        }
        // gaming
        if (this.gamerShow) {
          image(cross, xCoor - sizeX + 122, yCoor - sizeY + 95, 20, 20);
        }

      }
      pop();
    } else if (this.title == "Description") {
      imageMode(CENTER);
      image(sittingPosture, xCoor + sizeX / 2 - 30, yCoor, 180, 180);
    }
    // Text unter dem Titel anzeigen: @param: text, posX, posY, sizeX, sizeY
    push();
    textSize(12);
    text(this.text, xCoor - (sizeX - 30), yCoor - (sizeY - 60), sizeX, 2 * sizeY - 2 * innerBuffer);
    pop();
    imageMode(CENTER);
    tint(255, 70);
    image(cross, xCoor + sizeX - 15, yCoor - sizeY + 15, 20, 20);
    pop();

  }

  closeIconIsClicked(x, y) {
    // get Icon stats
    let iconXPosition = this.parent.node.x + 285;
    let iconYPosition = this.parent.node.y - 135;
    // 10 is icon size in jede Richtung, d.h. ein 20x20 großes Klickfeld
    if (iconXPosition - 10 < x && x < iconXPosition + 10
      && iconYPosition - 10 < y && y < iconYPosition + 10) {
      return true;
    }
    return false;

  }

  clicked(x, y) {
    if (this.closeIconIsClicked(x, y)) {
      this.parent.node.switchViews();
    }
    // Mülleimer funktionen
    if (this.parent.trashBinState == 1) {

      if (this.title == "Target Audience") {
        // alle CloseIcons sind auf der gleichen Höhe
        if (this.parent.node.y - this.parent.sizeY + 95 < y && y < this.parent.node.y - this.parent.sizeY + 115) {
          // alle Werte kommen aus this.draw() bei title == target audience
          if (this.parent.node.x - this.parent.sizeX + 32 < x && x < this.parent.node.x - this.parent.sizeX + 52) {
            this.adultShow = false;
            console.log("adult close");
          }
          if (this.parent.node.x - this.parent.sizeX + 122 < x && x < this.parent.node.x - this.parent.sizeX + 142) {
            this.officeWorkerShow = false;
          }
          if (this.parent.node.x - 68 < x && x < this.parent.node.x - 48) {
            this.selfOptimizerShow = false;
          }
        }
      }
      if (this.title == "Categories") {
        if (this.parent.node.y - this.parent.sizeY + 90 < y && y < this.parent.node.y - this.parent.sizeY + 110) {
          // alle Werte kommen aus this.draw() bei title == Categories
          if (this.parent.node.x - this.parent.sizeX + 32 < x && x < this.parent.node.x - this.parent.sizeX + 52) {
            this.officeCategoryShow = false;
          }
          if (this.parent.node.x - this.parent.sizeX + 122 < x && x < this.parent.node.x - this.parent.sizeX + 142) {
            this.gamerShow = false;
          }
        }
      }
    }
  }


  pressed(x, y) {
    //console.log("pressed");
  }

}
