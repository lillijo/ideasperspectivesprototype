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
        rect(xCoor + sizeX - innerBuffer - sizeX/9, yCoor, sizeX/9, sizeY - innerBuffer, 20);
        imageMode(CENTER);
        image(plus, xCoor+ sizeX - innerBuffer - sizeX/9,yCoor-100,40,40);
        image(comment, xCoor+ sizeX - innerBuffer - sizeX/9,yCoor-50,40,40);
        image(attach, xCoor+ sizeX - innerBuffer - sizeX/9,yCoor,40,40);
        image(trash, xCoor+ sizeX - innerBuffer - sizeX/9,yCoor+100,40,40);

        pop();
    }


}
