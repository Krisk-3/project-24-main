class bin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:3,
            density:1
        }
        this.object = Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height =height;
        World.add(world,this.object)
    }
    display(){
        rectMode(CENTER)
        fill("cyan")
        rect(this.object.position.x,this.object.position.y,this.width,this.height)
       }
   
   }
