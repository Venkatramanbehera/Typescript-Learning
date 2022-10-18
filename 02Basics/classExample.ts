// classical version
class User {
    email: string
    name: string
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
        this.city = this.city;
    }
}

// handy version
class UserHandy {
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string, private userId: string) {
        
    }
}

const Venkat = new User('venkatramanbehera1@gmail.com', 'Venkat');
const VenkatHandy = new UserHandy('venkatramanbehera1@gmail.com', 'Venkat', '12df');
// Venkat.city = 'bbsr' - Error because readonly
// if we can not access aswell then we can use private keyword
// Venkat.city 

// 

export {}