class ball{

    constructor(x,y,r){

        var options={
        isStatic: false,
        restitution:0.3,
        friction:0.8,
        density:1.3
        
        }
        
        
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
        
        
        }
        
        
        display(){
        
        var trashpos=this.body.position;
        
        translate(trashpos.x,trashpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("green")
        ellipse(0,0,this.r,this.r);
   console.log("highcots")     
        
}

}