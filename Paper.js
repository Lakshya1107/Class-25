class Paper{

    constructor(x,y,r){
        this.r = r;

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        fill("purple");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 60, 60);
    }
}
