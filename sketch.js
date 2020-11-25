
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground1
var dustbin1,dustbin2,dustbin3



function setup() {
	createCanvas(1700, 500);
    engine = Engine.create();
	world = engine.world;
	paper1 = new paper(100,100,30)
    ground1 = new ground(600,400,2500,20)
	dustbin1 = new bin(1050,340,20,100)
	dustbin2 = new bin(1250,340,20,100)
	dustbin3 = new bin(1150,390,190,20)


	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)

  paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75});
	}
}


