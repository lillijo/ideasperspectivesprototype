class SideBar {
  constructor(backgroundColor) {
    //this.iconList = iconList;
    this.backgroundColor = backgroundColor;

    this.selected = -1;

  }

  setDetailedView(detailedView) {
    this.detailedView = detailedView;
  }

  // Laesst den Nutzer den Content bearbeiten
  editAction() {

  }

  // Öffnet die Kommentarfunktion
  commentAction() {

  }

  // Öffnet die Anhang hinzufügen Funktion
  attachementAction() {

  }

  // Nutzer kann Content ein Object (e.g. Usergroup) hinzufügen
  addObjectAction() {

  }

  clicked(x, y, middle) {
    //TODO introduce real views

    if (y < middle - 70) {
      if (this.selected === 0) {
        this.detailedView.popUp = null;
        this.selected = -1;

        return;
      }

      this.selected = 0;

      console.log("sidebar plus", y);
      this.detailedView.popUp = new SidebarPopup(1, this.detailedView);
    }
    if (y < middle - 40 && y >= middle - 70) {
      if (this.selected === 1) {
        this.detailedView.popUp = null;
        this.selected = -1;

        return;
      }

      this.selected = 1;

      console.log("sidebar comment", y);
      this.detailedView.popUp = new SidebarPopup(2, this.detailedView);
    }
    if (y < middle + 10 && y >= middle - 40) {
      if (this.selected === 2) {
        this.detailedView.popUp = null;
        this.selected = -1;

        return;
      }

      this.selected = 2;

      console.log("sidebar attach", y);
      this.detailedView.popUp = new SidebarPopup(3, this.detailedView);
    }
    if (y > middle + 70) {
      if (this.selected === 3) {
        this.detailedView.popUp = null;
        this.selected = -1;
        this.detailedView.trashBinState = 0;
        return;
      }

      this.selected = 3;

      console.log("sidebar trash", y);
      this.detailedView.trashBinState = 1;
      this.detailedView.popUp = new SidebarPopup(4, this.detailedView);
    }
  }

  // xCoor, yCoor of Node, sizeX&Y of DetailView(with frame), innerBuffer: FrameWidth
  draw(xCoor, yCoor, sizeX, sizeY, innerBuffer) {
    push();
    fill(this.backgroundColor);
    // x-Position: Mittelpunkt Knoten + Ausdehnung in x Richtung - Rahmen - Ausdehnung x richtung der Sidebar
    // = Sidebar liegt an der rechten Seite am Rahmen an
    rect(xCoor + sizeX - innerBuffer - sizeX / 9, yCoor, sizeX / 9, sizeY - innerBuffer, 20);
    imageMode(CENTER);
    if (this.selected !== -1) {
      let y;

      switch (this.selected) {
        case 0:
          y = yCoor - 100;
          break;
        case 1:
          y = yCoor - 50;
          break;
        case 2:
          y = yCoor;
          break;
        case 3:
          y = yCoor + 100;
          break;
      }

      //TODO fine tune dimensions
      rect(xCoor + sizeX - innerBuffer - sizeX / 9, y, sizeX / 9, sizeX / 9 - 3, 20);
    }
    if (this.backgroundColor == GRAU || this.backgroundColor == GELB) {
      image(edit2, xCoor + sizeX - innerBuffer - sizeX / 9, yCoor - 100, 40, 40);
    } else {
      image(plus, xCoor + sizeX - innerBuffer - sizeX / 9, yCoor - 100, 40, 40);
    }
    image(comment, xCoor + sizeX - innerBuffer - sizeX / 9, yCoor - 50, 40, 40);
    image(attach, xCoor + sizeX - innerBuffer - sizeX / 9, yCoor, 40, 40);
    image(trash, xCoor + sizeX - innerBuffer - sizeX / 9, yCoor + 100, 40, 40);

    pop();
  }


}
