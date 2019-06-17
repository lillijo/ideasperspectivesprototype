class Content {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    draw(xCoor, yCoor, sizeX, sizeY, innerBuffer){
        push();
        fill(0);
        noStroke();
        textAlign(LEFT, TOP);
        textSize(20);
        text(this.title, xCoor-(sizeX-30), yCoor-(sizeY-30));
        if (this.title == "Target Audience"){
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
          image(trash, xCoor-(sizeX-30),yCoor+70,40,40);
          pop();
        }

        pop();
        image(cross, xCoor+(sizeX-28), yCoor-(sizeY-5),20,20);


    }

    clicked(x, y) {
      console.log("clicked");
    }

    dragged(x, y) {
      console.log("detailView is dragged, you can use drag and drop to put user group in trash");
    }

    pressed(x,y) {
      console.log("pressed");
    }

}
