class Spring {
  constructor(fromNode, toNode){
    this.fromNode = fromNode;
    this.toNode = toNode;
  }

  draw(){
    stroke(0);
    line(this.fromNode.x,this.fromNode.y,this.toNode.x,this.toNode.y);
  }
}
