var dustbin1, dustbin2, dustbin3;
var ground, paper;
var dustbinimg;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1400, 800);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground = new Ground(width/2, 790, width, 20);

	

	dustbin1 = new Dustbin(1120, 770, 130, 20);
	dustbin2 = new Dustbin(1055, 650, 20, 240);
	dustbin3 = new Dustbin(1185, 650, 20, 240);
	paper = new Paper(150, height-100, 20);
}


function draw() {
    rectMode(CENTER);

    background(230);
  
	drawSprites();
	
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:70, y:-130});
	}

	ground.display();
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}



