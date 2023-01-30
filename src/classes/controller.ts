class Controller{
    private controlType: string;
    private up: Boolean;
    private down: Boolean;
    private right: Boolean;
    private left: Boolean;

    constructor( controlType: "ai"| "player1" |"player2" ){
        this.controlType = controlType;
    }

    private attachKeyboardListeners(): void{

    }

}