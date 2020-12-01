class Button{
    constructor(lamp) {
        this._lamp = lamp;
    }
    connectToLamp(_lamp){
        return "Connect completed"
    }
    switchOn(_lamp){
        this._lamp.status = true;
        return "Button on"
    }

    switchOff(_lamp){
        this._lamp.status = false;
        return "Button off"
    }
}