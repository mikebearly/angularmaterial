//Classes and objects in TypeScript

class Human {
    static static_field:string = "Mike Bearly is from static varaiable";
    private firstName:string;
    protected lastName:string;
    eyeColor:string; // or public eyeColor:string
    hairColor:string; // or public hairColor:string
    age:number; // or public age:number

    //the question mark refers to the optional input.
    constructor(firstNameInitial:string, lastNameInitial:string, eyeColorInitial?:string, hairColorInitial?:string, ageInitial?:number) {
        this.firstName = firstNameInitial;
        this.lastName = lastNameInitial;
        this.eyeColor =  eyeColorInitial;
        this.hairColor = hairColorInitial;
        this.age = ageInitial;
    }

    doAction(){}

    getName(){
        console.log("The name is " + this.firstName + " " + this.lastName);
    }

    getAllData() {
        if(typeof this.age === "undefined") {
            this.age = 0;
        }
        if(typeof this.hairColor === "undefined") {
            this.hairColor = "'not mentioned'";
        }
        console.log("The name is " + this.firstName + " " + this.lastName + ".  The age is: " + this.age + ", The Eye Color is " + this.eyeColor + " and the hair color is " + this.hairColor);
    }
}

var person1 = new Human("Maria", "Danny", "Green");
//person1.firstName  = "Maria";
//person1.lastName = "Danny";
person1.getName();
person1.getAllData();
//person1.firstName = "John";
person1.getName();

var person2 = new Human("Mark", "Jackson", "Blue" , "Brown", 37);
//person2.firstName = "Mark";
//person2.lastName = "Jackson";
//person2.age = 37;
//person2.hairColor = "Brown";
person2.getName();
person2.getAllData();

//constructor in typescript

//Classes and objects in TypeScript

console.log(Human.static_field);

class HumanShortHandInitialization {

    static firstName:string = "Georgia";

    static getName() {
        console.log("Hello, this is getName static method and it is fine.");
    }
    //the question mark refers to the optional input.
    constructor(private firstName:string, protected lastName:string, public eyeColor?:string, public hairColor?:string, public age?:number) {

    }

    doAction(){}

    getName(){
        console.log("The name is " + this.firstName + " " + this.lastName);
    }

    getAllData() {
        if(typeof this.age === "undefined") {
            this.age = 0;
        }
        if(typeof this.hairColor === "undefined") {
            this.hairColor = "'not mentioned'";
        }
        console.log("The name is " + this.firstName + " " + this.lastName + ".  The age is: " + this.age + ", The Eye Color is " + this.eyeColor + " and the hair color is " + this.hairColor);
    }
}

var person3 = new HumanShortHandInitialization("Michael", "Bearly", "Green");
//person1.firstName  = "Maria";
//person1.lastName = "Danny";
person3.getName();
person3.getAllData();
//person1.firstName = "John";
person3.getName();

var person4 = new HumanShortHandInitialization("Justine", "Anto", "Blue" , "Brown", 37);
//person4.firstName = "Mark";
//person4.lastName = "Jackson";
//person4.age = 37;
//person4.hairColor = "Brown";
person4.getName();
person4.getAllData();

console.log(HumanShortHandInitialization.firstName);
HumanShortHandInitialization.getName();

//constructor in typescript


class class1 {
    field1: string;
    constructor(field1:string) {
        this.field1 = field1;
    }
}

class class2 extends class1 {
    class2field1:string;
    constructor(class2field1:string, field1:string) {
        super(field1);
        this.class2field1 = class2field1;
    }
}

var obj1 = new class1("Hello class");
console.log(obj1);

var obj2 = new class2("Class 2 Field 1 data", "Parent class data");
console.log(obj2);