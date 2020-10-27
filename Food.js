class Food {
    constructor() {
        this.image1 = loadImage("Milk.png");
        
    }

    display(){
    var x=80, y=100;

       imageMode(CENTER);
       

       if(foodS!=0){
         for(var i=0; i<foodS; i++){
           if(i%10==0){
             x=80;
             y=y+50;
           }
           image(this.image1,x,y,50,50);
           x=x+30;
         }
       }
      }
    
      
    }
