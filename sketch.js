const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var SnowFlake,bg;
var maxSnow = 15;
var snowArray = [];

function preload(){
  bg = loadImage ("snow1.jpg")
  

}

function setup() {
  createCanvas(800,400);
engine = Engine.create();

world = Engine.world;
}


function draw() {
  background(bg);
  Engine.update(engine);
  if (frameCount%4===0){
    snowArray.push(new snowFlake(random(0,700)),30,30);
   } for(var i=0;snowArray.length;i++){
      snowArray[i].display; 
    } drawSprites();
   }
    
  


