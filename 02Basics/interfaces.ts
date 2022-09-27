interface User {
    readonly dbId: number,
    name: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    endTrail(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken : string
}

// Its called as reopening of the interface [IMP]

interface Admin extends User {
    role : 'admin' | 'ta' | 'student'
}

// we can extends the interface but not in case of type

const venkat: Admin = {
    name: 'test@gmail.com',
    userId: 12,
    dbId: 66,
    role: 'admin',
    githubToken: 'fdfdfdf',
    endTrail: () => {
        return 'Trail End'
    },
    startTrail: () => {
        return 'Trail Started'
    },
    getCoupon: (name: 'Venkat', off: 10) => {
        return 10
    }
}

export {}