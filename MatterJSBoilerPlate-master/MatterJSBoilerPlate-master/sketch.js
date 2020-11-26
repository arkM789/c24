
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var trash1,ground1

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    trash1=new ball(123,89,20);
   
    ground1=new Ground(200,500,1200,20)
	
    box1=new Box(800,480,200,20)
    box2=new Box(600,430,20,50);
}

function draw() {
  
  background(0);
  
  Engine.update(engine);

 // console.log(trash1)
  trash1.display();
 
ground1.display();
box1.display();
}



