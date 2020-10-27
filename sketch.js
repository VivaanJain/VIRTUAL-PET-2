var dog, dogObject, happyDog, foodS, foodStock,food;
var database;
var lastFed;


function preload()
{
  dog = loadImage("Dog.png");
          happyDog = loadImage("happydog.png");
}
function setup() {
	createCanvas(500, 500);
  
               dogObject = createSprite(450, 250, 30, 30);
    dogObject.addImage(dog);
    dogObject.scale = 0.35;
database=firebase.database();
    foodStock=database.ref('food');
              foodStock.on("value", readStock);}
function readStock(data)
{
  foodS=data.val();
}
function writeStock(x)
{
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  } 
  database.ref('/').update({
    food : x
  })
}
food = new Food();

feed = createButton("Feed the Dog");
feed.position(700,110);
feed.mousePressed(feedDog);
addFood = createButton("Add Food");
    addFood.position(800,110);
    addFood.mousePressed(addFoods);
  
function draw() {  
 background(0,204,204);
 fedTime = database.ref('FeedTime');
 fedTime.on("value", function(data){
   lastFed = data.val();
 });
 food.display();
 getFood();
 drawSprites();
textSize(20);
fill("black");
text("Press 'Feed the Dog' button to Feed the Dog Milk.", 50, 540);
text("Press 'Add Food' button to add Milk to the screen.", 50, 500);
fill(235,265,252);
textSize(20);
if(lastFed>=12){
  text("Last Fed : " + lastFed%12 + " PM", 100,70)
}
else if(lastFed==0){
  text("Last Fed : 12 AM", 100,70)
}
else{
  text("Last Fed : "+lastFed + " AM", 100,70)
}

}

function feedDog(){

  dogSprite.addImage(happyDog);
  
  foodS--;

  database.ref('/').update({
    food:foodS,
    FeedTime:hour()
  
  })
  food.display();
}

function addFoods(){

  foodS++;
  
  database.ref('/').update({
    food:foodS
  })
food.display();
}

function getFood()
{
  database.ref("Food").on("value", (data)=>{
    foodS=data.val();
    food.foodStock = foodS;
  })
}




