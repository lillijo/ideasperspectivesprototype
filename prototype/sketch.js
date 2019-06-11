let centralNode = null;
let nodes = [];
let springs = [];
let selectedNode;
let heldNode;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(1920, 1080);
  stroke(255); // Set line drawing color to white
  frameRate(60);

  rectMode(RADIUS);

  setupNodes();

  setupSprings();
}

function setupNodes() {
  centralNode = new Node(100, 100, color(200, 100, 0), new FrontView("Idea", "Short description", 100, 50), null);

  nodes.push(centralNode);

  // set up other nodes

  firstFrontView = new FrontView("First", "Description text bla", 100, 50);
  firstDetailedView = new DetailedView("First Detailed", "Description text bla", 300, 150);

  nodes.push(new Node(500, 500, color(200, 50, 50), firstFrontView, firstDetailedView));


  secondFrontView = new FrontView("Second", "Description text bla", 100, 50);
  secondDetailedView = new DetailedView("Second Detailed", "Description text bla", 300, 150);

  nodes.push(new Node(600, 300, color(50, 200, 50), secondFrontView, secondDetailedView));
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

  for(let i = 0; i<springs.length; i++){
    springs[i].applyTension();
  }

  for(let i = 0; i<nodes.length;i++){
    nodes[i].applyVelocity();
  }

  for (let i = 0; i < springs.length; i++) {
    springs[i].draw();
  }

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] != selectedNode) {
      nodes[i].draw();
    }
  }

  if (selectedNode != null) {
    selectedNode.draw();
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