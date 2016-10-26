// Literal approach
var food = {
    pizza: 'Yummy',
    edible: true
}

console.log(food)
// Noting how to incorrectly clone an objectsvar
var pizza3 = food
pizza3.edible = false
console.log(pizza3)
// way around this cloning
var pizza4 = Object.create(food)
pizza4.edible = false
console.log(pizza4)
// New objects
var food = new Object()
food.edible = true

console.log(food)


// Constructor Function: self aware and have state
var Food = function() { // Object Constructor functions are capitalized
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
    }
}

var pizza1 = new Food() // This is an instance of the master template constructor template Food()
pizza1.type = 'Taco Pizza'
pizza1.eat()
pizza1.eat()
pizza1.eat()

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
pizza2.eat()
console.log(pizza1)
console.log(pizza2)

// Modern Way of creating objects
// using 'this' means utilizing state
class Vehicle {
    constructor(make, model) {
        this.make = make// these variables don't use var because they are instance references that only are used when the instance of this object are used
        this.model = model //
        this.year
        this.setYear = this.setYear.bind(this) // alternate way of setting year, see setYear below as referenced with bind
    }

    // anytime there is a function created for "set", then there will be a "bind" also created somewhere to use it
    setYear(year) { // Alternate way of setting year
        this.year = year + ' year'
    }
    object(speed) {

        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle { // this inherits all from Vehicle and allows to modify in new template
    constructor(model) { // constructor is a magical function that runs when you create a new object class when being made.
        super('Toyota', model) // calls the parent.  calling super() gets everything from the inherited parent before configuring its local stuff.
        // this.make = 'Toyota' // passing 'Toyota' to super replaced this line.
        console.log('Now making a new Toyota. This is running in the constructor at time of new object class being created')
    }
}

// var $4Runner = new Vehicle('Toyota','4Runner')
var $4Runner = new Toyota('4Runner')
$4Runner.setYear(2006) // This way can transform data from Number to String if needed.  Adding " year" to the set function converts the data to string
//$4Runner.year = 2006 // another way to set year.  This way sets as set without modifying the data as with above.
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)

Vehicle.prototype.doors = 4

console.log(prius.doors)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Athlete extends Person {
    constructor(sport, team) {
        super('James', '29')
        this.sport = sport
        this.team = team
        this.skill = this.setSkill.bind(this)
    }
    setSkill(skill) {
        this.skill = skill
    }
}
class BaseballPlayer extends Athlete{
    constructor(throwingHand, position) {
        super('baseball','Cub')
        this.throwingHand = throwingHand
        this.position = position
        this.nickName = this.setNickName.bind(this)
    }
    setNickName(name) {
        this.nickName = name
    }
}

// var human = new Person('Joel','36')
// console.log(human)

// var athlete = new Athlete('baseball', 'Cubs')
// // athlete.age = 34
// athlete.setSkill('punishing that ball')
// // athlete.name = 'Jones'
// console.log(athlete)

var allStar = new BaseballPlayer('lefty','short-stop')
allStar.skill('pushingLittleDaisies')
allStar.setNickName('Scoots')
allStar.name = 'Jewels'
console.log(allStar)
