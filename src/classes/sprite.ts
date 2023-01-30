import { Context } from "vm"


class Sprite{
    position: IPosition;

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private polygon: number[];
    public velocity: {x:number, y:number};
    private gravity: number;
    constructor( arg: {x: number, y: number, width:number, height:number,  polygon:number[], velocity?:{x:number, y:number} }){
        this.x = arg.x;
        this.y= arg.y;
        this.width=arg.width;
        this.height=arg.height;
        this.polygon = arg.polygon;
        this.velocity = arg.velocity || {x:0, y:0};
        this.gravity = .5;
    }


    draw( ctx: Context ): void{
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );

    }

    update( canvas:HTMLCanvasElement, ctx: Context ): void{
        if( this.height + this.y + this.velocity.y < canvas.height && this.y  + this.velocity.y > 0 ){
            this.y += this.velocity.y;
        }else {
            // this.velocity.y = -1 * this.velocity.x;
        }
        if( this.width + this.x + this.velocity.x < canvas.width && this.x  + this.velocity.x > 0 ){
            this.x += this.velocity.x;
        } else {
            // this.velocity.y = -1 * this.velocity.y;
        }
        this.draw( ctx );

    }
    move(x: number, y: number):void{
        console.log("move:", {x, y});
        this.velocity.x = x;
        this.velocity.y = y;
    }
    moveUp(){
        this.velocity.y = -1;
        console.log(this.velocity.y)
    }
    moveDown(){
        this.velocity.y = 1;
        console.log(this.velocity.y);
    }
    moveLeft(){
        this.velocity.x = -1;
        console.log( this.velocity.x );
    }
    moveRight(){
        this.velocity.x = 1;
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
