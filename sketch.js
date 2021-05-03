const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;


var backgroundImg;
var snows=[];


//var bg = "sprites/snow1.jpg";








function preload(){
 getBackgroundImg();
  //backgroundImg = loadAnimation();
}




function setup() {
  var canvas = createCanvas(1200,400);
  
  
  
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);  
  
        Engine.update(engine);
        if(frameCount%60 === 0){
           var posX=Math.round(random(100,1100)) 
           var snow = new Snow(posX,0,20)
           snows.push(snow); 
        } 
        for(var i=0; i< snows.length; i++){ 
          snows[i].display(); 
        }
       
        drawSprites();


        


      }






async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "snow1.jpg";
  }
  else{
      bg = "snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}