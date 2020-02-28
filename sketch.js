var head,body,neck;
var headY=180;

function setup(){
 createCanvas(400,400);
  
 head = createSprite(200,headY,50,50); 
 body = createSprite(200,300,50,100);
 neck = createSprite(200,230,5,60);
}

function draw(){
 background("cyan");
  
  head.x=mouseX
  body.x=mouseX
  neck.x=mouseX
  
  if (mouseIsPressed){
  head.y=210;
  }else{
  head.y=180;
  }
  
 drawSprites();
}