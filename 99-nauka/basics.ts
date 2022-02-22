//Primitives: number,string,boolean
//More complex types:arrays,objects
//Function types,parameters

//Primitives
let age: number = 32;

let userName: string;
userName = "TEST";

let isGood: boolean;

//More complex types
let hobbies: string[];

hobbies = ["xd", "LOL", "12"];

//Aliases type
type Person = {
  name: string;
  age: number;
};
let person: Person;

person = {
  name: "string",
  age: 11,
};

let people: Person[];
people = [
  {
    name: "Mario",
    age: 32,
  },
];
//Type inference
//union types
let course: string | number = "jakis tam dlugi string";

course = 321;

//Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
