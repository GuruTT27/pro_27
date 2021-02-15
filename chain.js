class chain{

    constructor(bodyA, bodyB, offsetX, offsetY){
    
        this.offsetX = offsetX
        this.offsetY =  offsetY
        var options = {
    
        bodyA:bodyB,
        bodyB:bodyA,
        stiffness:0.07,
        length:400,
        pointB:{x:this.offsetX, y:this.offsetY}
    
        }
    
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
    
    }
    
    display(){
    
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    
    strokeWeight(4);

     var Anchor1X = pointB.x
     var Anchor1Y = pointB.y

    var Anchor2X = pointA.x + this.offsetX
    var Anchor2Y = pointA.y + this.offsetX

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
    
    }
    
    }