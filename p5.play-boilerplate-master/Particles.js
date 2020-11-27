class Particle{
    constructor(x,y,r){
        var ops={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
           
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r,ops);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
	    ellipse(0,0,this.r/2,this.r/2);
        pop();
    }
}





