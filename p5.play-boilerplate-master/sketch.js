const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var log,log1,log2,log3,log4;
var bg;
var p;

var particles = [];
var plinkos = [];

function preload(){
  bg = loadImage("sprites/BG.jpg");
}



function setup() {
  createCanvas(500,900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(260,860,600,150);
  log = new Log(110,680,30,300);
  log1 = new Log(230,680,30,300);
  log2 = new Log(350,680,30,300);
  log3 = new Log(10,400,20,850);
  log4 = new Log(490,400,20,850);
 

  for (var j = 25; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 25; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 25; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }

 

}

function draw() {

  

  background(0);  
  log.display();
  log1.display();
  log2.display();
  log4.display();
  log3.display();
  
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

  for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  
  drawSprites();
}