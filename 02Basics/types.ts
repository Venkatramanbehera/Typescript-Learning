type User = {
    name: string,
    email: string,
    isActive: boolean
}


function createUser(user: User): User {
    return user;
}

createUser({email: '', name: '', isActive: false});

export {}