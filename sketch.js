const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var READY = 0;
var FLY = 1;
var gamestate = READY;

var lives = 3;

var pig = null;
var engine, world;
var box1, pig1;
var pig = [];
var score = 0;
var backgroundImg, ground2, constrainedLog, resetImg, nightImg;
var reset = 0;
var chain, chain2, pigchain;

var string = "This is a string";
var randNumber = 1259883;
var bool = true;
var un;
var none = null;

var array = ["This is a string", 1223842, false, un, none];
var array2 = [[1,2], [2,3], [4,5]];

console.log(array2[0][1]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

array.push(23);
array.pop();

console.log(array[5]);
console.log(array)

function preload() {
    getBackgroundIMG();
    resetImg = loadImage("sprites/reset.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    //console.log(string);
    
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
    if (backgroundImg) {
        background(backgroundImg);
    }
    Engine.update(engine);

    textSize(30);
    fill(0)
    text("Lives: " + lives, 20, 50);
    text("Score: " + score, 1450, 50);

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
    if (lives === 0) {
        reset = image(resetImg, 100, -100, 250, 250);
    }
}
function mouseDragged() {
    if (gamestate === READY) {
        Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
    }
}

function mousePressed() {
    if (lives === 0) {
        console.log(mouseX);
        console.log(mouseY);
        if (mouseX < 307 && mouseX > 137 && mouseY < 60 && mouseY > 13) {
            cleanitallready();
            console.log("THis is working")
        }
    }

}

function mouseReleased() {
    chain.fly();
    gamestate = FLY;
}
function keyPressed() {
    if (keyCode === 32) {
        if (lives > 0) {
            chain.attach(bird.body);
            gamestate = READY;
            lives -= 1;
        }
    }
}/*
function keyPressed() {
    if (keyCode === 32) {
        pig = new Pig(random(100, 1500), random(100, 600));
        pig.display();
    }
}*/

function cleanitallready() {
    World.remove(world, kingpig);
    /*World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    World.remove(world, kingpig);
    
    console.log("running")
    reset = 0;
    
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
    guardpig2 = new Pig(850, 10);*/

    World.add(world, kingpig);
}

async function getBackgroundIMG() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    //console.log(response)
    var responsejson = await response.json();
    console.log(responsejson.datetime);
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11, 13);
    console.log(hour);

    if (hour <= 17 && hour >= 6) {
        backgroundImg = loadImage("sprites/bg.png");
    }
    if (hour > 17 && hour <= 19) {
        backgroundImg = loadImage("sprites/bg3.png");
    }
    if (hour < 6 && hour > 19) {
        backgroundImg = loadImage("sprites/bg2.png");
    }
}