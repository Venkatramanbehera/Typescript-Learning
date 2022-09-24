interface User {
    readonly dbId: number,
    name: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    endTrail(): string,
    getCoupon(couponName: string, value: number): number
}

const venkat: User = {
    name: 'test@gmail.com',
    userId: 12,
    dbId: 66,
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