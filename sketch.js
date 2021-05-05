
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine , myWorld;



function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	myEngine=Engine.create();
  myWorld=myEngine.world;

  ground1=new Ground(width/2,790,480,10);

  ground2=new Ground(0,635,10,300);

  ground3=new Ground(80,635,10,300);

  ground4=new Ground(160,635,10,300);

  ground5=new Ground(240,635,10,300);

  ground6=new Ground(320,635,10,300);

  ground7=new Ground(400,635,10,300);

  ground8=new Ground(480,635,10,300);

  plinko1=new Plinko(40,50,10);
  plinko2=new Plinko(90,50,10);
  plinko3=new Plinko(140,50,10);
  plinko4=new Plinko(190,50,10);
  plinko5=new Plinko(240,50,10);
  plinko6=new Plinko(290,50,10);
  plinko7=new Plinko(340,50,10);
  plinko8=new Plinko(390,50,10);
  plinko9=new Plinko(440,50,10);

  plinko10=new Plinko2(15,90,10);
  plinko11=new Plinko2(65,90,10);
  plinko12=new Plinko2(115,90,10);
  plinko13=new Plinko2(165,90,10);
  plinko14=new Plinko2(215,90,10);
  plinko15=new Plinko2(265,90,10);
  plinko16=new Plinko2(315,90,10);
  plinko17=new Plinko2(365,90,10);
  plinko18=new Plinko2(415,90,10);
  plinko19=new Plinko2(470,90,10);

  plinko20=new Plinko(40,130,10);
  plinko21=new Plinko(90,130,10);
  plinko22=new Plinko(140,130,10);
  plinko23=new Plinko(190,130,10);
  plinko24=new Plinko(240,130,10);
  plinko25=new Plinko(290,130,10);
  plinko26=new Plinko(340,130,10);
  plinko27=new Plinko(390,130,10);
  plinko28=new Plinko(440,130,10);

  plinko29=new Plinko2(15,170,10);
  plinko30=new Plinko2(65,170,10);
  plink1=new Plinko2(115,170,10);
  plink2=new Plinko2(165,170,10);
  plinkA3=new Plinko2(215,170,10);
  plinkB4=new Plinko2(265,170,10);
  plinkC5=new Plinko2(315,170,10);
  plinkD6=new Plinko2(365,170,10);
  plinkE7=new Plinko2(415,170,10);
  plinkF8=new Plinko2(470,170,10);
  
  
 //paper=createSprite(150,530,50,50);
 //paper.shapeColor="blue";

 //paper2=createSprite(150,530,40,40);
 //paper2.shapeColor="midnightblue";

 //paper3=createSprite(150,515,10,10);
 //paper3.shapeColor="white";

 //paper4=createSprite(150,545,10,10);
 //paper4.shapeColor="white";

 //paper5=createSprite(165,530,10,10);
 //paper5.shapeColor="white";

 //paper6=createSprite(135,530,10,10);
 //paper6.shapeColor="white";

 //paper7=createSprite(150,530,5,5);
 //paper7.shapeColor="silver";






	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
//function keyPressed(){
//	if (keyCode === UP_ARROW){
//		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
//	}
//}


}

var particle = [];

if(frameCount%60===0){
  particle.push(new Particles(random(width/2-10,width/2+10),10,10));
}

for(var p=0;p<particle.length;p++){
  particle[p].display();
}





function draw() {	
  background(0);

  Engine.update(myEngine);
 
ground1.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();

plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();

plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();

plinko30.display();
plink1.display();
plink2.display();
plinkA3.display();
plinkB4.display();
plinkC5.display();
plinkD6.display();
plinkE7.display();
plinkF8.display();
}



