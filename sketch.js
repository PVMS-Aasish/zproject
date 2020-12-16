const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,
 ground2,ground,ground3;
var ball, rope;
var gameState = "onrope";

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(560, 170, 215, 20);
  ground2 = new Ground(1000, 500, 215, 20);
  ground3 = new Ground(1300,800,15000,20)
  box1 = new Box(470, 100, 30, 40);
  box2 = new Box(500, 100, 30, 40);
  box3 = new Box(530, 100, 30, 40);
  box4 = new Box(560, 100, 30, 40);
  box5 = new Box(590, 100, 30, 40);
  box6 = new Box(620, 100, 30, 40);
  box7 = new Box(650, 100, 30, 40);
  box8 = new Box(500, 80, 30, 40);
  box9 = new Box(530, 80, 30, 40);
  box10 = new Box(560, 80, 30, 40);
 box11 = new Box(590, 80, 30, 40);
  box12 = new Box(620, 80, 30, 40);
  box13 = new Box(530, 60, 30, 40);
  box14 = new Box(560, 60, 30, 40);
  box15 = new Box(590, 60, 30, 40);
  box16 = new Box(560, 40, 30, 40);
  box17 = new Box(909, 499, 30, 40);
  box18 = new Box(939, 499, 30, 40);
  box19 = new Box(969, 499, 30, 40);
  box20 = new Box(999, 499, 30, 40);
  box21 = new Box(1029, 499, 30, 40);
  box22 = new Box(1059, 499, 30, 40);
  box23 = new Box(1089, 499, 30, 40);
  box24 = new Box(939, 479, 30, 40);
  box25 = new Box(969, 479, 30, 40);
  box26 = new Box(999, 479, 30, 40);
  box27 = new Box(1029, 479, 30, 40);
  box28 = new Box(1059, 479, 30, 40);
  box29 = new Box(969, 459, 30, 40);
  box30 = new Box(999, 459, 30, 40);
  box31 = new Box(1029, 459, 30, 40);
 
  box33 = new Box(999,439,30,40);
  
  ball = new Ball(200, 200, 50, 50);
  rope = new Rope(ball.body, { x: 200, y: 100 });

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
 box10.display();
   box11.display();
 box12.display();
   box13.display();
 box14.display();
   box15.display();
 box16.display();
   box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
box25.display();
  box26.display();
    box27.display();
  box28.display();
  box29.display();
box30.display();
box31.display();

box33.display();
ground3.display();
ground2.display();
  ball.display();
  rope.display();



}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
 

}
  function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     rope.attach(ball.body);
  }
}