import { Sprite } from "./sprite.js";
class Controller{
    private control_type: string;
    private up: Boolean;
    private down: Boolean;
    private right: Boolean;
    private left: Boolean;
    private player: Sprite;

    constructor( control_type: PlayerType, player: Sprite){
        this.control_type = control_type;
        this.attachKeyboardListeners( control_type );
        this.player = player;
    }

    private attachKeyboardListeners( player_type: PlayerType ): void{
        document.addEventListener('keydown', (event:KeyboardEvent)=> {
            if(player_type !== "player1" && player_type !== "player2") return;

            if(player_type === "player1"){
                switch( event.key ){
                    case "w": this.player.move(0, 1);
                    case "a": this.player.move(-1, 0);
                    case "s": this.player.move(0, -1);
                    case "d": this.player.move(0, -1)
                }
            } else{
                switch( event.key ){
                    case "ArrowUp": this.player.move(0, 1);
                    case "ArrowLeft": this.player.move(-1, 0);
                    case "ArrowDown": this.player.move(0, -1);
                    case "ArrowRight": this.player.move(1, 0)
                }
            }
        })
    }

}


const controller_mappings = {
    player1:{"w":"up", "a":"left", "d":"right","s":"down"},
    player2:{"ArrowUp":"up", "ArrowDown":"down","ArrowLeft":"left","ArrowRight":"right"}
}
export {
    Controller
}
type PlayerType = "ai" | "player1" | "player2";