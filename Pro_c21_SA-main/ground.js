class Ground 
{
  constructor(x, y, width, height) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.h = height;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


