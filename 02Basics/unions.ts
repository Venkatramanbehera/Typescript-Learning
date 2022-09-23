// Unions --> '|'

let score: number | string = 40;

score = 55
score = '99'


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let hitesh: User | Admin = { name: 'sdsds', id: 6566 }

hitesh = { username: 'hd', id: 6666 }


function getDbId(id: number | string) {
    
    console.log(`DB id is ${id}`)
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    id.toString().toUpperCase();
}

getDbId(1);
getDbId("2");


// Array
// number
const data: number[] = [1, 2, 3];
// string
const data2: string[] = ["1", "2", "3"];
// both 
const data3: (string | number)[] = ["1", "2", "3", 4];


// value 

let pi: 3.14 = 3.14;
// pi = 3.67; error

let seatAllotment: "asile" | "middle" | "window";
seatAllotment = 'asile';
// seatAllotment = "crew"; error

export {}