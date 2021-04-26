class ball {
    constructor(x,y,r){
        var settings={
            isStatic: false,
            friction: 0.5,
            density: 0.5,
            restitution:0.5
        }
      this.body = Bodies.circle(x,y,r/2, settings)
      this.r = r
      World.add(world, this.body)
    }
    display(){
       fill("red")
       push()
       ellipseMode(CENTER)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       ellipse(0,0, this.r, this.r )
       pop()
    }
}