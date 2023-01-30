import { Context } from "vm"


class Sprite{
    position: IPosition;

    x: number;
    y: number;
    width: number;
    height: number;
    polygon: number[];
    velocity: {x:number, y:number};
    gravity: number;
    constructor( arg: {x: number, y: number, width:number, height:number,  polygon:number[], velocity?:{x:1, y:1} }){
        this.x = arg.x;
        this.y= arg.y;
        this.width=arg.width;
        this.height=arg.height;
        this.polygon = arg.polygon;
        this.velocity = arg.velocity || {x:1, y:1};
        this.gravity = 1;
    }


    draw( ctx: Context ){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );

    }

    update(){
        
    }
    move(){
        const position ={x:this.x,y:this.y}
        console.log({position} );
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

interface IPosition{
    x: number,
    y: number,
    width: number,
    height: number,
    polygon: number[]
}

export {
    Sprite
}
