class Controller{
    constructor(){
        this.lists=null;
        this.initialSize=1;
    }

    interaction(screen,mouseX,mouseY){
        switch(screen){
            case 1:
                if(this.initialSize>=1 && this.initialSize<=10){
                    if(mouseX>680 && mouseX<750 && mouseY>175 && mouseY<250){
                        this.initialSize++;
                    }
    
                    if(mouseX>245 && mouseX<315 && mouseY>175 && mouseY<250){
                        this.initialSize--;
                    }
                }else{
                    if(this.initialSize==11){
                        this.initialSize=10;
                    }

                    if(this.initialSize==0){
                        this.initialSize=1;
                    }
                }

               
                break;
            case 2:
                this.lists.action(mouseX,mouseY);
        
                break;
        }
    }


    sortByValue(){
        this.lists.sortByValue();
    }

    initializeList(){
        this.lists=new List(this.initialSize);
    }

    getLists(){
        return this.lists;
    }
    getInitialSize(){
        return this.initialSize;
    }
}