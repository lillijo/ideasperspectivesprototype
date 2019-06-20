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
        tint(255,70);
        image(cross, xCoor+ sizeX-15, yCoor-sizeY+15,20,20);
        pop();

    }
    closeIconIsClicked(x,y){
        // get Icon stats
        console.log("cross checked");
        let iconXPosition = this.parent.node.x + 285;
        let iconYPosition = this.parent.node.y - 135;
        // 10 is icon size in jede Richtung, d.h. ein 20x20 großes Klickfeld
        if (iconXPosition - 10 < x && x < iconXPosition + 10
            && iconYPosition - 10 < y && y < iconYPosition + 10){
            console.log("cross clicked");
            return true;
        }
        return false;

    }

    clicked(x, y) {
        if (this.closeIconIsClicked(x,y)){
            this.parent.node.switchViews();
            console.log("schließe dich!!");
        }
    }


    pressed(x,y) {
      //console.log("pressed");
    }

}
