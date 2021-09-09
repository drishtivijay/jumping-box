var canvas;
var music;
var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;

var edges;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    movingSprite = createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

    fixSprite1 = createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2 = createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3 = createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4 = createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";
    


}

function draw() {
    background(rgb(10,10,10))
    
    edges=createEdgeSprites();
    movingSprite.bounceOff(edges);

    if(fixSprite1.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite1)){
        movingSprite.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(fixSprite2.isTouching(movingSprite)){
        movingSprite.shapeColor = "green";
        movingSprite.velocityX = 0;
        movingSprite.velocityY = 0;
        music.stop();
    }

    if(fixSprite3.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite3)){
        movingSprite.shapeColor = "blue";
    }

    if(fixSprite4.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite4)){
        movingSprite.shapeColor = "yellow";
    }

    

 drawSprites();

}
