// Explorer Mode
//
// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser
//
// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.
//
// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.
console.log('Explorer Mode: Engaged')
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
// end of Explorer

// Adventure
console.log('Andventure Mode: Engaged')
var spaceship1_clone1 = spaceship1
spaceship1_clone1.topSpeed = '42lyph'
spaceship1_clone1.shipName = 'The Great 42'
spaceship1_clone1.launch()

var spaceship2_clone1 = spaceship2
spaceship2_clone1.topSpeed = '68lyph'
spaceship2_clone1.shipName = 'Finish Experience'
spaceship2_clone1.launch()

// var SpaceshipThree_clone1 = function() { // Didn't need this junk
//     SpaceshipThree.call()
//     // this.topSpeed = speed
//     // this.shipName = name
//
// }
var spaceship3_clone1 = new SpaceshipThree()
spaceship3_clone1.topSpeed = '1000lyph'
spaceship3_clone1.shipName = 'Dorothy'
spaceship3_clone1.launch()

class SpaceshipFour_clone1 extends SpaceshipFour{
    constructor() {
        super()
    }

}
spaceship4_clone1 = new SpaceshipFour_clone1()
spaceship4_clone1.topSpeed = '200lyph'
spaceship4_clone1.shipName = 'Fancy Pants'
spaceship4_clone1.launch()

SpaceshipFour.prototype.landing = setTimeout(function() {
    timeout = setTimeout(message, 3000)
    function message() {
        console.log('Landing Successful')
    }
}, 3000)
spaceship4.launch()
// end Andventure

// Epix
// class Launcher {
//     constructor() {
//
//     }
//     launchShip() {
//
//         var starshipContainer = document.createElement('div')
//         starshipContainer.classList.add('class','container')
//         var starshipCol = document.createElement('div')
//         starshipCol.classList.add('class','col-sm-3')
//         starshipCol.setAttribute('style','border: 1px solid green')
//         // var starshipContainer = document.createElement('div')
//         // starshipContainer.addClass('container')
//
//         // var starship = document.createElement('')
//         document.body.appendChild(starshipContainer)
//         starshipContainer.appendChild(starshipCol)
//
//     }
// }
//
// var launcher = new Launcher()
// launcher.launchShip()
