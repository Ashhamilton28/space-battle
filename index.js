const player = "Asha"

//using constructors to build alien ships


// formula to get a random whole number between a range is Math.floor(Math.random() * (maximum -minimum +1)) + minimum;
class alienShip {
    constructor(hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * 6 - 3 + 1) + 3
        this.firepower = Math.floor(Math.random() * 4 - 2 + 1) + 2
        this.accuracy = (Math.random() * .6 - .8 + 1) + .8

    }
    attack(){
        console.log("Asha has been attacked")
    }
}


const alienShip1 = new alienShip
const alienShip2 = new alienShip
const alienShip3 = new alienShip
const alienShip4 = new alienShip
const alienShip5 = new alienShip
const alienShip6 = new alienShip

console.log(alienShip1.attack)


