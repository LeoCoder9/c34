class Rope {
    constructor(bodyA, pointB){
     var Options={
        bodyA:bodyA,
        pointB:pointB,
         stiffness: 2,
         length:320
     
     }
     this.pointB = pointB
     this.rope = Constraint.create(Options)
   
     World.add(world,this.rope)
    }
    display(){
        
       line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    
    }
}