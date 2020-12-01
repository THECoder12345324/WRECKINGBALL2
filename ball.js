class Ball{
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        var options = {
            isStatic: false,
            density: 0.9,
            friction: 1,
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        fill("black");
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.r * 2, this.r * 2);
        pop();
    }
}