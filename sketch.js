var bullet,wall;
var speed,weight,thickness,damage;
var commander,shooter,commanderImg,shooterImg,bulletSound;

function preload(){
commanderImg=loadImage("InkedInkedinspector.jpg");
shooterImg=loadImage("Inkedshooter.jpg");

bulletSound=loadSound("Bullet.m4a");
}

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
 
  thickness=Math.round(random(22,83));

  bullet=createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,200);

  commander=createSprite(500,100,20,20);
  commander.addImage(commanderImg);
  commander.scale=0.4;

  
  shooter=createSprite(60,200,20,20);
  shooter.addImage(shooterImg);
  shooter.scale=0.5; 

  

  wall.shapeColor="blue";
  
  bullet.shapeColor="white";

  damage=(0.5*weight*bullet.velocityX*bullet.velocityX)/(thickness*thickness*thickness);

}

function draw() {
  
  background("black");

   if(keyDown("space")){
     bullet.velocityX=speed;
   }
  
   if(bullet.x<400){
    bulletSound.play();
    }

   

 if(isTouching()){
  
   bullet.collide(wall);
   if(damage<10){
      wall.shapeColor="green";
      fill("green");
      text("wall is good",500,30);
   }
   if(damage>10){
      wall.shapeColor="red";
      fill("red");
      text("wall material rejected",500,30);
   }
 }
 
 

  drawSprites();
 
}
function isTouching(){
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    return true;
  }
  else {
    return false;
   }
}
