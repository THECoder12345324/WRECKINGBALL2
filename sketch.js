const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pig = null;
var engine, world;
var box1, pig1;
var pig = [];
var backgroundImg, ground2, constrainedLog;
var chain, chain2, pigchain;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(800,height,1600,20);
    ground2 = new Ground(275, 300, 600, 20);

    box1 = new Box(1200,320,70,70);
    box2 = new Box(1420,320,70,70);
    pig1 = new Pig(1310, 350);
    log1 = new Log(1310,260,300, PI/2);

    box3 = new Box(1200,240,70,70);
    box4 = new Box(1420,240,70,70);
    pig3 = new Pig(1310, 220);

    log3 =  new Log(1310,180,300, PI/2);

    box18 = new Box(1310,160,70,70);
    log4 = new Log(1260,120,150, PI/7);
    log5 = new Log(1370,120,150, -PI/7);

    box5 = new Box(800, 560, 70, 70);
    box6 = new Box(800, 460, 70, 70);
    box7 = new Box(800, 360, 70, 70);
    box8 = new Box(800, 260, 70, 70);
    box9 = new Box(800, 160, 70, 70);
    box10 = new Box(730, 560, 70, 70);
    box11  = new Box(870, 560, 70, 70);
    box12  = new Box(730, 460, 70, 70);
    box13  = new Box(870, 460, 70, 70);
    box14  = new Box(730, 360, 70, 70);
    box15  = new Box(870, 360, 70, 70);
    box16  = new Box(730, 260, 70, 70);
    box17  = new Box(870, 260, 70, 70);
    specialpig1 = new Pig(745, 160);
    specialpig2 = new Pig(855, 160);
    kingpig = new Pig(800, 80);
    log6 = new Log(800, 50, 200, PI/2);
    guardpig1 = new Pig(750, 10);
    guardpig2 = new Pig(850, 10);

    /*for (var i = 0; i < 5; i++) {
        pig[i] = new Pig(1100 + (i * 100), 50);
    }*/

    bird = new Bird(100,100, "sprites/bird.png");
    //bird2 = new Bird(200, 200, "sprites/chuck2.png");

    chain = new Slingshot(bird.body, {x: 370, y: 120}, 0.04, 10);
    //pigchain = new Chain(pig50.body, pig51.body, 0.08, 50);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    kingpig.display();

    guardpig1.display();
    guardpig2.display();

    specialpig1.display();
    specialpig2.display();

    log6.display();

    chain.display();


    /*for (var i = 0; i < 5; i++) {
        pig[i].display();
        
    }
    for (var i = 0; i < 4; i++) {
        chain2 = new Slingshot(pig[i].body, pig[i+1].body, 0.08, 10);
        chain2.display();
    }*/

    bird.display();
    
    //bird2.display();
    /*pig50.display();
    pig51.display();*/
    //console.log(pig);
    //chain.display();
    //pigchain.display();
    //strokeWeight(5);
    //line(bird.body.position.x, bird.body.position.y, constrainedLog.body.position.x, constrainedLog.body.position.y);
}
function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
}

function mousePressed() {
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    chain.fly();
}
/*function keyPressed() {
    if (keyCode === 32) {
        chain.attach(bird.body);
    }
}*/
function keyPressed() {
    if (keyCode === 32) {
        pig = new Pig(random(100, 1500), random(100, 600));
        pig.display();
    }
}