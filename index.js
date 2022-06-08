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
//printValue(5 >= '5')

//TODO: less than (<)


//TODO: greater or equal to (>=)


//TODO: less or equal to (<=)



// 5.0 CONTROL FLOW
// TODO: if-else statement
// syntax: if(boolean condition){code goes}else{some other code}
// if(boolean condition){code}else if(other condition){other code} else if(...){}else{}

const wheels = 2

// considering one option
// if(wheels > 4){
//     printValue("This is a truck")
// }

// two options
// if(wheels < 4){
//     printValue("This is a bike")
// }else{
//     printValue("This is not a bike")
// }

//multiple options
if(wheels < 4){
    if(wheels == 3 ){
        printValue("This is a tuk tuk")
    }else if(wheels == 2){
        printValue("This is a bicycle")
    }else{
        printValue("This is a unicycle")
    }
    //printValue("This is a bike")
}else if(wheels == 4){
    printValue("This is a saloon car")
}else if(wheels > 4){
    printValue("This is a truck")
}


//TODO: switch-case (multiple choice alternatives)
// GRADES [A,B,C,D]
const grade = 'a'

// switch syntax
// switch(variable){
//     case option1:
//         code
//         break;
//     case option2:
//         code
//         break
//     default:
//         code
// }


switch(grade){
    case 'A':
        printValue("Well Done")
        break
    case 'B':
        printValue("Good Job")
        break
    case 'C':
        printValue("Improvement required")
        break
    case 'D':
        printValue("See me in my office")
        break
    default:
        printValue("Sorry! You seem lost")
}







