var Ship,Ship_Moving;
var SeaImage;
function preload(){
Ship_Moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
SeaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(500,500);
  edges=createEdgeSprites();
  Sea=createSprite(120,160,2,20);
  Sea.addImage("Infinite_Sea",SeaImage);
  Ship=createSprite(120,200,20,50);
  Ship.addAnimation("Ship_Sailing",Ship_Moving);
  Ship.scale=0.3;
  Sea.scale=1;
Sea.velocityX=-3;
  Sea.x=Sea.width/2
}

function draw() {
  background("white");
  if(Sea.x<0){
    Sea.x=Sea.width/2
  }
  drawSprites(); 
}