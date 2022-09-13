function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {

}

addTwo(5);
getUpper("a");
signUpUser("chiku","chiku@gmail.com",false)
logInUser("chiku", "chiku@gmail.com")


const getHello = (s: string) : string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => `hero is ${hero}`)

function consoleError(errmsg): void {
    console.log(errmsg);
}

function handleError(errmsg): never {
    throw new Error(errmsg);
}

export {}