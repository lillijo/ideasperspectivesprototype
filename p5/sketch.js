/*
 * @name Mouse Functions
 * @description Click on the box and drag it across the screen.
 */
let boxSize = 60;
let boxes = [];
let colors = [[200,200,100],[180,180,180],[200,0,0],[0,200,0],[0,0,200]];
 
/*function preload() {
  inconsolata = loadFont('assets/inconsolata.otf');
}*/

function setup() {
  createCanvas(1000, 800);
  rectMode(RADIUS);
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  textSize(18);
  desc = new Box(0, 'Description', 100, 400);
  ratng = new Box(1, 'Rating', 800, 100);
  users = new Box(2, 'Target Audience', 200, 100);
  categ = new Box(3, 'Application Fields', 400, 600);
  context = new Box(4, 'Context', 500, 100);
  boxes.push(desc);
  boxes.push(ratng);
  boxes.push(users);
  boxes.push(categ);
  boxes.push(context);
}

function draw() {
  background(255);
  
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].display(mouseX, mouseY);
    fill(0);
    text(boxes[i].name,boxes[i].x,boxes[i].y);
    
  }
}

function mousePressed() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].boxPressed(mouseX, mouseY);
  }
}

function mouseDragged() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].boxDragged(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].boxReleased(mouseX, mouseY);
  }
}

   function doubleClicked() {
       for (let i = 0; i < boxes.length; i++) {
        boxes[i].boxClicked(mouseX, mouseY);
        }
   }



class Box {
  constructor(color, name, x, y) {
    this.color = colors[color];
    this.name = name;
    this.locked = false;
    this.overBox = false;
    this.x = x;
    this.y = y;
    this.xOffset = 0.0;
    this.yOffset = 0.0;
  }

  boxPressed(mX, mY) {
    if (this.overBox) {
      this.locked = true;
    } else {
      this.locked = false;
    }
    this.xOffset = mX - this.x;
    this.yOffset = mY - this.y;
  }

  boxDragged(mX, mY) {
    if (this.locked) {
      this.x = mX - this.xOffset;
      this.y = mY - this.yOffset;
    }
  }

  boxReleased() {
    this.locked = false;
  }
  
  boxClicked(mX, mY){
    if (this.overBox){
      console.log('doubleclick on', this.name);
      fill(45,45,23);
      text('hallo', mX,mY);
      ellipse(mX, mY, boxSize*2);
      
    }
  }

  display(mX, mY) {
    fill(this.color);
    if (
      mX > this.x - boxSize &&
      mX < this.x + boxSize &&
      mY > this.y - boxSize &&
      mY < this.y + boxSize
    ) {
      this.overBox = true;
      //change color when clicked
      strokeWeight(3);
      if (!this.locked) {
        //change color when hover
      }
    } else {
      stroke(0);
      strokeWeight(1);
      fill(this.color);
      this.overBox = false;
      
    }
    // Draw the box
    line(this.x, this.y, 500, 400);
    rect(this.x, this.y, boxSize+20, boxSize);
    
    

  }

}