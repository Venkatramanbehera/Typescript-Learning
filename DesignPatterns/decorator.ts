// abstract class can not be instantiate
abstract class Car {

    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;

}

// to instantiate the car class we need to extend and create a class
class ModelS extends Car{
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car{
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car; 

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class CameraAttachment extends CarOptions {
    decoratedCar: Car;
    
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Attached Camera on it.'
    }
    public cost(): number {
        return this.decoratedCar.cost() + 2000;
    }
    
}

var model = new ModelS();
var teslaX = new EnhancedAutoPilot(model);
console.log('TeslaX', teslaX.cost())
console.log('TeslaX', teslaX.getDescription())