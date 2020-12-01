const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var building1;
var building = [];

function preload() {
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    //Creating the canvas where the action happens
    createCanvas(1200, 900)

    //Creating all the different bodies
    building1 = new Building(width / 2, height - 70, 200, 100, 10, 10);
    building2 = new Building(width / 2, height - 70 - 100, 200, 100, 10, 10);
    building3 = new Building(width / 2, height - 70 - 200, 200, 100, 10, 10);
    ball = new Ball(width / 2 + 200, height / 2, 40);
    constraint = new Slingshot(ball.body, {x: ball.body.position.x, y: ball.body.position.y - 500}, 0.07, 700)
    ground = new Ground(width / 2, height, width, 20);
}

function draw(){
    //Setting the background
    background(120);

    //Updating the engine
    Engine.update(engine);

    //Displaying all of the bodies
    building1.display();
    building2.display();
    building3.display();
    for (var i = 0; i < building.length; i++) {
        building[i].display();
    }
    ball.display();
    constraint.display();
    ground.display();

    //Creating a circle that follows the mouse
    ellipse(mouseX, mouseY, 20, 20);
}
function mouseDragged() {
    stroke(0);
    
}

function mousePressed() {
    building.push(new Building(mouseX, mouseY, 200, 100, 10, 10))
}

function mouseReleased() {
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        ball.body.position.x -= 50
    }
    if (keyCode === RIGHT_ARROW) {
        ball.body.position.x += 50
    }
}
