class Icon {
    constructor(relativeXCoor, relativeYCoor, sizeX, sizeY, type, img){
        this.sizeX=sizeX;
        this.sizeY =sizeY;
        this.img=img;
        this.relativeXCoor = relativeXCoor;
        this.relativeYCoor = relativeYCoor;
        this.type = type;
    }
    draw(xCoor, yCoor){
        image(this.img, xCoor, yCoor,this.sizeX,this.sizeY);

    }
}