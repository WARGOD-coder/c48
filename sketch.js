var player
var block1,block2,block3,moveblock,redblock
var gun1
var powerup
var guard
var bi,playerimg,guardimg,guardshoot,playerforward,playerback,gun1img
var bulletgroup2,bulletimg,bulletgroup
var invissprite
var lives=3

function preload(){
bi = loadImage("Images/bi.jpg")
playerimg = loadImage("Images/robot_still.png")
playerforward = loadImage("Images/robot_forward.png")
playerback = loadImage("Images/robot_backward.png")
guardimg = loadImage("Images/guardwithgun.png")
guardshoot = loadImage("Images/guardshooting.png")
gun1img = loadImage("Images/E-5.png")
bulletimg = loadImage("Images/laser.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites()
  
  block1=createSprite(300,height-630,width-900,30) 

  block2=createSprite(width-330,height-530,width-900,30)

  moveblock=createSprite(765,380,350,30)
  moveblock.velocityX=-5
  

  redblock=createSprite(765,490,400,30)
  redblock.velocityX = 6

  block3=createSprite(50,750,175,30)

  player=createSprite(425,65,20,20)
  player.scale=0.6
  player.addImage("players",playerimg)
  player.addImage("playerf",playerforward)
  player.addImage("playerb",playerback)


  guard=createSprite(1405,700,20,20)
  guard.addImage("guard",guardimg)
  guard.addImage("guardshoot",guardshoot)


  gun1=createSprite(1500,325,20,20)
  gun1.addImage("gun1",gun1img)
  gun1.scale=0.7

 invissprite=createSprite(825,600,2000,350)
 invissprite.visible = false

  bulletgroup = createGroup()
  bulletgroup2 = createGroup()


  powerup=createSprite(1515,890,20,20)
  redblock.shapeColor="red"
  block3.shapeColor= rgb(25,25,112)
  block2.shapeColor= rgb(25,25,112)
  block1.shapeColor= rgb(25,25,112)
  moveblock.shapeColor= rgb(25,25,112)
}

function draw() {
  background(bi);  
  fill("white")
  text("X "+mouseX+" Y"+mouseY,mouseX,mouseY)
  redblock.bounceOff(edges)
  moveblock.bounceOff(edges)
  
  spawnbullets()
  playermove()

  textSize(25)
  text("Lives="+lives,1415,30)
  
  if (lives === 0 ){
  
  }
 

 if (player.isTouching(block3)){
 player.positionX=1280
 player.positionY=185
 }
 if(player.isTouching(invissprite)){
 guardshooting()
 
 }
 if (player.isTouching(bulletgroup) || player.isTouching(bulletgroup2)){
 player.x=425
 player.y=65
 if (lives > 0 ){
 lives=lives-1
}

}
  drawSprites()
}
function spawnbullets(){
  if( frameCount % 40 === 0 ){
   var bullet = createSprite(1430,307,10,10)
   bullet.velocityX = -9
   bullet.addImage("bullet",bulletimg)
   bullet.lifetime = 300
   bulletgroup.add(bullet)
   gun1.depth = bullet.depth+1
  }
}
function playermove(){
  player.velocityX=0
  player.velocityY=0
  if (keyDown(RIGHT_ARROW)){
  player.velocityX=5
  player.changeAnimation("playerf",playerforward)
  }
  if (keyDown(LEFT_ARROW)){
    player.velocityX=-5
    player.changeAnimation("playerb",playerback)
    }
  if (keyDown(DOWN_ARROW)){
    player.velocityY=5
    player.changeAnimation("players",playerimg)
      }
  if (keyDown(UP_ARROW)){
    player.velocityY=-5
    player.changeAnimation("players",playerimg)
      

  }
}
function guardshooting(){
  if( frameCount % 30 === 0 ){
    var bullet = createSprite(1347,647,10,10)
    bullet.velocityX = -12
    bullet.addImage("bullet",bulletimg)
    bullet.lifetime = 300
    bulletgroup2.add(bullet)
    
   }
 }

