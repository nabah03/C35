const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(2400,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,2700,20);
    box1 =  new Box(900,100,70,70)
    box2 =  new Box(900,100,70,70)
    box3 =  new Box(900,100,70,70)
    box4 =  new Box(900,100,70,70)
    box5 =  new Box(900,100,70,70)
    box6 =  new Box(900,100,70,70)
    box7 =  new Box(800,100,70,70)
    box8 =  new Box(800,100,70,70)
    box9 =  new Box(800,100,70,70)
    box10 =  new Box(800,100,70,70)
    box11 =  new Box(800,100,70,70)
    box12 =  new Box(800,100,70,70)
    box13 =  new Box(700,100,70,70)
    box14 =  new Box(700,100,70,70)
    box15 =  new Box(700,100,70,70)
    box16 =  new Box(700,100,70,70)
    box17 =  new Box(700,100,70,70)
    box18 =  new Box(700,100,70,70)
    box19 =  new Box(700,100,70,70)
    box20 =  new Box(700,100,70,70)

    ball = new Ball(500,100,65,65)




    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background("Black")
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    //slingshot.display(); 
    fill ("white")
    box1.display(); 
    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display(); 
    box6.display(); 
    fill ("yellow");
    box7.display(); 
    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 
    fill ("red")
    box13.display(); 
    box14.display(); 
    box15.display(); 
    box16.display(); 
    box17.display(); 
    box18.display(); 
    box19.display(); 
    box20.display(); 

    fill("blue")
    ball.display();
    fill("white");
    slingshot.display();

}

function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


