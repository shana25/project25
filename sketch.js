const Engine= Matter.Engine;
const World= Matter.World; 
const Bodies= Matter.Bodies; 
const Render=Matter.Render;
var world, myengine;
var paper,ground;
var bin1,bin2,bin3;


function setup()
 { 
   createCanvas(1200,600);
	myengine=Engine.create();
	world=myengine.world; 
	 
   ground=new Ground(600,480,1200,15);
   bin=new Bin (860,450,200,10);
   paper=new Paper(100,100,30);
   var render = Render.create({ 
      element: document.body,
      engine: myengine, 
      options: { width: 1600, height: 700, wireframes: false }
   });
   Render.run(render)
 }
	  
function draw()
 { 
   background(255); 
   Engine.update(myengine);
	
   paper.display();
   ground.display();
   bin.display();
 }

 function keyPressed()
 {
   if(keyCode === UP_ARROW)
   {
     console.log(keyCode)
     Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-155});
   }
 }

