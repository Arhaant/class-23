const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create()
  world = engine.world

  box1 = new Box(220,0,30,30)

  box2 = new Box(200,100,30,30)


  ground = new Ground(200,370,400,40)

 
}

function draw() {
  background(0);
  
  Engine.update(engine)
  

  box1.display();
  box2.display();
  ground.display();
}





//<script src="./p5.play.js"></script>


  

 







