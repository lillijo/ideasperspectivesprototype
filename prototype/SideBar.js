class SideBar {
    constructor(backgroundColor) {
        //this.iconList = iconList;
        this.backgroundColor = backgroundColor;

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
    // xCoor, yCoor of Node, sizeX&Y of DetailView(with frame), innerBuffer: FrameWidth
    draw(xCoor, yCoor, sizeX, sizeY, innerBuffer){
        push();
        fill(this.backgroundColor);
        // x-Position: Mittelpunkt Knoten + Ausdehnung in x Richtung - Rahmen - Ausdehnung x richtung der Sidebar
        // = Sidebar liegt an der rechten Seite am Rahmen an
        rect(xCoor + sizeX - innerBuffer - sizeX/8, yCoor, sizeX/8, sizeY - innerBuffer, 20);

        pop();
    }


}