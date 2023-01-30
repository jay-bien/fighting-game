class Controller{
    private control_type: string;
    up: Boolean = false;
    down: Boolean = false;
    right: Boolean = false;
    left: Boolean = false;

    constructor( control_type: PlayerType){
        this.control_type = control_type;
        this.attachKeyboardListeners( control_type );
    }

    private attachKeyboardListeners( player_type: PlayerType ): void{
        document.addEventListener('keydown', (event:KeyboardEvent)=> {
            event.preventDefault();

            if(player_type !== "player1" && player_type !== "player2") return;

            if(player_type === "player1"){
                switch( event.key ){
                    case "w": this.up = true;
                    break;
                    case "a": this.left = true;
                    break;
                    case "s": this.down = true;
                    break;
                    case "d": this.right = true;
                    break;
                    default:
                        break;
                }
                
            } else{

                switch( event.key ){
                    case "ArrowUp": this.up = true;
                    break;
                    case "ArrowLeft": this.left = true;
                    break;
                    case "ArrowDown": this.down = true;
                    break;
                    case "ArrowRight": this.right = true;
                    break;
                }

            }

        })

        document.addEventListener('keyup', (event:KeyboardEvent)=> {
            event.preventDefault();

            if(player_type !== "player1" && player_type !== "player2") return;

            if(player_type === "player1"){
                switch( event.key ){
                    case "w": this.up = false;
                    break;
                    case "a": this.left = false;
                    break;
                    case "s": this.down = false;
                    break;
                    case "d": this.right = false;
                    break;
                    default:
                        break;
                }
                
            } else{

                switch( event.key ){
                    case "ArrowUp": this.up = false;
                    break;
                    case "ArrowLeft": this.left = false;
                    break;
                    case "ArrowDown": this.down = false;
                    break;
                    case "ArrowRight": this.right = false;
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