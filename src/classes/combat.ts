import { Fighter } from "./fighter.js";
class Combat {

    private player1: Fighter;
    private player2: Fighter;

    constructor( player1:Fighter, player2:Fighter){
        this.player1 = player1;
        this.player2 = player2;
    }

    update():void{
        if( this.player1.isAttacking()){
            console.log("Player one attacking")
        } else if( this.player2.isAttacking() ){
            console.log("Player 2 attachking")
        } else {
            console.log("All quiet on the Western Front")
        }
}
}

export {
    Combat
}