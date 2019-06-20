class SideBar {
    constructor(backgroundColor) {
        //this.iconList = iconList;
        this.backgroundColor = backgroundColor;

    }
    setDetailedView(detailedView){
        this.detailedView = detailedView;
    }
    // Laesst den Nutzer den Content bearbeiten
    editAction(){

    }
    // Öffnet die Kommentarfunktion
    commentAction(){

    }
    // Öffnet die Anhang hinzufügen Funktion
    attachementAction(){

    }
    // Nutzer kann Content ein Object (e.g. Usergroup) hinzufügen
    addObjectAction() {

    }
    clicked(x,y,middle) {
      if (y < middle-70 ){
        console.log("sidebar plus",y);
      }
      if(y < middle-40 &&y >= middle-70){
        console.log("sidebar comment",y);
      }
      if(y < middle+10 &&y >= middle-40){
        console.log("sidebar attach",y);
      }
      if(y > middle+70){
        console.log("sidebar trash",y);
      }
    }
    // xCoor, yCoor of Node, sizeX&Y of DetailView(with frame), innerBuffer: FrameWidth
    draw(xCoor, yCoor, sizeX, sizeY, innerBuffer){
        push();
        fill(this.backgroundColor);
        // x-Position: Mittelpunkt Knoten + Ausdehnung in x Richtung - Rahmen - Ausdehnung x richtung der Sidebar
        // = Sidebar liegt an der rechten Seite am Rahmen an
        rect(xCoor + sizeX - innerBuffer - sizeX/7, yCoor, sizeX/7, sizeY - innerBuffer, 20);
        imageMode(CORNER);
        image(trash, xCoor+ sizeX - innerBuffer - sizeX/7-20,yCoor+80,40,40);

        image(plus, xCoor+ sizeX - innerBuffer - sizeX/7-20,yCoor-120,40,40);
        image(comment, xCoor+ sizeX - innerBuffer - sizeX/7-20,yCoor-70,40,40);
        image(attach, xCoor+ sizeX - innerBuffer - sizeX/7-20,yCoor-20,40,40);

        pop();
    }


}
