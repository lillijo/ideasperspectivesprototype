class Content {
    constructor(title, text) {
        this.title = title;
        this.text = text;

    }

    draw(xCoor, yCoor, sizeX, sizeY, innerBuffer){
        push();
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(20);
        text(this.title, xCoor, yCoor - (sizeY / 3));
        textSize(16);
        text(this.text, xCoor, yCoor + (sizeY / 3));
        pop();
    }
}