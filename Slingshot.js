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
        World.add(world, this.chain);
    }
    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly() {
        this.chain.bodyA = null;
    }
}