import { Sprite  } from "./sprite.js";
import { Controller } from "./controller.js";


class Fighter extends Sprite {


    private polygon: number[];
    public velocity: {x:number, y:number};
    private gravity: number;
    private controller: Controller;
    private jumpStrength: number;
    private attackBox:{width:number, height:number, x:number, y:number}
    private attacking: boolean = false;
    private sprite: ISprite;
    private spriteImg: HTMLImageElement;


    constructor( arg: {x: number, y: number, width:number, height:number,  
        polygon:number[], velocity?:{x:number, y:number}, controls: Controller,
    }){
        super();

        this.velocity = arg.velocity || {x:0, y:0};
        this.controller = arg.controls;
        
        //defaults might make dynamic later
        this.jumpStrength = 150;
        this.gravity = 7;
        this.attackBox = {width:100, height:40, x:this.x, y:this.y}
        const sailor_jupiter_sprite = new Image();
        sailor_jupiter_sprite.src = "./dist/assets/sprites/jupiter.png";
        this.spriteImg = sailor_jupiter_sprite;
    }

    draw( ctx: CanvasRenderingContext2D ): void{
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );
        if( this.spriteImg ){

            const jupiter_sprite = new Sprite();
            jupiter_sprite.draw( ctx, this.spriteImg, 0, 0, 45, 120, 700 - 100, 100, 46, 120);
        }
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
        
        if( this.controller.down ){
            this.attacking = true;
        } else {
            this.attacking = false;
        }
        this.attackBox.x = this.x;
        this.attackBox.y = this.y;
        this.draw( ctx );
    }

    isAttacking(): Boolean  {
        return this.attacking
    }
    getAttackRange():{x: number, y:number, width:number, height: number}{
        return this.attackBox;
    }
    setSprite(sprite: ISprite){
        this.sprite = sprite;
    }
}

export  { 
    Fighter
}

interface ISprite{
    src: string,
    animations:{
        idle:{
            sprites:[]
        },
        walk:{
            sprites:[]
        },
        run:{
            sprites:[]
        },
        jump:{
            sprites:[]
        },
        fall:{
            sprites:[]
        },
        attack:{
            sprites:[]
        }
    }
}