var rect1,rect2;


function setup() {
  createCanvas(800,400);
  rect1=createSprite(180,200,50,40);
  rect1.shapeColor="green";
  rect2=createSprite(180,280,40,30);
  rect2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
rect2.x=mouseX;
rect2.y=mouseY;

  drawSprites();


}