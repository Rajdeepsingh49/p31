class Plinko{
    constructor(x, y, r){
        var options={
            isStatic : true
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r/2,this.r/2);
        pop();

        
        }
};