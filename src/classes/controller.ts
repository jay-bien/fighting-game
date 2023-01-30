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
            event.preventDefault();

            if(player_type !== "player1" && player_type !== "player2") return;

            if(player_type === "player1"){
                switch( event.key ){
                    case "w": this.player.moveUp();
                    break;
                    case "a": this.player.moveLeft();
                    break;
                    case "s": this.player.moveDown();
                    break;
                    case "d": this.player.moveRight();
                    break;
                    default:
                        break;
                }
                
            } else{

                switch( event.key ){
                    case "ArrowUp": this.player.moveUp();
                    break;
                    case "ArrowLeft": this.player.moveLeft();
                    break;
                    case "ArrowDown": this.player.moveDown();
                    break;
                    case "ArrowRight": this.player.moveRight();
                    break;
                }

            }

        })

        document.addEventListener('keyup', (event:KeyboardEvent)=> {
            event.preventDefault();

            if(player_type !== "player1" && player_type !== "player2") return;

            if(player_type === "player1"){
                switch( event.key ){
                    case "w": this.player.moveUp( true);
                    break;
                    case "a": this.player.moveLeft( true);
                    break;
                    case "s": this.player.moveDown( true);
                    break;
                    case "d": this.player.moveRight( true);
                    break;
                    default:
                        break;
                }
                
            } else{

                switch( event.key ){
                    case "ArrowUp": this.player.moveUp( true);
                    break;
                    case "ArrowLeft": this.player.moveLeft( true);
                    break;
                    case "ArrowDown": this.player.moveDown( true);
                    break;
                    case "ArrowRight": this.player.moveRight( true);
                    break;
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