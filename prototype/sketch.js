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
let description = "cover chairs with transparent\nconductive foil to monitor\nand improve sitting posture";
//font type
let ratingContent = "Ratings: 11\nAverage rating out of 5 points split up:\n\nValue                          3.4\nNovelty                      2.7\nFeasability                  4.7\nElaboration                4.5 \n\nSummed up value:   3.8";
let myFont;
let infoBar;


//icons:
let cross;
let comment;
let rotation;
let touch;
let plus;
let attach;
let trash;
let edit;
let overviewMock;

// preload function loads styles, fonts etc.
function preload() {
  cross = loadImage('icons/png/noun_Cross_1106014.png');
  comment = loadImage('icons/png/noun_chat bubble_1634538.png');
  rotation = loadImage('icons/png/noun_rotation_1106030.png');
  touch = loadImage('icons/png/noun_touch_gesture_1106042.png');
  plus = loadImage('icons/png/noun_Plus_1119863.png');
  attach = loadImage('icons/png/noun_attach_1106017.png');
  trash = loadImage('icons/png/noun_Trash_1106040.png');
  back = loadImage('icons/png/noun_Arrow_700186.png');
  info = loadImage('icons/png/noun_Information_1119843.png');
  edit = loadImage('icons/png/noun_edit_1106024.png');
  edit2 = loadImage('icons/png/noun_Pencil_1119855.png');
  overviewMock = loadImage('icons/ContextOverview.png');

  sittingPosture = loadImage('icons/sittingPosture.png');
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  textFont("Lato");
  // createCanvas must be the first statement
  createCanvas(1820, 950);
  stroke(255); // Set line drawing color to white
  frameRate(60);

  rectMode(RADIUS);

  infoBar = new Info(1750,50);
  //infoBar.inBounds(mouseX,mouseY);
  overview = new Overview(50,50);


  setupNodes();

  setupSprings();

}

function setupNodes() {
  centralNode = new Node(width/2, height/2, WHITE, BLACK, new FrontView("Idea", description, 100, 80), null);
  centralNode.canMove = false;
  nodes.push(centralNode);


  // set up other nodes
  firstFrontView = new FrontView("Target Audience", "", 90, 30);
  firstSideBar = new SideBar(ROT);
  firstContent = new Content("Target Audience", "Here are all target groups that could be using an outcome of this idea");
  firstDetailedView = new DetailedView(firstContent, firstSideBar, 300, 150);

  nodes.push(new Node(500, 700, ROT, WHITE, firstFrontView, firstDetailedView));


  secondFrontView = new FrontView("Rating", "", 90, 30);
  secondSideBar = new SideBar(LILA);
  secondContent = new Content("Rating", ratingContent);
  secondDetailedView = new DetailedView(secondContent, secondSideBar, 300, 150);

  nodes.push(new Node(600, 300, LILA,WHITE, secondFrontView, secondDetailedView));


  thirdFrontView = new FrontView("Description", "", 90, 30);
  thirdSideBar = new SideBar(GELB);
  thirdContent = new Content("Description", "The TCO sends data to a local interface about your sitting posture and statistics.\n" +
    "A special app interprets the data and gives you health advices.\n" +
    " - measures the time you spent sitting in different postures\n" +
    " - part of you body which is strained most\n" +
    " - optimal sitting height and angles\n" +
    " - warns automatically if you leave an optimal posture for more then 3 Minutes (adjustable)\n" +
    " - gives you tipps how to improve your posture");
  thirdDetailedView = new DetailedView(thirdContent, thirdSideBar, 300, 150);

  nodes.push(new Node(1500, 500, GELB, WHITE, thirdFrontView, thirdDetailedView));

  fourthFrontView = new FrontView("Categories", "", 90, 30);
  fourthSideBar = new SideBar(GRUEN);
  fourthContent = new Content("Categories", "These are the Application Fields suitable for the idea!");
  fourthDetailedView = new DetailedView(fourthContent, fourthSideBar, 300, 150);

  nodes.push(new Node(1500, 700, GRUEN, WHITE, fourthFrontView, fourthDetailedView));

  contextFrontView = new FrontView("Context", "", 90, 30);
  contextSideBar = new SideBar(GRAU);
  contextContent = new Content("Context", "TCO - Transparent Conductive Oxides\n" +
    "\n" +
    "Transparent Conductive Oxides (TCO) are materials that can be used as thin coatings to make surfaces and objects intelligent. They are transparent, conductive and flexible.");
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
  background(255); // Set the background to white

  infoBar.draw();

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
    nodes[i].setPositionIfHeld();
    nodes[i].limitPosition();
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

  overview.draw();
}

function drawSpacers(){
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].drawSpacer();
  }
}

function mouseClicked() {
  nodeUnderMouse = getNodeUnderMouse();

  if (nodeUnderMouse != null) {
    selectedNode = nodeUnderMouse;

    nodeUnderMouse.clicked(mouseX, mouseY);
  }
  infoBar.inBounds(mouseX,mouseY);
  overview.inBounds(mouseX,mouseY);
}

function doubleClicked() {
  nodeUnderMouse = getNodeUnderMouse();

  if (nodeUnderMouse != null) {
    selectedNode = nodeUnderMouse;

    nodeUnderMouse.doubleClicked(mouseX, mouseY);
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
  if(selectedNode != null && selectedNode.inBounds(mouseX,mouseY)) {
    return selectedNode;
  }

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
