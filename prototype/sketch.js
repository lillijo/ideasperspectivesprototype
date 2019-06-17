let centralNode = null;
let nodes = [];
let springs = [];
let selectedNode;
let heldNode;
let ROT = [251,128,114];
let GRUEN = [141,211,199];
let LILA = [190,186,218];
let GELB = [255,255,179];
let GRAU = [220,220,220];
let WHITE = [255,255,255];
let BLACK = [0,0,0];
let description = "Office Chairs\ncover chairs with transparent\nconductive foil to monitor\nand improve sitting posture";

let myFont;

// preload function loads styles, fonts etc.
function preload() {
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  textFont("Lato");
  // createCanvas must be the first statement
  createCanvas(1920, 1080);
  stroke(255); // Set line drawing color to white
  frameRate(60);

  rectMode(RADIUS);

  setupNodes();

  setupSprings();
}

function setupNodes() {
  centralNode = new Node(1000, 500, WHITE, BLACK, new FrontView("Idea", description, 100, 80), null);

  nodes.push(centralNode);

  // set up other nodes

  firstFrontView = new FrontView("Target Audience", "", 90, 30);
  firstSideBar = new SideBar(ROT);
  firstContent = new Content("first content title", "fist very good text, and it works!");
  firstDetailedView = new DetailedView(firstContent, firstSideBar, 300, 150);

  nodes.push(new Node(500, 700, ROT, WHITE, firstFrontView, firstDetailedView));


  secondFrontView = new FrontView("Rating", "", 90, 30);
  secondSideBar = new SideBar(LILA);
  secondContent = new Content("Second Detailed Title", "This is a very long an meaningful content. Enjoy it!");
  secondDetailedView = new DetailedView(secondContent, secondSideBar, 300, 150);

  nodes.push(new Node(600, 300, LILA,WHITE, secondFrontView, secondDetailedView));


  thirdFrontView = new FrontView("Description", "", 90, 30);
  thirdSideBar = new SideBar(GELB);
  thirdContent = new Content("third content title", "third very good text, and it works!");
  thirdDetailedView = new DetailedView(thirdContent, thirdSideBar, 300, 150);

  nodes.push(new Node(1500, 500, GELB, WHITE, thirdFrontView, thirdDetailedView));

  fourthFrontView = new FrontView("Categories", "", 90, 30);
  fourthSideBar = new SideBar(GRUEN);
  fourthContent = new Content("categories tags", "blablabla very good text, and it works!");
  fourthDetailedView = new DetailedView(fourthContent, fourthSideBar, 300, 150);

  nodes.push(new Node(1500, 700, GRUEN, WHITE, fourthFrontView, fourthDetailedView));

  contextFrontView = new FrontView("Context", "", 90, 30);
  contextSideBar = new SideBar(GRAU);
  contextContent = new Content("Context", "third very good text, and it works!");
  contextDetailedView = new DetailedView(contextContent, contextSideBar, 300, 150);

  nodes.push(new Node(1000, 100, GRAU, WHITE, contextFrontView, contextDetailedView));
}

function setupSprings() {
  for (let i = 1; i < nodes.length; i++) {
    springs.push(new Spring(nodes[0], nodes[i]));
  }
}

// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(255); // Set the background to black

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (i===j) {
        continue;
      }

      nodes[i].attractNode(nodes[j]);
    }
  }

  for (let i = 0; i < springs.length; i++) {
    springs[i].applyTension();
  }

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].applyVelocity();
  }

  for (let i = 0; i < springs.length; i++) {
    springs[i].draw();
  }

  drawSpacers();

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] != selectedNode) {
      nodes[i].draw();
    }
  }

  if (selectedNode != null) {
    selectedNode.draw();
  }
}

function drawSpacers(){
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].drawSpacer();
  }
}

function clicked() {
  nodeUnderMouse = getNodeUnderMouse();

  if (nodeUnderMouse != null) {
    selectedNode = nodeUnderMouse;

    nodeUnderMouse.clicked();
  }
}

function doubleClicked() {
  nodeUnderMouse = getNodeUnderMouse();

  if (nodeUnderMouse != null) {
    selectedNode = nodeUnderMouse;

    nodeUnderMouse.doubleClicked();
  }
}

function mousePressed() {
  nodeUnderMouse = getNodeUnderMouse();

  if (nodeUnderMouse != null) {
    selectedNode = nodeUnderMouse;
    heldNode = nodeUnderMouse;

    heldNode.pressed(mouseX, mouseY);
  }
}

function mouseReleased() {
  if (heldNode != null) {
    heldNode.released(mouseX, mouseY);
    heldNode = null;
  }
}

function getNodeUnderMouse() {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].inBounds(mouseX, mouseY)) {

      return nodes[i];
    }
  }
}

function linedash(x1, y1, x2, y2, delta, style = '-') {
  // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
  let distance = dist(x1,y1,x2,y2);
  let dashNumber = distance/delta;
  let xDelta = (x2-x1)/dashNumber;
  let yDelta = (y2-y1)/dashNumber;

  for (let i = 0; i < dashNumber; i+= 2) {
    let xi1 = i*xDelta + x1;
    let yi1 = i*yDelta + y1;
    let xi2 = (i+1)*xDelta + x1;
    let yi2 = (i+1)*yDelta + y1;

    if (style == '-') {
      fill(0);
      line(xi1, yi1, xi2, yi2); }
    else if (style == '.') { point(xi1, yi1); }
    else if (style == 'o') { ellipse(xi1, yi1, delta/2); }
  }
}
