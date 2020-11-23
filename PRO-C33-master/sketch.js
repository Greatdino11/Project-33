var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,175));
    }

      for (var j = 75; j <=width; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,275));
    }

      for (var j = 50; j <=width-10; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,375));
    }

    

    
}
  


function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
  text("Score : "+score,20,30);
  text("250",25,550);
  text("150",100,550);
  text("50",188,550);
  text("100",262.5,550);
  text("250",342.5,550);
  text("300",425,550);
  text("200",505,550);
  text("100",582.5,550);
  text("50",667.5,550);
  text("50",750,550);
  
  
  
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }
  
  for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }

  if(particle!==null){
    particle.display();
    if(particle.body.position.y> 760){


      if(particle.body.position.x>425 && particle.body.position.x<550){
        score = score + 300;
        if(particle.y > 760){
          particle = null;
        }
        if(turn >= 5) gameState = "end";
      }

    }

    if(particle.body.position.x>555 && particle.body.position.x<500){
      score = score + 300;
      if(particle.y > 760){
        particle = null;
      }
      if(turn >= 5) gameState = "end";
    }

  }

}


function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
  //console.log(turn);
}