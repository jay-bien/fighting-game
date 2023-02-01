import { Sprite  } from "./sprite.js";
import { Controller } from "./controller.js";


class Fighter extends Sprite {


    private polygon: number[];
    public velocity: {x:number, y:number};
    private gravity: number;
    private controller: Controller;
    private jumpStrength: number;
    private attackBox:{width:number, height:number, x:number, y:number}


    constructor( arg: {x: number, y: number, width:number, height:number,  
        polygon:number[], velocity?:{x:number, y:number}, controls: Controller
    }){
        super(arg)

        this.velocity = arg.velocity || {x:0, y:0};
        this.controller = arg.controls;
        
        //defaults might make dynamic later
        this.jumpStrength = 150;
        this.gravity = 7;
        this.attackBox = {width:100, height:40, x:this.x, y:this.y}

    }
    draw( ctx: CanvasRenderingContext2D ): void{
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );

        // draw attack box
        ctx.fillStyle = "purple";
        ctx.fillRect(this.attackBox.x, this.attackBox.y, this.attackBox.width, this.attackBox.height);

    }

    update( canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D ): void{

        this.velocity.y = 0;
        
        if( this.controller.right && ! this.controller.left ) this.velocity.x = 10;  
        if( this.controller.left && !this.controller.right ) this.velocity.x = -10;
        if(! this.controller.left && !this.controller.right ) this.velocity.x = 0;
        
        // always make player return to ground by addingg gravity amount or difference between player y and ground
        if( this.y + this.height < canvas.height){
            this.y += Math.min(this.gravity, canvas.height - this.y+this.height)
        }

        if( this.controller.up && this.y+this.height+this.gravity>=canvas.height ) this.velocity.y -= this.jumpStrength;
        if( this.height + this.y + this.velocity.y < canvas.height && this.y  + this.velocity.y > 0 ){
            this.y += this.velocity.y
        } 
        if( this.width + this.x + this.velocity.x < canvas.width && this.x  + this.velocity.x > 0 )this.x += this.velocity.x;
        this.attackBox.x = this.x;
        this.attackBox.y = this.y;
        this.draw( ctx );

    }

}

export  { 
    Fighter
}