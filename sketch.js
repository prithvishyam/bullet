var thickness,wall;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(50,95)
  weight=random(450,1050)
  thickness=random(22,70)
  bullet=createSprite(50, 200, 50, 5);
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor="blue";

}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor='red'
    }
    if(damage<10){
      wall.shapeColor='green'
    }
  }


  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}