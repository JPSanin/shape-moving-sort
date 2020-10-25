
let controller;
let screen;
let screen1;
let errors= [2];
let screen2;
let buttonOpacity;
function preload() {
    screen1 = loadImage("img/screen1.png");
    screen2 = loadImage("img/screen2Final.png");
    errors[0] = loadImage("img/error1.png");
    errors[1] = loadImage("img/error2.png");
    buttonOpacity=loadImage("img/buttonOpacity.png");
}
function setup(){
    createCanvas(1000, 500);
    screen=1;
    controller=new Controller();
 
}
function draw(){
    background(0);
    
  

    switch(screen){
        case 1:
            
            image(screen1, 0, 0,1000,500);
            fill(0);
            textSize(64);
            if(controller.getInitialSize()==10){
                text(controller.getInitialSize(),470,238)
            }else{
                text(controller.getInitialSize(),490,238)
            }
            if(controller.getInitialSize()>10){
                image(errors[1], 0, 0,1000,500);
            }
            if(controller.getInitialSize()<1){
                image(errors[0], 0, 0,1000,500);
            }
            break;
        case 2:
            image(screen2, 0, 0,1000,500);
            for(let i=0; i<controller.getLists().getSquares().length;i++){
                controller.getLists().getSquares()[i].draw(12+i*50);
                if(controller.getLists().getCircles()!=null){
                controller.getLists().getCircles()[i].draw(12+i*50);
                }
            }

            if(controller.getLists().getSquares().length==10){
                image(buttonOpacity,24,430,202,52);
            }

            if(controller.getLists().getSquares().length==0){
                image(buttonOpacity,274,430,202,52);
                image(buttonOpacity,524,430,202,52);
            }

            if(controller.getLists().getSquares().length>10){
                image(buttonOpacity,524,430,202,52);
            }

            if(controller.getLists().getCircles()!=null){
                image(buttonOpacity,774,430,202,52);
            }



            break;
        
    }
    fill(120);
    textSize(12);
    text(Math.floor(mouseX)+ ","+ Math.floor(mouseY), mouseX,mouseY);

}
function mousePressed(){
    switch(screen){
        case 1:
            controller.interaction(screen,mouseX,mouseY);
            if(controller.getInitialSize()>=1 && controller.getInitialSize()<=10){
                if(mouseX>245 && mouseX<750 && mouseY>265 && mouseY<315){
                    controller.initializeList();
                    screen=2;
                }
            }
            break;
        case 2:
            controller.interaction(screen,mouseX,mouseY);
        break;
        
    }
   
}

function keyTyped(){
    if(screen==2){
        if(key==='n'){
            controller.sortByValue();
        }
    }
    
}
