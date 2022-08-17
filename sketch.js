const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
var player1, player2;
var player1Img;
var bg;
var ground;
var table, tableImg;
var ball;




function preload(){
  player1Img = loadImage("player1.png");
  player2Img = loadImage("player2.png");
  bg = loadImage("bgImage.jpg");
  tableImg = loadImage("table.png");
  ball = loadImage("ball.png") 
}





function setup() {
  createCanvas(1500,800);

  engine = Engine.create();
  world = engine.world;
  
  table = Bodies.rectangle(width/2, 500, 1200, 650);  
  player1 = Bodies.rectangle(width/2,500,100,100);
  ground = new Ground(750,height-10,width,60);
  
 console.log(player1.position);
}


function draw() 
{
  background(51);
  image(bg,0,0,1500,500)
  Engine.update(engine);
  ground.show();

  push();
  imageMode(CENTER);
  image(tableImg, table.position.x, table.position.y, 1200, 650);
 //image(player1Img, player1.position.x, player1.position.y,100,100);
  pop();

  fill("white");
  image(player1Img, player1.position.x, player1.position.y,100,100);

  
  
  
}

