class Bird extends baseClass {
    constructor(x, y, image) {
      super(x, y, 50, 50);
      this.image = loadImage(image);
      this.image2 = loadImage("sprites/smoke.png");

      this.trajectory = [];
    }
    display() {
      super.display();

      if (this.body.velocity.x > 10 && this.body.position.x > 570) {
        var birdpos = [this.body.position.x, this.body.position.y]
        this.trajectory.push(birdpos);
      }
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image2, this.trajectory[i][0], this.trajectory[i][1]);
      }
      /*this.body.position.x = mouseX;
      this.body.position.y = mouseY;*/
    }
  };
  