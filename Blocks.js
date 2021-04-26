class block {
    constructor(x,y,w,h){
        var settings={
            isStatic: false,
            friction: 0.5,
            density: 0.5,
            restitution:0.5
        }
      this.body = Bodies.rectangle(x,y,w,h, settings)
      this.width = w
      this.height = h
      World.add(world, this.body)
    }
    display(){
       fill("grey")
       push()
       rectMode(CENTER)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       rect(0,0, this.width, this.height )
       pop()
    }
}