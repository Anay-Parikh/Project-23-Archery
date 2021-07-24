const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var computerBase;
var computer, player;
//var arrow


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  // Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  // Create Player Base and Computer Base Object
  playerBase = new Sprite(300, random(450, height-300), 180, 150, "./assets/base1.png");
  computerBase = new Sprite(1000, random(450, height-300), 180, 150, "./assets/base2.png")

  // Create the Archers
  player = new Sprite(285, playerBase.body.position.y - 153, 50, 180, "./assets/player.png");
  computer = new Sprite(1015, computerBase.body.position.y - 153, 50, 180, "./assets/player.png");

  //arrow = new Sprite(400, player.body.position.y, 100, 100, "./assets/arrow.png")


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2 - 50, 100);

  playerBase.display();
  computerBase.display();

  player.display();
  computer.display();

  //arrow.display();
}
