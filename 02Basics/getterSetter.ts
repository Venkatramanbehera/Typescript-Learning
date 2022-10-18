class UserHandy {
    private _courseCount = 1;
    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string
    ) {
        
    }

    private deleteToken() {
        console.log('Token Deleted');
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // getter
    get courseCount(): number {
        return this._courseCount
    }

    // setter 
    // setter don't have any return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

export {}