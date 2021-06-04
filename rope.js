class Rope {
    constructor(bodyA, pointB) {
      var options = {
          'bodyA': bodyA,
          'pointB': pointB,
           'stiffness' : 1,
           'length': 250,
      }
    this.pointB= pointB;
    this.rope=Constraint.create(options);
      World.add(world, this.rope);
    }
    display(){
      if(this.rope.bodyA){
          var pointA= this.rope.bodyA.position;
          var pointB= this.pointB;
          push();
          stroke('grey');
          strokeWeight(10);
          line(pointB.x, pointB.y, pointA.x, pointA.y);
          pop();
      }
    }
  };
  
  