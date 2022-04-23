//Classes and objects in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    //the question mark refers to the optional input.
    function Human(firstNameInitial, lastNameInitial, eyeColorInitial, hairColorInitial, ageInitial) {
        this.firstName = firstNameInitial;
        this.lastName = lastNameInitial;
        this.eyeColor = eyeColorInitial;
        this.hairColor = hairColorInitial;
        this.age = ageInitial;
    }
    Human.prototype.doAction = function () { };
    Human.prototype.getName = function () {
        console.log("The name is " + this.firstName + " " + this.lastName);
    };
    Human.prototype.getAllData = function () {
        if (typeof this.age === "undefined") {
            this.age = 0;
        }
        if (typeof this.hairColor === "undefined") {
            this.hairColor = "'not mentioned'";
        }
        console.log("The name is " + this.firstName + " " + this.lastName + ".  The age is: " + this.age + ", The Eye Color is " + this.eyeColor + " and the hair color is " + this.hairColor);
    };
    Human.static_field = "Mike Bearly is from static varaiable";
    return Human;
}());
var person1 = new Human("Maria", "Danny", "Green");
//person1.firstName  = "Maria";
//person1.lastName = "Danny";
person1.getName();
person1.getAllData();
//person1.firstName = "John";
person1.getName();
var person2 = new Human("Mark", "Jackson", "Blue", "Brown", 37);
//person2.firstName = "Mark";
//person2.lastName = "Jackson";
//person2.age = 37;
//person2.hairColor = "Brown";
person2.getName();
person2.getAllData();
//constructor in typescript
//Classes and objects in TypeScript
console.log(Human.static_field);
var HumanShortHandInitialization = /** @class */ (function () {
    //the question mark refers to the optional input.
    function HumanShortHandInitialization(firstName, lastName, eyeColor, hairColor, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
    HumanShortHandInitialization.getName = function () {
        console.log("Hello, this is getName static method and it is fine.");
    };
    HumanShortHandInitialization.prototype.doAction = function () { };
    HumanShortHandInitialization.prototype.getName = function () {
        console.log("The name is " + this.firstName + " " + this.lastName);
    };
    HumanShortHandInitialization.prototype.getAllData = function () {
        if (typeof this.age === "undefined") {
            this.age = 0;
        }
        if (typeof this.hairColor === "undefined") {
            this.hairColor = "'not mentioned'";
        }
        console.log("The name is " + this.firstName + " " + this.lastName + ".  The age is: " + this.age + ", The Eye Color is " + this.eyeColor + " and the hair color is " + this.hairColor);
    };
    HumanShortHandInitialization.firstName = "Georgia";
    return HumanShortHandInitialization;
}());
var person3 = new HumanShortHandInitialization("Michael", "Bearly", "Green");
//person1.firstName  = "Maria";
//person1.lastName = "Danny";
person3.getName();
person3.getAllData();
//person1.firstName = "John";
person3.getName();
var person4 = new HumanShortHandInitialization("Justine", "Anto", "Blue", "Brown", 37);
//person2.firstName = "Mark";
//person2.lastName = "Jackson";
//person2.age = 37;
//person2.hairColor = "Brown";
person3.getName();
person3.getAllData();
console.log(HumanShortHandInitialization.firstName);
HumanShortHandInitialization.getName();
//constructor in typescript
var class1 = /** @class */ (function () {
    function class1(field1) {
        this.field1 = field1;
    }
    return class1;
}());
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2(class2field1, field1) {
        var _this = _super.call(this, field1) || this;
        _this.class2field1 = class2field1;
        return _this;
    }
    return class2;
}(class1));
var obj1 = new class1("Hello class");
console.log(obj1);
var obj2 = new class2("Class 2 Field 1 data", "Parent class data");
console.log(obj2);
