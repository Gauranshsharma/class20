
var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 50);
  fixedRect.shapeColor="green";
  //fixedRect.debug=true;
  fixedRect.velocityX= 3;
  movingRect=createSprite(600,200,50,80);
  movingRect.shapeColor="yellow";
  movingRect.velocityX=-3
 // movingRect.debug=true;
}

function draw() {
  background(255,0,255);  //rgb 255,255,255 //w 0-255
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

//1.--2  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x <fixedRect.width/2+movingRect.width/2)
    {
        movingRect.velocityX=movingRect.velocityX *(-1);
        fixedRect.velocityX=fixedRect.velocityX * (-1);
    }
  if( movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
    && fixedRect.y -movingRect.y < fixedRect.height/2+movingRect.height/2)
    {
   
    }
 
  drawSprites();
}