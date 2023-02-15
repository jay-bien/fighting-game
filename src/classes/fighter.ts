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
    private spriteProps: ISprite;
    private spriteImg: HTMLImageElement;
    private sprite: Sprite;
    private spriteX: number;
    private spriteY: number;
    private animation: animationOptions = animationOptions.idle;
    private animationFrame: number = 1;
    private currentAnimation: animationOptions = animationOptions.idle;
    private animations: {};

    constructor( arg: {x: number, y: number, width:number, height:number,  
        polygon:number[], velocity?:{x:number, y:number}, controls: Controller,
        spriteSrc: string
    }){
        super({ x:arg.x, y:arg.y, width: arg.width, height: arg.height  });

        this.velocity = arg.velocity || {x:0, y:0};
        this.controller = arg.controls;
        
        //defaults might make dynamic later
        this.jumpStrength = 150;
        this.gravity = 7;
        this.attackBox = {width:100, height:40, x:this.x, y:this.y}
        this.spriteImg  = new Image();
        this.spriteImg.src = arg.spriteSrc;

        this.animations = {
            [ animationOptions.walk ] :{
                frames: 13  
            },
            [animationOptions.idle]: {
                startX: 0,
                startY: 0,
                frames: 2,
                width: 60,
                height: 150 
            }
        }
        
    }

    draw( ctx: CanvasRenderingContext2D ): void{
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height );
        if( this.spriteImg ){
            console.log("Draw the sprite", this.x, this.y );
            const xStart = this.animation
            super.draw( ctx, this.spriteImg, this.spriteX, this.spriteY, 45, 120, this.x, this.y, this.width, this.height);
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

        

        if(this.animationFrame > this.animations[animationOptions.idle].frames ){
            this.animationFrame = 0;
        }

        this.spriteX = this.animations[ animationOptions.idle].startX + this.animations[ animationOptions.idle ].width * this.animationFrame;
        this.spriteY = this.animations[ animationOptions.idle].startY * this.animations[ animationOptions.idle ].height;
        this.animationFrame++;
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

}

export  { 
    Fighter
}

interface ISprite{
    src: string,
    animations:{
        idle:{
            start: 900,
            frames: 2,
            width: 60
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

enum animationOptions {
    "walk",
    "run",
    "idle"
}