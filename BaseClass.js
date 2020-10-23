class baseClass{
    constructor(x, y, w, h, a) {
        var options = {
          'density':1.5,
          'friction': 1.0,
          'restitution':0.5
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
  
        this.image = loadImage("sprites/base.png");
  
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}