class polygon {
    constructor(x,y,options){
        options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.5
        }
this.body = Bodies.rectangle(x,y,options);
this.x = x
this.y = y
this.width = 40
this.height = 40
this.image = loadImage("polygon.png");
World.add(world,this.body);
}

display(){
    var pos = this.body.position
    this.body.position.x = mouseX
    this.body.position.y = mouseY
push()
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
pop()
}
}