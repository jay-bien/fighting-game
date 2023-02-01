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

    draw( ctx: CanvasRenderingContext2D ): void{
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height );
    }
    update( canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D ): void{
        this.draw( ctx );
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
