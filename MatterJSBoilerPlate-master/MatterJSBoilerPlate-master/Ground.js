class Ground{ 
    constructor(x,y,w,h)
    { 
        var order1={
             isStatic: true
             }
              this.body=Bodies.rectangle(x,y,w,h,order1);
               this.width=w;
                this.height=h;
                 World.add(world,this.body);
                 } 
                 display()
                  { 
                      var pos=this.body.position;

                      translate(pos.x,pos.y)
                       rectMode(CENTER); 
                       fill ("Brown");
                        rect(pos.x,pos.y,this.width,this.height);
                     }
                    }
                     