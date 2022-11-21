// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.142;
printValue(pi);
//pi = 3.14159;

//TODO: ADD redeclarable variable
var score = 100;
var score = 90;
score = 99;
printValue(score);

//TODO: ADD re-assignable but not redeclarable variable
let age = 17;
printValue(age);
//var age = 19;

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const year = 2022;
const y = 44;


//TODO: Create a redeclarable variable with a boolean value
var isEligible = false;
printValue(isEligible);

//TODO: Create a re-assignable variable with a string value
let name = "me";
printValue(name);


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let string ="My age is";
string = "My age is" + " five"
printValue(string);
const message ='I am in phase 1.';
const time = '12:00 PM';
const full = message + time;
printValue(full);

//TODO: Interpolate string (`${}`)
const other =  `Hello, ${message} And the time is ${time}`;
printValue(other);

//TODO: Convert to uppercase
const otherVariable = other.toUpperCase();
printValue(otherVariable);

//TODO: Convert to lowercase
printValue(other.toLowerCase());


//TODO: Index a specific character
printValue("ASKITHYBEDGAYEGEHHE".charAt(0,5,10))


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality


//TODO: strict inequality


//TODO: equality


//TODO: inequality


//TODO: greater than


//TODO: less than


//TODO: greater or equal to


//TODO: less or equal to



// 5.0 CONTROL FLOW
// TODO: if-else statement


//TODO: switch-case






