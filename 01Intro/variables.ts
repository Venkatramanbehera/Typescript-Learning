let greetings: string = 'Hello';
greetings.length;
console.log(greetings);

// number
// we can mention number as type but not compulsory because typescript is 
// smart enough to detect number .
let userId: number = 334455;


// boolean
let isLoggedIn: boolean = false;

// any
let hero : string;

function getHero() {
    return 'thor';
}

hero = getHero();

export {}