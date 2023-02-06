class Sprite{
    position: IPosition;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor( arg: {x: number, y: number, width:number, height:number,  }){
        this.x = arg.x;
        this.y= arg.y;
        this.width=arg.width;
        this.height=arg.height;
}

    draw( ctx: CanvasRenderingContext2D, sprite:HTMLImageElement, sx: number, sy: number, sWidth: number, sHeight: number, dx:number, dy: number, dWidth: number, dHeight: number ): void{
        console.log(ctx);
        console.log(sprite);
        ctx.fillStyle = "red";
        ctx.drawImage( sprite, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

    }
    update( canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D ): void{
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
