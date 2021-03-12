class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    attach(body){
        this.slingShot.bodyA = body;
    }
    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
        if(this.slingShot.bodyA){
            push();
            strokeWeight(7);
            stroke(48,22,8);
            line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.pointB.x,this.pointB.y);
            pop();
            }
        }
    
}