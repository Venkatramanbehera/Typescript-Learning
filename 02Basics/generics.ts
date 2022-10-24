const score: Array<Number> = [];
const names: Array<String> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// short hand property
function identityFour<T>(val: T): T {
    return val;
}

// it is same as any but it is locking the type as one only

identityThree("Chiku")
identityThree(true)

// Generics in real projects
interface Bottle {
    brand: string,
    type: number
}

// if you wants to add your own interface then you need to add it 
// while calling the function
identityFour<Bottle>({ brand: 'as', type: 1 });


function getSearchProducts<T>(products: T[]): T {
    // do some operation
    const myIndex = 3;
    return products[myIndex];
}

// prev example in arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operation
    const myIndex = 3;
    return products[myIndex];
}

// needs to put <T,> comma . it is identified as a generics not a
// Jsx elements in react

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>( valueOne : T, valueTwo: U) : object {
    return {
        valueOne,
        valueTwo
    }
}

anotherFunction(1, {
    connection: '',
    password: '',
    username: ''
});

// Generics in class
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}

export {}