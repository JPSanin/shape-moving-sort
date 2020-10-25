class Square extends Shape{
    constructor(){
        super(Math.floor(random(1,200)));
        
    }

    draw(posX){
        super.setPosY(super.getPosY()+(1*super.getDir()));
        if(super.getPosY()<-super.getSize()){
            super.setPosY(185);
        }
        if(super.getPosY()>185){
            super.setPosY(-super.getSize());
        }
        fill(255,211,0);
        rect(posX,super.getPosY(),super.getSize(),super.getSize());
        fill(0);
        textSize(15);
        if(super.getValue()==10){
            text(super.getValue(),posX+4,super.getPosY()+18);
        }else{
            text(super.getValue(),posX+9,super.getPosY()+18);
        }
      
    }

}