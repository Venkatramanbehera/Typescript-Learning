function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 2;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please Provide Id");
        return
    }
}

// type guard using typeof operator

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }  
    }
}

// when we have a new KeyWord we have to use instanceOf

function logValue(x: Date | string ) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// type declarative

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food";
    } else {
        pet
        return "Bird Food";
    }
}

// discriminated Union

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}

// real use of never type

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}

export {}