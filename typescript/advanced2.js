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
var Client = /** @class */ (function () {
    function Client(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    Client.prototype.clientSecondMethod = function () {
        console.log("This is clientSecondMethod. yayy!");
    };
    return Client;
}());
var clientObject = new Client("Jesus", 33, "Brown");
clientObject.clientSecondMethod();
console.log(clientObject);
//Selecting any one interface
var clientObject2 = new Client("Mark", 32, "Blue");
console.log(clientObject2);
//Selecting any one interface
var clientObject3 = new Client("Mark", 32, "Blue");
clientObject3.clientSecondMethod();
console.log(clientObject3);
//interface extends in classes
var ClassForInterface = /** @class */ (function () {
    function ClassForInterface() {
    }
    return ClassForInterface;
}());
var InterfaceExtendsClasses = /** @class */ (function (_super) {
    __extends(InterfaceExtendsClasses, _super);
    function InterfaceExtendsClasses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InterfaceExtendsClasses;
}(ClassForInterface));
var iecObject = { age: 33, name: "Jesus" };
console.log(iecObject);
//All together
var InterfaceExtendsClassesSecondParent = /** @class */ (function () {
    function InterfaceExtendsClassesSecondParent() {
    }
    return InterfaceExtendsClassesSecondParent;
}());
var ClassForInterfaceSecond = /** @class */ (function () {
    function ClassForInterfaceSecond() {
    }
    return ClassForInterfaceSecond;
}());
var InterfaceExtendsClassesSecond = /** @class */ (function (_super) {
    __extends(InterfaceExtendsClassesSecond, _super);
    function InterfaceExtendsClassesSecond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InterfaceExtendsClassesSecond;
}(ClassForInterfaceSecond));
var iecSecondObject = { age: 50, name: "Joseph" };
console.log(iecSecondObject);
/// Overriding method in classes
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eating = function (food) {
        if (food === void 0) { food = "none"; }
        console.log(this.name + " eats " + food);
    };
    return Person;
}());
var FamilyMan = /** @class */ (function (_super) {
    __extends(FamilyMan, _super);
    function FamilyMan(name) {
        return _super.call(this, name) || this;
    }
    FamilyMan.prototype.eating = function (food) {
        if (food === void 0) { food = "Meals"; }
        console.log("From Family Man");
        _super.prototype.eating.call(this, food);
    };
    return FamilyMan;
}(Person));
var Bachelor = /** @class */ (function (_super) {
    __extends(Bachelor, _super);
    function Bachelor(name) {
        return _super.call(this, name) || this;
    }
    Bachelor.prototype.eating = function (food) {
        if (food === void 0) { food = "Pizza"; }
        console.log("From Bachelor");
        _super.prototype.eating.call(this, food);
    };
    return Bachelor;
}(Person));
var obj1 = new Person("John");
obj1.eating();
var obj2 = new FamilyMan("Mark");
obj2.eating();
var obj3 = new Bachelor("Peter");
obj3.eating();
//Abstract classes in typescript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getEmployeeName = function () {
        console.log("The Employee name is " + this.name);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        _this.salary = salary;
        return _this;
    }
    Developer.prototype.getAge = function () {
        console.log("The age of Employee is " + this.age);
    };
    Developer.prototype.getSalary = function () {
        console.log("The salary of Employee is " + this.salary);
    };
    return Developer;
}(Employee));
var dev1 = new Developer("Martha", 34, 20000);
dev1.getEmployeeName();
dev1.getAge();
dev1.getSalary();
// Read only properties in typescript
var SportsPerson = /** @class */ (function () {
    function SportsPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    return SportsPerson;
}());
var spt = new SportsPerson("Tendulkar", 42);
console.log(spt);
//spt.name = "Virat Kohli"; //it will throw error
//spt.age = 34; //it will throw error
console.log(spt);
var per = {
    name: "Watson",
    age: 37
};
console.log(per);
//per.name = "David";  //this will throw error.
per.age = 43;
console.log(per);
var per2 = {
    name: "Elsa",
    age: 31
};
//per2.name = "John" //it will throw error because of readonly
console.log(per2);
// # Modules in TypeScript
