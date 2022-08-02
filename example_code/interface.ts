interface UIInterface {

    getRootDiv() : HTMLDivElement;

    toggleBackground() : void;
    changeButtonText(text : string) : void;

}

interface IUIConn4 {

    toggleVisibility() : Promise<void>;
    updateLabelText(newText : string) : Promise<void>
    updateTimerText(newText : string) : Promise<void>
    updateProgressBar(newText : string) : Promise<void>
    updateRightButtonText(newText : string) : Promise<void>

    unHideTimer() : void;
    unPointGame() : void;

    updatePlayground(playground : field, player : piece, column : number) : Promise<void>;

    // checks if is tie
    isTie(playground : field) : Promise<boolean>;

    playStonePreview(player : player, col : number, row : number, transparent : boolean) : Promise<void>;
    removeStonePreview() : void;
    placeStone() : void;
    clearField() : void;

    subscribe(event : 'columnHover', callback : (stackNr : number) => void) : void;
    subscribe(event : 'columnClick', callback : (stackNr : number) => void) : void;
    subscribe(event : 'clickLeave', callback : () => void) : void;
    subscribe(event : 'clickReplayAi', callback : () => void) : void;
    subscribe(event : 'clickReplayHuman', callback : () => void) : void;
    subscribe(event : 'columnLeave', callback : () => void) : void;
    subscribe(event : 'columnNrEnter', callback : (stackNr : number) => void) : void;
    subscribe(event : 'columnNrLeave', callback : () => void) : void;

    unsubscribe(event : 'columnHover', callback : (stackNr : number) => void) : void;
    unsubscribe(event : 'columnClick', callback : (stackNr : number) => void) : void;
    unsubscribe(event : 'clickLeave', callback : () => void) : void;
    unsubscribe(event : 'clickReplayAi', callback : () => void) : void;
    unsubscribe(event : 'clickReplayHuman', callback : () => void) : void;
    unsubscribe(event : 'columnLeave', callback : () => void) : void;
    unsubscribe(event : 'columnNrEnter', callback : (stackNr : number) => void) : void;
    unsubscribe(event : 'columnNrLeave', callback : () => void) : void;

    getStonesContainer() : HTMLDivElement;
    getColumnsContainer() : HTMLDivElement;

}