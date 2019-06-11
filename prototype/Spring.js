class Spring {
  constructor(fromNode, toNode) {
    this.fromNode = fromNode;
    this.toNode = toNode;

    this.length = 100;
    this.stiffness = 0.6;
    this.damping = 0.9;
  }

  draw() {
    stroke(0);
    line(this.fromNode.x, this.fromNode.y, this.toNode.x, this.toNode.y);
  }

  applyTension() {
    let fromVector = createVector(this.fromNode.x, this.fromNode.y);
    let toVector = createVector(this.toNode.x, this.toNode.y);

    let diff = p5.Vector.sub(fromVector, toVector);
    diff.normalize();
    diff.mult(this.length);
    let target = p5.Vector.add(fromVector, diff);

    let force = p5.Vector.sub(target, toVector);
    force.mult(0.5);
    force.mult(this.stiffness);
    force.mult(1 - this.damping);

    this.toNode.velocity.add(force);
    this.fromNode.velocity.add(p5.Vector.mult(force, -1));
  }
}
