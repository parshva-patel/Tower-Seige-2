class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visliblity=255
      this.blockImage=loadImage("block.png")

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if (this.body.speed<3){
        imageMode(CENTER);
        image(this.blockImage,pos.x,pos.y,this.width, this.height)

      }

      else{
        World.remove(world,this.body)
        push()
        this.visliblity=this.visliblity-5
        tint(255,this.visliblity)
        image(this.blockImage,pos.x,pos.y,this.width, this.height)
      }
      
    }
}