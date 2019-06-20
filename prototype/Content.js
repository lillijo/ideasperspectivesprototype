class Content {
    constructor(title, text, closeIcon) {
        this.title = title;
        this.text = text;
        this.closeIcon = closeIcon;

    }
    setDetailedView(detailedView){
        this.parent = detailedView;
        this.closeIcon.parent = this;
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

        this.closeIcon.draw(xCoor+(sizeX-28), yCoor - (sizeY-5));
        pop();

    }
    closeIconIsClicked(x,y){

        // get Coordinates and Size from node
        let xCoor = this.parent.node.x;
        let yCoor = this.parent.node.y;
        let sizeX = this.parent.sizeX;
        let sizeY = this.parent.sizeY;
        // da wo ich das icon hin male ist nicht wo es am ende ist, d.h. wo ich klicken muss...warum?
        if(xCoor+(sizeX-20 - this.closeIcon.sizeX/2) < x && x < xCoor+(sizeX-20) + this.closeIcon.sizeX/2
            && yCoor - sizeY + 10 - this.closeIcon.sizeY/2 < y && y < yCoor - sizeY + 10 + this.closeIcon.sizeY/2){
            return true;
        }

    }

    clicked(x, y) {
        if (this.closeIconIsClicked(x,y)){
            this.closeIcon.clicked(this.parent.node);
        }
    }


    pressed(x,y) {
      //console.log("pressed");
    }

}
