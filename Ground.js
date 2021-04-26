class floor {
    constructor(x,y,w,h){
        var settings={
            isStatic: true
        }
      this.body = Bodies.rectangle(x,y,w,h, settings)
      this.width = w
      this.height = h
      World.add(world, this.body)
    }
    display(){
       fill("green")
       rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y, this.width, this.height )
    }
}