//Create variables here
var sadDog,happyDog;
var dog,database,foods,footstock;
function preload()
{
  //load images here
  sadDog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  footstock=database.ref("food");
  footstock.on("value",readStock);




  
}


function draw() {  
background("yellow");
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  fill(255,255,254);
  text("foodRemianing"+ foods,170,200);
  textSize(13);
  text("Press Up arrow to feed the dog",130,10,300,20);



}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}

