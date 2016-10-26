// Explorer Mode
//
// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser
//
// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.
//
// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.

var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.shipName + ` launching to infinity and beyond at ` + this.topSpeed)
    }

}
spaceship1.launch()

var spaceship2 = new Object()
spaceship2.topSpeed = '4lyph'
spaceship2.shipName = 'Firefly'
spaceship2.launch = function() {
    console.log(spaceship2.shipName + ` launching to infinity and beyond at ` + spaceship2.topSpeed)
}
spaceship2.launch()

var SpaceshipThree = function() {
    this.topSpeed = '8lyph',
    this.shipName = 'Deathstar'
    this.launch = function() {
        console.log(this.shipName + ` launching to infinity and beyond at ` + this.topSpeed)
    }
}
var spaceship3 = new SpaceshipThree()

spaceship3.launch()

class SpaceshipFour {
    constructor() {
        this.topSpeed = '100lyph',
        this.shipName = 'SKYSCREAMER'
    }
    launch() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed)
        // console.log(`${shipName} launching to infinity and beyond at ${topSpeed}`)
    }
}


var spaceship4 = new SpaceshipFour()

spaceship4.launch()
