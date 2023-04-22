var bg, bg_img;
var btmground, topground;
var balloon, balloon_img;
var obstop, obstop1, obstop2;
var obsbtm, obsbtm1, obsbtm2, obsbtm3;

function preload(){
bg_img = loadImage("assets/bg.png");
balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup(){
  bg = createSprite(165,485,1,1);
  bg.addImage(bg_img);
  bg.scale = 1.3;
  
  btmground = createSprite(200,390,800,20);
  btmground.visible = false;

  topground = createSprite(200,10,800,20);
  topground.visible = false;

  balloon = createSprite(100,200,20,50);
  balloon.addAnimation('balloon', balloon_img);
  balloon.scale = 0.2;

}

function draw(){
 background(0)

 if (keyDown("space")){
  balloon.velocityY = -6;
 }
 balloon.velocityY = balloon.velocityY+2;
  drawSprites();
}