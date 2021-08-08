const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var bloboptions = {
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
	}
	Blob1 = Bodies.circle(320,380,20,bloboptions)
	World.add(world,Blob1)
	
	Blob2 = Bodies.circle(360,380,20,bloboptions)
	World.add(world,Blob2)
	
	Blob3 = Bodies.circle(400,380,20,bloboptions)
	World.add(world,Blob3)
	
	Blob4 = Bodies.circle(440,380,20,bloboptions)
	World.add(world,Blob4)
	
	Blob5 = Bodies.circle(480,380,20,bloboptions)
	World.add(world,Blob5)
	
	rope1 = new rope(Blob1,roof,-80,0)

	rope2 = new rope(Blob2,roof,-40,0)

	rope3 = new rope(Blob3,roof,0,0)

	rope4 = new rope(Blob4,roof,40,0)

	rope5 = new rope(Blob5,roof,80,0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
rope1.display()

rope2.display()

rope3.display()

rope4.display()

rope5.display()

  //call display() to show ropes here
	ellipse(Blob1.position.x,Blob1.position.y,40,40)
	
	ellipse(Blob2.position.x,Blob2.position.y,40,40)
	
	ellipse(Blob3.position.x,Blob3.position.y,40,40)
	
	ellipse(Blob4.position.x,Blob4.position.y,40,40)
	
	ellipse(Blob5.position.x,Blob5.position.y,40,40)

  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.s

function keyPressed()
{ if(keyCode == UP_ARROW){
	Matter.Body.applyForce(Blob1,Blob1.position,{x:-50,y:-45})

}

}