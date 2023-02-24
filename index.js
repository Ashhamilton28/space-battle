

//chatbot with initial dialogue

//prompt for name
let playerName = prompt("Hello! what is your name?!")
alert(`I'm glad your here ${playerName}! We have been invaded by aliens and we need you to help us!`)
//ask player to help defeat aliens to start game
window.confirm(`Will you help us defeat the aliens ${playerName}?`)



//using constructors to build alien ships
// formula to get a random whole number between a range is Math.floor(Math.random() * (maximum -minimum +1)) + minimum;
class alienShip {
    constructor(hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * 6 - 3 + 1) + 3
        this.firepower = Math.floor(Math.random() * 4 - 2 + 1) + 2
        this.accuracy = (Math.random() * .6 - .8 + 1) + .8

    }
    attack() {
        console.log(`${playerName} has been attacked!`)
    }
}


const alienShip1 = new alienShip
const alienShip2 = new alienShip
const alienShip3 = new alienShip
const alienShip4 = new alienShip
const alienShip5 = new alienShip
const alienShip6 = new alienShip

console.log(alienShip1.attack)

//The player spaceship
class ussAssembly {
    constructor(hull, firepower, accuracy) {
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
    }
    attackAliens(){
        console.log(`${playerName} has attacked the aliens!`)
    }
}
const ussAssembly1 = new ussAssembly
console.log(ussAssembly1.attackAliens)

