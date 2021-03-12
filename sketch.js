const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
//base 1 [
var block1, block2, block3, block4, block5, block6, block7;
var block01, block02, block03, block04, block05;
var block001, block002, block003;
var block10;
// ]

// base 2[
var blockA, blockB, blockC, blockD, blockE;
var blockAA, blockBB, blockCC;
var blockZ;
// ]

var polygon;
// for adding img to polygon
function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world ;
// all bases 
     ground = new Ground(500, 600, 2000, 30);
     stand1 = new Ground(390, 450, 220, 20);
     stand2 = new Ground(790, 350, 160, 20);
// the polygon it self
     polygon = Bodies.polygon(50, 200, 15, 15);
     World.add(world,polygon);
// line
     slingShot = new SlingShot(polygon, {x:150, y:200});

     // Base 1 [

     //level 4
     
     block1 = new Block(300, 400, 30, 40);
     block2 = new Block(330, 400, 30, 40);
     block3 = new Block(360, 400, 30, 40);
     block4 = new Block(390, 400, 30, 40);
     block5 = new Block(420, 400, 30, 40);
     block6 = new Block(450, 400, 30, 40);
     block7 = new Block(480, 400, 30, 40);

     //level 3
     
    block01 = new Block(330, 350, 30, 40);
    block02 = new Block(360, 350, 30, 40);
    block03 = new Block(390, 350, 30, 40);
    block04 = new Block(420, 350, 30, 40);
    block05 = new Block(450, 350, 30, 40);

    //level 2
    
    block001 = new Block(360, 340, 30, 40);
    block002 = new Block(390, 340, 30, 40);
    block003 = new Block(420, 340, 30, 40);

    //level1
    
    block10 = new Block(390, 330, 30, 40);
    
    // ]

    //base 2 [

     //level 3
     
     blockA = new Block(730, 280, 30, 40);
     blockB = new Block(760, 270, 30, 40);
     blockC = new Block(790, 270, 30, 40);
     blockD = new Block(820, 270, 30, 40);
     blockE = new Block(850, 280, 30, 40);
 
     //level 2
     
     blockAA = new Block(760, 250, 30, 40);
     blockBB = new Block(790, 250, 30, 40);
     blockCC = new Block(820, 250, 30, 40);
 
     //level1
     
     blockZ = new Block(790, 230, 30, 40);
     
     // ]


}

function draw(){
    // BG COLOR
    background("#3C2E2E");
    Engine.update(engine);
    
// TEXT WORK
    fill("white");
    textSize(25);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 300, 50);
    ground.display();

// BASE 1 AND 2
    stand1.display();
    stand2.display();

// BLOCKS OF BASE 1 AND COLOURS OF THEM [
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();

    fill("#00E4D0");
    block001.display();
    block002.display();
    block003.display();

    fill("grey");
    block10.display();
// ]

// BLOCKS OF BASE 2 AND COLOURS OF THEM [
    fill("skyblue");
    blockA.display();
    blockB.display();
    blockC.display();
    blockD.display();
    blockE.display();

    fill("#00E4D0");
    blockAA.display();
    blockBB.display();
    blockCC.display();

    fill("pink");
    blockZ.display();

    // ]
    
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40 ,40);
    slingShot.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX, y:mouseY});
    }

    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode === 32){
        Matter.Body.setPosition(polygon, {x:100, y:200});
        slingShot.attach(polygon);
        }
    }
