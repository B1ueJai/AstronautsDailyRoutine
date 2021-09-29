
var sleep, bath, drink, eat, move, gym, brush;
var bgImage, bGround;
var astronaut;

function preload() {

  bgImage = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  brush = loadAnimation("images/brush.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  move = loadAnimation("images/move.png");
}

function setup() {
  createCanvas(400, 400);

  bGround = createSprite(200,250,400,40);
  bGround.addImage("bGround",bgImage);
  bGround.scale = 0.1;

  astronaut = createSprite(210, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.08;
}

function draw() {
  background(220);
  text("Press Arrow Keys and the M Key to See Daily Routine",57,50);
  text("Press Space To Reset",130,70);
  textSize(20);

 var edges = createEdgeSprites();

if(astronaut.isTouching(edges)) {
  astronaut.bounceOff(edges)
}

if(keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing")
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("drinking", drink);
  astronaut.changeAnimation("drinking");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")) {
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 2;
  astronaut.velocityY = 2;
}

if(keyDown("space")) {
  astronaut.addAnimation("sleeping", sleep);
  astronaut.changeAnimation("sleeping");
  astronaut.scale = 0.08;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
  drawSprites();
}

