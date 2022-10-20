abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    
    abstract getSepia(): void
    getReelTime(): number{
        // calculation
        return 8;
    }
}

/**
 * we can not create an object for abstract class.
 * if we wants to create a object then we need to inherit the class and create the object for newly created class
 */

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const absc = new Instagram("test", "test2", 1);

absc.getReelTime();

export {}