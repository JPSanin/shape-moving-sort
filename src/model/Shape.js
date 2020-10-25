class Shape{
 constructor(posY){
        this.value=Math.floor(random(1,11));
        this.size= 25;
        this.posY = posY;
        this.dir=Math.floor(random(1,3));
        if(this.dir==2){
            this.dir=-1;
        }
    }

    draw(posX){}


    setValue(val){
        this.value=val;
    }

    getValue(){
        return this.value;
    }

    getSize(){
        return this.size;
    }

    setDir(dir){
        this.dir=dir;
    }
    getDir(){
        return this.dir;
    }

   
    getPosY(){
        return this.posY
    }

    setPosY(posY){
        this.posY=posY;
    }

}