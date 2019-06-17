class Icon {
    constructor(sizeX, sizeY, img){
        this.sizeX=sizeX;
        this.sizeY =sizeY;
        this.img=img;
    }
    draw(xCoor, yCoor){
        image(this.img, xCoor, yCoor,this.sizeX,this.sizeY);

    }
    clicked(node) {
        node.switchViews();


    }
}