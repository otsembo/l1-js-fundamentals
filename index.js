// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.142
printValue(pi)



//TODO: ADD redeclarable variable
var score = 100
var score = 48
score = 99
printValue(score)

//TODO: ADD re-assignable but not redeclarable variable
let age = 17
printValue(age) // 17
// var age = 19


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const y = 44

//TODO: Create a redeclarable variable with a boolean value
var isEligible = false

//TODO: Create a re-assignable variable with a string value
let isEligibleToday = 'mine'

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const message = 'I am in Phase 1.'
const time = "12:00 PM"

const full = message + time
printValue(full) 

//TODO: Interpolate string (`${}`)
const other = `Hello, ${message} and the time is ${time}`
printValue(other)

//TODO: Convert to uppercase
const otherVariable = other.toUpperCase()
printValue(otherVariable)

//TODO: Convert to lowercase
printValue(other.toLowerCase())

//TODO: Index a specific character
printValue("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(0, 2, 9))

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






