class Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          restitution:0.3,
          fricition:0.5,
          density:1.2
      }
      this.leftbody = Bodies.rectangle(x-100, y-100, width-200, height+200, options);
      console.log(this.leftbody);
      this.rightbody = Bodies.rectangle(x+100, y-100, width-200, height+200, options);
      this.bottombody = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("dustbingreen.png")
      this.width = width;
      this.height = height;
      
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display(){
      //var posl =this.leftbody.position;
      //var posr =this.rightbody.position;
      var posb =this.bottombody.position;
      imageMode(CENTER);
      //strokeWeight(7);
      //stroke("red");
      //fill("red");
      image(this.image,posb.x, posb.y, this.width, this.height+200);
    }
  }