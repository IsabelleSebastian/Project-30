class Block {
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.8,
          friction : 1.0,
          density : 1.0,
          isStatic : false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5
      tint(255,this.Visibility)
      rectMode(CENTER);
      fill("white");
      noStroke();
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }