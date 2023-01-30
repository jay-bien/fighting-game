import { Context } from "vm"
import { Controller } from "./controller.js";

class Sprite{
    position: IPosition;

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private polygon: number[];
    public velocity: {x:number, y:number};
    private gravity: number;
    private controller: Controller;
    private jumpStrength: number;
    private lastJump: number;
    constructor( arg: {x: number, y: number, width:number, height:number,  
        polygon:number[], velocity?:{x:number, y:number}, controls: Controller
    }){
        this.x = arg.x;
        this.y= arg.y;
        this.width=arg.width;
        this.height=arg.height;
        this.polygon = arg.polygon;
        this.velocity = arg.velocity || {x:0, y:0};
        this.gravity = 3;
        this.controller = arg.controls;
        this.jumpStrength = 15;
    }


    draw( ctx: Context ): void{
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );

    }

    update( canvas:HTMLCanvasElement, ctx: Context ): void{
        if( this.controller.right && ! this.controller.left ) this.velocity.x = 1;
        if( this.controller.left && !this.controller.right ) this.velocity.x = -1;
        if(! this.controller.left && !this.controller.right ) this.velocity.x = 0;


        if( this.height + this.y + this.velocity.y < canvas.height && this.y  + this.velocity.y > 0 ){
            this.y += this.velocity.y
        } 
        if( this.width + this.x + this.velocity.x < canvas.width && this.x  + this.velocity.x > 0 )this.x += this.velocity.x;
        this.draw( ctx );
    }
    jump(){

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
