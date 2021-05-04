var tom ;
var jerry;
var tomImage1,tomImage2,jerryImage1,jerryImage2,bckImage;
function preload() {
    //load the images here
    bckImage = loadImage("images/garden.png");
    tomImage1 = loadAnimation("images/cat1.png");
    tomImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImage4 = loadAnimation("images/cat4.png");
    jerryImage1 = loadAnimation("images/mouse1.png");
    jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addAnimation("tomSleeping",tomImage1);
tom.scale = 0.2
jerry = createSprite(200,600);
jerry.addAnimation("jerryStanding",jerryImage1);
jerry.scale = 0.2
}

function draw() {

    background(bckImage);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("tom",tomImage4);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation("tom");
    jerry.addAnimation("jerry",jerryImage4);
    jerry.scale = 0.15;
    jerry.changeAnimation("jerry");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomImage2);
    
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryRunning",jerryImage2);
    
    jerry.changeAnimation("jerryRunning");

}

}
