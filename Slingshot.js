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
        this.image1 = loadImage("Sprites/sling1.png");
        this.image2 = loadImage("Sprites/sling2.png");
        this.image3 = loadImage("Sprites/sling3.png");
        World.add(world, this.chain);
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image1, 380, 190);
        image(this.image2, 355, 148);
        pop();
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            push();
            if (pointA.x < 200) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x + 10, pointA.y, pointB.x + 20, pointB.y - 3);
                image(this.image3, pointA.x - 25, pointA.y - 10, 15, 30)
            }
            else if (pointA > 600) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x + 10, pointA.y, pointB.x + 20, pointB.y - 3);
                image(this.image3, pointA.x - 25, pointA.y - 10, 15, 30)
            }
            else {
                strokeWeight(5);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x + 10, pointA.y, pointB.x + 20, pointB.y - 3);
                image(this.image3, pointA.x - 25, pointA.y - 10, 15, 30)
            }
            pop();
            stroke(48, 22, 8);
            
            
            //line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    fly() {
        this.chain.bodyA = null;
    }
}