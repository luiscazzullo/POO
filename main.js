//Clase calculadora -> Calculadora científica
//Clase casa -> Clase edificio

class Calculator {
    constructor() {
        this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.signs = ['+', '-', '/', '*', '%'];
    }
    sum() {
        let s = 0;
        for (let i = 0; i < arguments.length; i++) {
            s = s + arguments[i]
        }
        return s;
    }
    substraction() {
        for (let i = 0; i < arguments.length; i++) {
            s = s - arguments[i]
        }
        return s;
    }
    multiplication(a, b) {
        let s = 0;
        for (let i = 0; i < arguments.length; i++) {
            arguments[i] * arguments[i]
        }
        return s;
    }
    division(a, b) {
        let s = 0;
        for (let i = 0; i < arguments.length; i++) {
            s = s / arguments[i]
        }
        return s;
    }
}
const a = new Calculator();
console.log(a.numbers)
console.log(a.multiplication(10, 5))

class Cientific extends Calculator {
    constructor() {
        super();
        this.signs.push('log', 'exp', 'sin', 'cos');
    }
    log(a, b) {
       return Math.log(a) / Math.log(b);
    }
    pow(a, b) {
        return Math.pow(a, b);
    }
    sin(a) {
        return Math.sin(a)
    }
    cos(a) {
        return Math.cos(a);
    }
}
const b = new Cientific()
console.log(b.signs)

const c = new Calculator()
console.log(c.sum(50, 200, 1000, 896))
const d = new Cientific()
console.log(d.log(2, 4))
console.log(d.pow(7,2))

///////////////////////////////////

class House {
    constructor(doors, windows, color, rooms) {
        this.doors = doors;
        this.windows = windows;
        this.color = color;
        this.rooms = rooms;
    }
    openDoor() {
        return 'Bienvenido amigo'

    }
    getColor() {
        return `la casa es ${this.color}`
    }
}

const e = new House(1,3,'blanca',4);
console.log(e.getColor());

class Building extends House {
    constructor(doors, windows, color, rooms, floors) {
        super(doors, windows, color, rooms);
        this.floors = floors;
    }
    inCaseOfFire(){
        return `Salte por cualquiera de las ${this.windows} ventanas`
    }
    stopElevator() {
        return `Usted está en el piso ${this.floors}`
    }
}
const f = new Building(2,3,'roja', 4, 8);
console.log(f.stopElevator());