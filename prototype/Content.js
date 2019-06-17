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
        pop();
        image(cross, xCoor+(sizeX-28), yCoor-(sizeY-5),20,20);

    }

    clicked(x, y) {
      if (console.log("detailView is clicked"));
    }

}
