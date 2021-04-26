const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var ground
var b1, b2, b3, b4, b5
var Ball
var ROpe
function setup(){
    createCanvas(1000, 700)
  engine = Engine.create()
  world = engine.world

  ground = new floor(width/2, 680, width, 20)
  b1 = new block(700, 650, 100 ,100)
  b2 = new block(700, 600, 100 ,100)
  b3 = new block(700, 550, 100 ,100)
  b4 = new block(700, 500, 100 ,100)
  b5 = new block(700, 450, 100 ,100)
  
  Ball = new ball(500, 500, 100)

  ROpe = new Rope(Ball.body, {x:450, y:200})
}


function draw(){
    background("white")
    Engine.update(engine)
    ground.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    
    Ball.display()

    ROpe.display()
}

function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x:mouseX, y:mouseY})
}