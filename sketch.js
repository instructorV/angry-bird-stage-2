
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,box10,box11
var box12,log1, box3,box4,log2,box5,log3,log4
function setup() {
  createCanvas(1200,600);
  engine = Matter.Engine.create()
  world1 = engine.world

 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(600,570,1200,40,groundOptions)
  Matter.World.add(world1,ground)

 

box1 = new Box(700,450,70,70)
box2 = new Box(1000,450,70,70);
log1 = new Log(850,380,380,PI/2)

box3 = new Box(700,330,70,70)
box4 = new Box(1000,330,70,70)
log2 = new Log(850,270,380,PI/2)

box5 = new Box(850,150,70,70)

log3 = new Log(790,150,140,PI/6)
log4 = new Log(930,150,140,-PI/6)

bird = new Bird(100,100)
 
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,1200,40)

box1.display()
box2.display()

log1.display()

box3.display()
box4.display()

log2.display()

box5.display()
log3.display()
log4.display()

bird.display()

}