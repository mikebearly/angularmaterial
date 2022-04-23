var str1 = "5 + 5";
console.log(str1);
var num1 = 5 + 5;
//null
//undefined
console.log(num1);
//para5 is optional input and it starts with the question mark.
function function1(para1, para2, para3, para4, para5) {
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para4);
    if (typeof para5 !== "undefined") {
        console.log(para5);
    }
    else {
        console.log("Nothing");
    }
}
function1("The String parameter", 67, ["Some", "array", "data"], [4, 5, 6], "the defined para");
function1("The String parameter", 67, ["Some", "array", "data"], [4, 5, 6]);
function function2(para1, para2, para3, para4, para5) {
    if (para5 === void 0) { para5 = "default value"; }
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para4);
    if (typeof para5 !== "undefined") {
        console.log(para5);
    }
    else {
        console.log("Nothing");
    }
}
function2("The String parameter", 67, ["Some", "array", "data"], [4, 5, 6]);
function2("The String parameter", 67, ["Some", "array", "data"], [4, 5, 6], "the called value");
var array1 = ["Hello", "World", 67, true, "Hi"];
console.log(array1);
var array2 = ["Hello world", "again"];
console.log(array2);
var tuple3 = ["some new string", "The 2nd string propert7"];
console.log(tuple3);
var tuple4 = ["some new string", "The 2nd string propert7", 7, true];
console.log(tuple4);
var tuple5;
tuple5 = ["some new string 5", "The 2nd string property7 5"];
console.log(tuple5);
var tuple6;
tuple6 = ["6th tuple 1", "6th tuple 2"];
console.log(tuple6);
var tuple7;
tuple7 = ["6th tuple 1", "6th tuple 2", 95];
tuple7.push("1", "2", 3);
console.log(tuple7);
var employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);
console.log(employee[0][0]);
console.log(employee[0][1]);
var arr = [{ foo: 'bar' }, { foo: 'bar' }, { foo: 'baz' }];
//console.log(arr.find(e => e.foo === 'bar')); // {foo: 'bar'} (first match) -- only in es2015
console.log(arr.some(function (e) { return e.foo === 'bar'; })); // true
console.log(arr.filter(function (e) { return e.foo === 'bar'; })); // [{foo: 'bar'}, {foo: 'bar'}]
// Unions in typescript
var var1 = "hello world";
var1 = "'Some other string'";
console.log(var1);
console.log("The Number one " + var1);
var1 = 87;
console.log(var1);
console.log("The Number one " + var1);
var array3;
array3 = ["Hello", "World"];
console.log(array3);
array3 = [1, 4, 9];
console.log(array3);
function function3(para1) {
    if (typeof para1 == "string") {
        console.log("Para1 is string " + para1);
    }
    else if (typeof para1 == "number") {
        console.log("para1 is number " + para1);
    }
    else {
        console.log("para1 is array");
        console.log(para1);
    }
}
function3("Hello everyone");
function3(67);
function3(["Mike", "Bearly"]);
var person = {
    firstName: "John",
    lastName: "Mark",
    eyeColor: "Brown",
    age: 10,
    greeting: function () {
        return "Hello John";
    }
};
console.log(person);
var person2 = {
    firstName: "Mike",
    lastName: "J",
    eyeColor: "Blue",
    age: "forty two",
    greeting: function () {
        return true;
    }
};
console.log(person2);
var array4;
array4 = [2, 3, 4];
console.log(array4);
var array5;
array5 = ["foo", "bar"];
console.log(array5);
