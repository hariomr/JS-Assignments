class person{
    constructor(name,age){
        this.name = name;
        this.age=  age;
    }

    display(){
        console.log(this.name);
        console.log(this.age);
    }
}

class student extends person{
    constructor(name,age,rollNo){
        super(name,age);
        this.rollNo = rollNo;
    }

    display(){
        super.display();
        console.log(this.rollNo);
    }
}

const student1 = new student("Hariom","21","231324");

student1.display();