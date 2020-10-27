class Bird extends baseClass {
    constructor(x, y, image) {
      super(x, y, 50, 50);
      this.image = loadImage(image);
    }
    display() {
      super.display();
      /*this.body.position.x = mouseX;
      this.body.position.y = mouseY;*/
    }
  };
  