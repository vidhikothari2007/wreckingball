const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(810,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    

    box5 = new Box(810,160,70,70);
    ball = new Ball(600,200,45,45);
    rope= new Rope(ball.body,{x:600, y:50})
 
}

function draw(){
    
        background('lightblue');

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    ball.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


