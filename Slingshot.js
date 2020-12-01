class Slingshot{
    constructor(body1, point2, stiffness1, length1) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: stiffness1,
            length: length1
        }
        this.pointB = point2
        this.chain = Constraint.create(options);

        this.connect = true;
        World.add(world, this.chain);
    }
    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            push();
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
            stroke(48, 22, 8);
        }
    }
}