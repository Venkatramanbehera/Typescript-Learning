const User = {
    name: "Venkat",
    email: "venkatramanbehera1@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {
    

}

// giving the error/complain
createUser({
    name: 'reju',
    isPaid: false,
    email: 'a@chiku.com'
});

var newUser = {
    name: 'reju',
    isPaid: false,
    email: 'a@chiku.com'
}

// not compalaining [Weired Behaviour]
createUser(newUser)

// returning a object
function createCourse(): {name : string, price: number} {
    return {
        name: 'React JS',
        price: 999
    }
}

export {}