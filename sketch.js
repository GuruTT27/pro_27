
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(425,100,550,50);
	
	bob1 = new bob(200,300,50);

	bob2 = new bob(350,300,50);

	bob3 = new bob(420,300,50);

	bob4 = new bob(460,300,50);

	bob5 = new bob(500,300,50);


	chain1 = new chain(bob1.body,roof1.body,-40,0);

	chain2 = new chain(bob2.body,roof1.body,-20,0);

	chain3 = new chain(bob3.body,roof1.body,-0,0);

	chain4 = new chain(bob4.body,roof1.body,40,0);

	chain5 = new chain(bob5.body,roof1.body,70,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
 
  roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  
  drawSprites();
 
}



