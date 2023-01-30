import { Context } from "vm"


class Sprite{
    position: IPosition
    constructor( private x: number, private y: number, private width:number, private height:number, private polygon:number[] ){
        this.x =x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.polygon = polygon;
    }


    draw( ctx: Context ){

    }

    update(){

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
