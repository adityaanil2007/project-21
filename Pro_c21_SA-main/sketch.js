const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  //objectName = new className()
  
  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var property = {
    restitution : 0.8
  }

  ball = Bodies.circle( 200 , 200 , 20 , property)
  World.add(world,ball)

  upBtn = createImg("up.png")
  upBtn.position(20,30)
  upBtn.size(50,50)
  upBtn.mouseClicked(vForce)
  


  
  rightBtn = createImg("right.png")
  rightBtn.position(220,30)
  rightBtn.size(50,50)
  rightBtn.mouseClicked(hForce)
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  //to represent the circular physics engine body ellipse() is used
  ellipse(ball.position.x , ball.position.y , 20 , 20 )

  Engine.update(engine);
}




function hForce(){
  
  Matter.Body.applyForce(ball , {x:0 , y:0} , {x:0.05 , y:0} )
  
}

function vForce(){

  Matter.Body.applyForce(ball,{x:0, y:0},{x:0 , y:-0.05})
}

