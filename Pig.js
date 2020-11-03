var alphaamount = 255;
class Pig extends baseClass{
    constructor(x, y) {
      super(x, y, 80, 80);
      this.image = loadImage("sprites/enemy.png")
      this.Visibility = 255;
      this.time = 120;
    }
    display() {
      //console.log(Math.floor(this.body.speed));
      this.time -= 1;
      if (this.time < 0) {
        if (this.body.speed < 5) {
          super.display();
        }
        else {
          push();
          World.remove(world, this.body);
          this.Visibility -= 5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 80, 80);
          pop();
        }
      }
      else {
        super.display();
      }
    }
  };
  