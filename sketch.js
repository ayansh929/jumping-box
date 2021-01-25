var canvas;
var surface1,surface2,surface3,surface4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = rgb(0,0,255);

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = rgb(255,128,0);

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = rgb(153,0,76);

    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}

    
    
    
    