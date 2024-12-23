// Encapsulation is binding of data and methods in a single unit that operate on the data

class car{
    #name; // private property  
    constructor(name){
        this.#name = name;
    }
    getter(){
        console.log(this.#name);
    }

    setColor(color){
        this.color = color;
        console.log(this.color);
    }
}
const myCar = new car("maruti");
myCar.getter();
myCar.setColor("blue");


// inheritence in js 

// class inheritence is a way to inherit the properties of one class into another class using the extends keyword


class bike extends car{
    getPrice(price){
        console.log(price);
    }
}

const myBike = new bike("Honda");
myBike.setColor("green");
myBike.getter();

// Abstraction involves hiding the implementation details and exposing only the functionality to the user.

class Vehicle {
    startEngine() {
        console.log("Engine started");
    }
    stopEngine() {
        console.log("Engine stopped");
    }
}

const mycar = new Vehicle();
mycar.startEngine(); // Details of how the engine starts are abstracted

// Polymorphism allows methods in different classes to have the same name but behave differently based on the context.


class shape{
    draw(){
        console.log("drwaing a shape");
    }
}

class circle extends shape{
    draw(){
        console.log("drwaing a circle");
    }
}

class rectangle extends shape{
    draw(){
        console.log("drwaing a rectangle");
    }
}


const Shapes = [new circle, new rectangle];
Shapes.forEach(Shape => Shape.draw());




// Mixins is a way to add reusable functionality to the classes without using inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const CanFly = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};

const CanSwim = {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
};


Object.assign(Animal.prototype, CanFly, CanSwim);

// Object.assign(target, ...sources) is a method that copies properties from one or more source objects (sources) into a target object (target).

// This means the properties and methods from the source objects will be added to the prototype of the Animal class.
const bird = new Animal("Bird");
bird.fly();
bird.swim();

console.log(Animal.prototype);


// The super keyword is used to call the constructor or methods of the parent class in JavaScript, using super keyword


// Composition Function is a technique in JavaScript that allows developers to combine multiple functions into a single, more powerful function


const barkingBehaviour = {
    speak(){
        console.log("bark!");
    }
}

const walkingBehaviour = {
    walk(){
        console.log("walk!");
    }
}

class Dog{
    constructor(){
        this.behaviors = [barkingBehaviour,walkingBehaviour];
        console.log(this.behaviors);
    }

    performAction(action) {
        const behavior = this.behaviors.find(b => b[action]);
        if (behavior) {
          behavior[action]();
        } else {
          console.log(`Action "${action}" not found.`);
        }
    }
}

const myDog = new Dog();
myDog.performAction('speak'); 
myDog.performAction('walk');

