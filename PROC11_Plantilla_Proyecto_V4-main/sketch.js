var ship;
var sea;
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,400);
  sea.scale =0.3;
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;

  ship = createSprite(130,200,100,100);
  ship.addImage("move",shipImage);
  ship.scale = 0.3;
  
  
}

function draw() {
 background("blue");

 sea.velocityX= -2
 if(sea.x<0){
  sea.x = sea.width/2;
    } 

 drawSprites();
}