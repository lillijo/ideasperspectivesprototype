class Content {
    constructor(title, text, closeIcon) {
        this.title = title;
        this.text = text;
        this.closeIcon = closeIcon;

    }
    setDetailedView(detailedView){
        this.parent = detailedView;
    }

    draw(xCoor, yCoor, sizeX, sizeY, innerBuffer){
        push();
        fill(0);
        noStroke();
        textAlign(LEFT, TOP);
        textSize(20);
        text(this.title, xCoor-(sizeX-30), yCoor-(sizeY-30));
        if (this.title == "Target Audience"){
          // targetAudience = new TargetAudience(xCoor,yCoor,sizeX,sizeY,innerBuffer);
          // targetAudience.draw();
          textSize(12);
          text(this.text, xCoor-(sizeX-30), yCoor-(sizeY-60),370);
          push();
          rectMode(CORNER);
          fill(ROT);
           var firstrect = rect(xCoor-(sizeX-30), yCoor-(sizeY-90),80,30, 20);
          //rect(xCoor-(sizeX-30), yCoor-(sizeY-130),80,30, 20);
           var scndrect = rect(xCoor-(sizeX-120), yCoor-(sizeY-90),100,30, 20);
          // rect(xCoor-(sizeX-120), yCoor-(sizeY-130),80,30, 20);
          // rect(xCoor-(sizeX-210), yCoor-(sizeY-90),80,30, 20);
          // rect(xCoor-(sizeX-300), yCoor-(sizeY-90),80,30, 20);
          fill(0);
          text("adult", xCoor-(sizeX-50), yCoor-(sizeY-100));
          text("office-worker", xCoor-(sizeX-140), yCoor-(sizeY-100));
          //text("adults", xCoor-(sizeX-50), yCoor-(sizeY-100));
          pop();
        }
        imageMode(CENTER);
        this.closeIcon.draw(xCoor + 285, (yCoor - 135));
        pop();

    }
    iconIsClicked(x,y, icon){
        // get Icon stats
        console.log("cross checked");
        let iconXPosition = this.parent.node.x + icon.relativeXCoor;
        let iconYPosition = this.parent.node.y - icon.relativeYCoor;

        if (iconXPosition - icon.sizeX/2 < x && x < iconXPosition + icon.sizeX/2
            && iconYPosition - icon.sizeY/2 < y && y < iconYPosition + icon.sizeY/2 ){
            console.log("cross clicked");
            return true;
        }
        return false;

    }
    closeIconIsClicked(x,y){

        // get Coordinates and Size from node
        let xCoor = this.parent.node.x;
        let yCoor = this.parent.node.y;
        let sizeX = this.parent.sizeX;
        let sizeY = this.parent.sizeY;
        // da wo ich das icon hin male ist nicht wo es am ende ist, d.h. wo ich klicken muss...warum?
        if(xCoor+(sizeX-20 - this.closeIcon.sizeX/2) < x && x < xCoor+(sizeX-20) + this.closeIcon.sizeX/2
            && yCoor - sizeY + 20 - this.closeIcon.sizeY/2 < y && y < yCoor - sizeY + 20 + this.closeIcon.sizeY/2){
            return true;
        }

    }

    clicked(x, y) {
        if (this.iconIsClicked(x,y, this.closeIcon)){
            this.parent.node.switchViews();
            console.log("schließe dich!!");
            console.log(this.parent.node.state);

        }
    }


    pressed(x,y) {
      //console.log("pressed");
    }

}
