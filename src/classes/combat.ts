import { Fighter } from "./fighter.js";
class Combat {

    private player1: Fighter;
    private player2: Fighter;

    constructor( player1:Fighter, player2:Fighter){
        this.player1 = player1;
        this.player2 = player2;
    }

    update():void{
        let player1AttackRange = this.player1.isAttacking();
        let player2Box = this.player2.isAttacking();
        if( this.player1.isAttacking() ){
            let attackRange = this.player1.getAttackRange();
           if( this.player1.x + attackRange.width >= this.player2.x ){
            console.log("Hit")
           } else {
            console.log("Miss")
           }
            
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