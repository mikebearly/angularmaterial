interface ClientInterface {
    name: string;
}

interface ClientInterfaceSecond {
    age: number
    clientSecondMethod();
}

class Client implements ClientInterface, ClientInterfaceSecond {

    constructor(public name:string, public age:number, public hairColor:string) {

    }

    clientSecondMethod() {
        console.log("This is clientSecondMethod. yayy!")
    }
}

var clientObject = new Client("Jesus", 33, "Brown");
clientObject.clientSecondMethod();
console.log(clientObject);

//Selecting any one interface
var clientObject2:ClientInterface = new Client("Mark", 32, "Blue");
console.log(clientObject2);

//Selecting any one interface
var clientObject3:ClientInterfaceSecond = new Client("Mark", 32, "Blue");
clientObject3.clientSecondMethod();
console.log(clientObject3);


//interface extends in classes

class ClassForInterface {
    name: string
}

class InterfaceExtendsClasses extends ClassForInterface {
    age: number;
}

var iecObject: InterfaceExtendsClasses = { age: 33, name: "Jesus"};

console.log(iecObject);

//All together

class InterfaceExtendsClassesSecondParent {
    name: string
}

class ClassForInterfaceSecond implements InterfaceExtendsClassesSecondParent{
    name: string;
}

class InterfaceExtendsClassesSecond extends ClassForInterfaceSecond {
    age: number;
}

var iecSecondObject: InterfaceExtendsClassesSecond = { age: 50, name: "Joseph"};

console.log(iecSecondObject);

/// Overriding method in classes

class Person {
    constructor(public name: string) {
    }
    eating(food:string = "none") {
        console.log(this.name + " eats " + food);
    }
}

class FamilyMan extends Person {
    constructor(name:string) {
        super(name);
    }
    eating(food:string = "Meals"):void {
        console.log("From Family Man");
        super.eating(food);
    }
}

class Bachelor extends Person {
    constructor(name:string) {
        super(name);
    }
    eating(food: string = "Pizza"):void {
        console.log("From Bachelor");
        super.eating(food);
    }
}

var obj1 = new Person("John");
obj1.eating();
var obj2 = new FamilyMan("Mark");
obj2.eating();
var obj3 = new Bachelor("Peter");
obj3.eating();


//Abstract classes in typescript

abstract class Employee {
    name: string;
    abstract salary:number;
    constructor(name:string) {
        this.name = name;
    }

    getEmployeeName() {
        console.log("The Employee name is " + this.name);
    }

    abstract getAge();

}

class Developer extends Employee {
    age:number;
    salary:number;
    constructor(name: string, age: number, salary: number) {
        super(name);
        this.age = age;
        this.salary = salary;
    }

    getAge() {
        console.log("The age of Employee is " + this.age );
    }

    getSalary() {
        console.log("The salary of Employee is " + this.salary);
    }


}

var dev1 = new Developer("Martha", 34, 20000);
dev1.getEmployeeName();
dev1.getAge();
dev1.getSalary();

// Read only properties in typescript

class SportsPerson {

    readonly name: string;
    readonly age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

}

var spt = new SportsPerson("Tendulkar", 42);
console.log(spt);
//spt.name = "Virat Kohli"; //it will throw error
//spt.age = 34; //it will throw error
console.log(spt);

// Read Only with interfaces
interface InPerson {
    readonly name: string;
    age: number;
}

var per: InPerson = {
    name: "Watson",
    age: 37
}

console.log(per);

//per.name = "David";  //this will throw error.
per.age = 43;

console.log(per);

var per2: Readonly<InPerson> = {
    name: "Elsa",
    age: 31
}
//per2.name = "John" //it will throw error because of readonly
console.log(per2);

// # Modules in TypeScript

//import { navHeader } from "./navbar";
//console.log(navHeader);

// main.ts and navbar.ts

// tsc --module amd main.ts

//compiling modules in typescript.

