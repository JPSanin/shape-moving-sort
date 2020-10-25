class Circle extends Shape{
    constructor(){
        super(Math.floor(random(200,400)));
        
    }

    draw(posX){
        super.setPosY(super.getPosY()+(1*super.getDir()));
        if(super.getPosY()<210){
            super.setPosY(400);
        }
        if(super.getPosY()>400){
            super.setPosY(210);
        }
        fill(8, 182, 255);
        ellipseMode(CORNER);
        ellipse(posX,super.getPosY(),super.getSize(),super.getSize());
        fill(0);
        textSize(15);
        if(super.getValue()==10){
            text(super.getValue(),posX+4,super.getPosY()+18);
        }else{
            text(super.getValue(),posX+9,super.getPosY()+18);
        }
    }
}