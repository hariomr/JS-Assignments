    // Object Literals allow us to create the javascript objects, consists of key-value pairs

    const person = {
        first: "Hariom",
        last: "Rathore",
        age:24,

        introduceSelf:function () {
            return this.first
        }
    }

    console.log(person.first);
    console.log(person["age"]);

    person.age = 45;
    person["last"] = "Cratchit";

    console.log(person.first);
    console.log(person["first"],person["last"]);


    person.place = ()=>{
        console.log("Lucknow");
    }
    person.place();

    console.log(person.introduceSelf());

    // Constructor are use to create instances of the object and there method are called when a new object will be created using new object 

    class student{

        constructor(name){
            this.name = name;
            this.self = function(){
                console.log(`Hi! I'm ${this.name}.`);
            }
        }
    }
    const salve = new student("salva");

    console.log(salve.name);


// Js object have a special property called prototype which is either null or reference to another object,let's suppose you have create an object, it's have a property called prototype, then this prototype is also have prototype, this called prototype chaining, this will continue until the prototype is null.

console.log("---------------------- prototype---------------")
const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid

//   Object.getPrototypeOf(myObject) this will give you out about the prototype

// The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

const newObj = Object.create(myObject);
console.log(newObj.city);
newObj.greet();


console.log("---------------Memory Management--------------");
// Memory management in javascript 

// Stack :- Stack is used in primitive types, it creates a copy
// Heap :- Heap is used in non-primitive types, it make changes in the original (creates reference) 
  


// composition

// promotes building systems by combining smaller, reusable components (composition) rather than creating complex hierarchical structures through inheritance


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


// Singleton Design pattern 

// Singleton Design pattern ensures that class has only one instance and provide a global point of access to that instance. 

class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);


// Factory pattern in oops provides an interface or method for creating objects in a super or parent class, but allow subclasses to alter the type of objects being created.


class circle{
    draw(){
        console.log("Draw a circle");
    }
}

class rectangle{
    draw(){
        console.log("Draw a rectangle");
    }
}

class shapeFactory{
    static createShpe(type){
        if(type==="circle"){
            return new circle();
        }
        else if(type==="rectangle"){
            return new Rectangle();
        }else{
            return null;
        }
    }
}


const Circle = shapeFactory.createShpe("circle");
Circle.draw();


// observer pattern is basically behavioral design pattern that defines one-to-many dependency, whenever one state changes the all other states gets depending upon it's nature

// decorator pattern The Decorator Pattern is a structural design pattern that allows you to dynamically add new behavior or functionality to an object without altering its structure or modifying its code.


