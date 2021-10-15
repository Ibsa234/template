var box
function setup() {
  createCanvas(400,400);
  box=createSprite(100,200,100,100);
}

function draw() 
{
  background(30);
  if(keyIsDown(right_arrow)){
    box.position.x=box.position.x+5;
  }
  if(keyIsDown(up_arrow)){
    box.position.y=box.position.y-5;
  }
  if(keyIsDown(left_arrow)){
    box.position.x=box.position.x-5;
  }
  if(keyIsDown(down_arrow)){
    box.position.y=box.position.y+5;
  }
drawSprites();
}





