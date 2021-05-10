class snowFlake{
    constructor(x,y,r){
var options = {
    density:1,
    restitution:2.5,
}
this.r = r;
this.Image = loadImage("snow4.webp");
this.body = Bodies.circle(x,y,this.r,options);
World.add(world,this.body);


    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this,r);
        pop();
    }
    
}

