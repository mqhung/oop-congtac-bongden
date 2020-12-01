class Lamp{
    constructor() {
        this.status = false;
    }
    getStatus(){
        if (this.status) {
            return "Lamp is on";
        } else {
            return "Lamp is off";
        }
    }
}