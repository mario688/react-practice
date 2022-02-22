//Primitives: number,string,boolean
//More complex types:arrays,objects
//Function types,parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives
var age = 32;
var userName;
userName = "TEST";
var isGood;
//More complex types
var hobbies;
hobbies = ["xd", "LOL", "12"];
var person;
person = {
    name: "string",
    age: 11
};
var people;
people = [
    {
        name: "Mario",
        age: 32
    },
];
//Type inference
//union types
var course = "jakis tam dlugi string";
course = 321;
//Functions & types
function add(a, b) {
    return a + b;
}
function printOut(value) {
    console.log(value);
}
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
