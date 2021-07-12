var bgImg;
var cat;
function preload() {
    cat1.png = loadImage("images/cat1.png")
    cat2.png = loadImage("images/cat2.png")
    cat3.png = loadImage("images/cat3.png")
    mouse1.png = loadImage("images/mouse1.png")
    mouse2.png = loadImage("images/mous32.png")
    mouse3.png = loadImage("images/mouse3.png")
    mouse4.png = loadImage("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
   

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2.png)
    mpuse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;

}

}
