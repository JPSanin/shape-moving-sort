class List{
    constructor(initialSize){
        this.squares=[initialSize];
        for(let i=0; i<initialSize; i++){
            this.squares[i]=new Square();
            
             }
        this.circles= null;
    }


    action(mouseX,mouseY){
        if(mouseX>24 && mouseX<224 && mouseY>428 && mouseY<478){
            this.addElement();
        }

        if(mouseX>274 && mouseX<474 && mouseY>428 && mouseY<478){
           this.removeElement();
        }

        if(mouseX>524 && mouseX<724 && mouseY>428 && mouseY<478){
            this.duplicateElements();
        }

        if(mouseX>774 && mouseX<974 && mouseY>428 && mouseY<478){
           if(this.circles==null){
            this.createCircles();
           } 
        }
    }

    addElement(){
        if(this.squares.length<10){
            this.squares.push(new Square());
        }
        if(this.circles!=null){
            this.circles.push(new Circle());
        }
        
    }
    removeElement(){
        if(this.squares.length>0){
            this.squares.pop();
        }
        if(this.circles!=null){
            this.circles.pop();
        }
    }
    duplicateElements(){
        this.squares.forEach(element => this.squares.push(new Square()));
        if(this.circles!=null){
            this.circles.forEach(element => this.circles.push(new Circle()));
        }
    }
    createCircles(){
        this.circles=this.squares.map(function(x){
            return x=new Circle();
        });
    }


    sortByValue(){
        this.squares.sort(function(a, b) {
            return a.getValue() - b.getValue();
          });

        if(this.circles!=null){
            this.circles.sort(function(a, b) {
                return a.getValue() - b.getValue();
              });
        }
    }

    getSquares(){
        return this.squares;
    }

    getCircles(){
        return this.circles
    }
}