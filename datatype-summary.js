// Primitve

// 7 types : string, Number, Boolean, null, undefined, Symbol,BigInt

const name = "Juned"
const num = 22
const isLoggIn = true
const temp = null
let state;
let value1 = Symbol("123");
let value2 = Symbol("123");
// console.log( value1 === value2);

const bigNumber = 29839084908093893802938n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["krish", "shaktiman", "superman", "batman"]

const student = {
    name : "juned",
    age : "23",
    city : "Mumbai"
}

let myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction);