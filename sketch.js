var moverect,fixrect;

function setup() {
  createCanvas(1200,800);
  moverect=createSprite(400,200,80,30);
  fixrect=createSprite(600,400,50,80);
  fixrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.debug=true;
  fixrect.debug=true;
}

function draw() {
  background(255,255,255);
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;
  if(moverect.x-fixrect.x < moverect.width/2 + fixrect.width/2 &&
    fixrect.x-moverect.x < moverect.width/2 + fixrect.width/2 &&
    moverect.y-fixrect.y < moverect.height/2 + fixrect.height/2 &&
    fixrect.y-moverect.y < moverect.height/2 + fixrect.height/2) {
    fixrect.shapeColor="red";
    moverect.shapeColor="red";

  }
  else{
    fixrect.shapeColor="green";
    moverect.shapeColor="green";

  }

  
  drawSprites();
}