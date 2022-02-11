var backgroundimage,bow,bowimage,redballoon_image,redbaloon,greenballoon,greenballoon_image,purpleballoon,purpleballoon_image,pinkballoon,pinkballoon_image,arrow,arrowimage;

function preload(){
 //load your images here 
 backgroundimage=loadImage("background0.png")
 bowimage=loadImage("bow0.png");
 redballoon_image=loadImage("red_balloon0.png")
 greenballoon_image=loadImage("green_balloon0.png")
 purpleballoon_image=loadImage("blue_balloon0.png")
 pinkballoon_image=loadImage("pink_balloon0.png")
 arrowimage=loadImage("arrow0.png")  
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  background=createSprite(0,0,600,600)
  background.addImage(backgroundimage);
  background.scale=2.5
  
  bow=createSprite(400,220,20,50);
  bow.addImage(bowimage);
  
  for(var i=60; i<390; i=i+60){
    redballoon=createSprite(50,i,1,1);
    redballoon.addImage(redballoon_image);
    redballoon.scale=0.10
  }
  
  for(var i=110; i<300; i=i+60){
    greenballoon=createSprite(100,i,10,10);
    greenballoon.addImage(greenballoon_image);
    greenballoon.scale=0.10
  }
  
  for(var i=160; i<250; i=i+60){
    purpleballoon=createSprite(150,i,1,1);
    purpleballoon.addImage(purpleballoon_image);
    purpleballoon.scale=0.10
  }
  
   for(var i=210; i<250; i=i+60){
    pinkballoon=createSprite(200,i,10,10);
    pinkballoon.addImage(pinkballoon_image);
  }
}
function draw() {
  
  
   background.velocityX=-3;
  if(background.x<0){
    background.x=background.width/2
    
  }
  
  if(keyDown("space")){
    Arrow();
  }
  bow.y= World.mouseY;

  drawSprites();
  Text("score; "+ score, 270,30)
}
  
function Arrow(){
  arrow=createSprite(440,400,20,5)
  arrow.addImage(arrowimage)
  arrow.y=bow.y
  arrow.velocityX=-6
  arrow.scale=0.3
}
