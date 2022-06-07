// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.142
// cannot change value of const
// pi = 20
// printValue(pi)

//TODO: ADD redeclarable variable [redclared with the same identifier]
var radius = 5
var radius = 70
//printValue(radius)

//TODO: ADD re-assignable but not redeclarable variable
let age = 18
age = 19
//printValue(age)
// let radius = 20
// printValue(radius)


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num = 18

//TODO: Create a redeclarable variable with a boolean value (true/false)
var rain = false
var economyGrowing = true
// printValue(rain)

//TODO: Create a re-assignable variable with a string value
// string values should be enclosed in either 'value', "value", `value`
let greeting = "hello"
//printValue(greeting)

let firstName = "Joy"
let lastName = "Kemunto"
//printValue(lastName)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let fullName = firstName + ' ' + lastName
// printValue("Name: " + fullName)
// Name: Joy Kemunto


//TODO: Interpolate string (`${}`)
let otherName = `Name: ${fullName}`
let anotherName = `Name:${firstName + ' ' + lastName}`
let yetAnother = `Name: ${firstName} ${lastName}`
//printValue(yetAnother)
//TODO: Convert to uppercase
//printValue(fullName.toUpperCase())


//TODO: Convert to lowercase
let lower = fullName.toLowerCase()
//printValue(lower)


//TODO: Index a specific character
let ind1 = lower.charAt(10)
//printValue(ind1)


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality (===)
//printValue(5 === '5.0')


//TODO: strict inequality (!==)
//printValue(5 !== 5)

//TODO: loose equality (==)
//printValue(5 == '5')

//TODO: loose inequality (!=)
//PRACTICE

//TODO: greater than (>)
printValue(5 >= '5')

//TODO: less than (<)


//TODO: greater or equal to (>=)


//TODO: less or equal to (<=)



// 5.0 CONTROL FLOW
// TODO: if-else statement


//TODO: switch-case





