type User = {
    name: string,
    email: string,
    isActive: boolean
}


function createUser(user: User): User {
    return user;
}

createUser({ email: '', name: '', isActive: false });

type UserDetails = {
    readonly _id: string,
    name: string,
    email: string,
    creditCardDetails?: number
}

let myUser: UserDetails = {
    _id: '16hhjd',
    email: 'venkat@gmail.com',
    name: 'Venkat'
}

// myUser._id = 'dhdhdh'
// error _id is readonly types

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

export {}