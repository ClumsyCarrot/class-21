var rect1;
var rect2;
var rect3;
var rect4;
var rect5;


function setup() 
{
  rect1 = createSprite(100, 100, 20, 85);
  rect2 = createSprite(200, 200, 40, 15);
  rect3 = createSprite(0, 0, 74, 26);
  rect4 = createSprite(800, 0, 84, 82);
  rect5 = createSprite(800, 400, 62, 76);
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
  rect4.debug = true;
  rect5.debug = true;
  createCanvas(800,400);
}

function draw() 
{
  background("green"); 

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  setColor();
 
  if(collisionDetection(rect1,rect2))
  {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }
  else 
  {
    rect1.shapeColor = "pink";
    rect2.shapeColor = "pink";
  }
  if(collisionDetection(rect1,rect3))
  {
    rect1.shapeColor = "yellow";
    rect3.shapeColor = "yellow";
  }
  else 
  {
    rect1.shapeColor = "pink";
    rect3.shapeColor = "pink";
  }
 if(collisionDetection(rect1,rect4))
  {
    rect1.shapeColor = "yellow";
    rect4.shapeColor = "yellow";
  }
  else 
  {
    rect1.shapeColor = "pink";
    rect4.shapeColor = "pink";
  }
 if(collisionDetection(rect1,rect5))
  {
    rect1.shapeColor = "yellow";
    rect5.shapeColor = "yellow";
  }
  else 
  {
    rect1.shapeColor = "pink";
    rect5.shapeColor = "pink";
  }

  
  drawSprites();
}
/*
function setColor()
{
  for(var loopVar =1; loopVar =)
  {
   
  }
}*/