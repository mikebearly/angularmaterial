var str1:string = "5 + 5";
console.log(str1);

var num1:number = 5 + 5;

//null
//undefined

console.log(num1);
//para5 is optional input and it starts with the question mark.
function function1(para1:string, para2:number, para3:string[], para4:number[], para5?:string) {
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para4);
    if(typeof para5 !== "undefined") {
        console.log(para5);
    } else {
        console.log("Nothing");
    }
}
function1("The String parameter", 67, ["Some", "array", "data"] , [4,5,6], "the defined para");
function1("The String parameter", 67, ["Some", "array", "data"] , [4,5,6]);
function function2(para1:string, para2:number, para3:string[], para4:number[], para5:string = "default value") {
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para4);
    if(typeof para5 !== "undefined") {
        console.log(para5);
    } else {
        console.log("Nothing");
    }
}
function2("The String parameter", 67, ["Some", "array", "data"] , [4,5,6]);
function2("The String parameter", 67, ["Some", "array", "data"] , [4,5,6], "the called value");

var array1 = ["Hello" , "World", 67, true, "Hi"];
console.log(array1);
var array2:string[] = ["Hello world", "again"];
console.log(array2);

var tuple3:[string, string] = ["some new string", "The 2nd string propert7"];
console.log(tuple3);

var tuple4:[string, string, number, boolean] = ["some new string", "The 2nd string propert7", 7 , true];
console.log(tuple4);

var tuple5:string[];
tuple5 = ["some new string 5", "The 2nd string property7 5"];
console.log(tuple5);

var tuple6: [string,string];
tuple6 = ["6th tuple 1", "6th tuple 2"];
console.log(tuple6);

var tuple7: [string,string, number];
tuple7 = ["6th tuple 1", "6th tuple 2" , 95];
tuple7.push("1", "2" , 3);
console.log(tuple7);

var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);
console.log(employee[0][0]);
console.log(employee[0][1]);

const arr = [{foo: 'bar'}, {foo: 'bar'}, {foo: 'baz'}];
//console.log(arr.find(e => e.foo === 'bar')); // {foo: 'bar'} (first match) -- only in es2015
console.log(arr.some(e => e.foo === 'bar')); // true
console.log(arr.filter(e => e.foo === 'bar')); // [{foo: 'bar'}, {foo: 'bar'}]

// Unions in typescript

var var1:string|number = "hello world";
var1 = "'Some other string'";
console.log(var1);
console.log("The Number one " + var1);
var1 = 87;
console.log(var1);
console.log("The Number one " + var1);

var array3:string[]|number[];
array3 = ["Hello", "World"];
console.log(array3);

array3 = [1,4,9];
console.log(array3);

function function3(para1:string|number|string[]) {
    if(typeof para1 == "string") {
        console.log("Para1 is string " + para1);
    }
    else if(typeof para1 == "number") {
        console.log("para1 is number " + para1)
    }
    else {
        console.log("para1 is array");
        console.log(para1);
    }
}
function3("Hello everyone");
function3(67);
function3(["Mike", "Bearly"]);

// interfaces in typescript
interface Theperson {
    firstName: string,
    lastName: string,
    eyeColor: string,
    age: number|string,
    greeting: () => string|boolean
}
var person:Theperson = {
    firstName: "John",
    lastName: "Mark",
    eyeColor: "Brown",
    age: 10,
    greeting: () => { 
        return "Hello John"
    }
}
console.log(person);
var person2:Theperson = {
    firstName: "Mike",
    lastName: "J",
    eyeColor: "Blue",
    age: "forty two",
    greeting: () => { 
        return true
    }
}
console.log(person2);

//Arrays and Interfaces

interface ArrayInterface {
    [index:number]:number
}
var array4:ArrayInterface;
array4 = [2,3,4];
console.log(array4);

interface ArrayInterface2 {
    [index:number]:string
}
var array5:ArrayInterface2;
array5 = ["foo", "bar"];

console.log(array5);
