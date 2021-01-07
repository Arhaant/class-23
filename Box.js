class Box{
    constructor(x,y,width,height){
        var options
        options = { restitution: 0.8, friction: 1, density: 2}
         this.boxBody = Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
         World.add(world,this.boxBody)
    }    

    display(){
       var pos = this.boxBody.position;
       var angle = this.boxBody.angle;
       push()
       translate(pos.x, pos.y)
       rotate(angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height);
       pop()
    }
}