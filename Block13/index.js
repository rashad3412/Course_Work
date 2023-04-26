/** * Use if statments to write out code */
/** We have 6 if statments that will be console.log*/

/** 1st problem, Use an if statment to console.log true for the let "I am a string" */
console.log("--------------------------------------------------")
console.log("******* Is truthy Project *******")
console.log("--------------------------------------------------")
let iAmAString = true
if (iAmAString){
    console.log(iAmAString)
    console.log("--------------------------------------------------")
}

/** 2nd problem, Use an if statment to console.log false "the boolean value false is falsy"  */

let term = false
if (term){
    console.log("incorrect boolean type.");
} else {
    console.log("The boolean value false is falsy.");
    console.log(Boolean(term))
    console.log("--------------------------------------------------")
}

//** 3rd problem, Use an if statement to console.log "the null value is falsy" */

let number = null;
if (number === null){
    console.log("The null value is falsy.");
    console.log(Boolean(number))
    console.log("--------------------------------------------------")
}

//** 4th problem,Use an if statement to console.log "the undefined is falsy"*/

let name = "Rashad";
name = undefined;
if (name === undefined){
    console.log(" The undefined is falsy.")
    console.log(Boolean(number))
    console.log("--------------------------------------------------")
}

//** 5th problem, Use an if statment to console.log "the number 0 is falsy(the only falsy number)" */
let zero = 0;
if (zero === 0){
    console.log("The number 0 is falsy(the only falsy number.")
    console.log(Boolean(number))
    console.log("--------------------------------------------------")
}

//** 6th problem, Use an if statement to console.log " The empty string is falsy(the only flasy string)" */

let empty = ""
if (empty === ""){
    console.log("The empty string is falsy(the only falsy string")
    console.log(Boolean(empty))
    console.log("--------------------------------------------------")
}

// ** Number line project */
console.log("******* Number Line Project *******")
console.log("--------------------------------------------------")
// ** Using if/else if/ and else statements for our logic */
// ** Using arithmetic math operators < > =  */
// ** You are taking the sum of two numbers and print the output of the reult using if statements */

// ** problem 1 we are adding 50 + 51 to get 101 and to console.log 101 is greater than 100 using if/else statements.  */

let num = 50 + 51;
if (num > 100){
    console.log("101 is greater than 100.");
} else if (num < 100){
    console.log("101 is not less than 100.");
} else{
    console.log("error occured adding your logic.");
}

//** Problem 2 we are adding 99 + -2 to get 97 and console.log 97 is greater than 0 using if/else stamtents. */

let num2 = 99 + -2;
if( num2 > 0){
    console.log("97 is greater than 0.");
} else if( num2 < 0){
    console.log("0 is less than 97.");
} else{
    console.log("error occured adding your logic");
}

//** Problem 3 we are adding 500 + -500 and console.log - is equal to 0 using if/else statements*/
let num3 = 500 + -500
if (num3 === 0){
    console.log("0 is equal to 0.");
} else if(num3 > 0){
    console.log("incorrect addition.");
} else{
    console.log("error occured adding your logic");
}

//** Problem 4 we are adding -1000 + 0 and console.log -1000 is a negative number using if/else statements. */
let num4 = -1000 + 0;
if (num4 === -1000){
    console.log("-1000 is a negative number.")
}else if (num4 > 0){
    console.log("incorrect addition")
}else{
    console.log("error occured adding your logic");
}

//** Problem 5 we are adding -5 + 0 and console.log -5 is a negative number using if/else statements. */
let num5 = -5 + 0;
if (num5 === -5){
    console.log("-5 is a negative number.")
}else if (num5 > 0){
    console.log("incorrect addition")
}else{
    console.log("error occured adding your logic");
}

console.log("--------------------------------------------------")
console.log("******* Greater Than 5 Project *******")
console.log("--------------------------------------------------")

//** Using if/else statements to console.log if 5 is greater than,less than or equal to 5. */
//** Each if/else statments should have a math comparison using >,<,= */
//** Each console.log should print either true or false. */
//** You are taking each number and using if/else statements to compare them to 5 to print true or false */
 
let number1 = 5
let number2 = 6

if (number1 === 5){
    console.log(Boolean(number1))
}else if (number2 > 5){
    console.log(Boolean(number2))
}else{
    console.log("error occured in math problem.")
}


let number3 = 10
let number4 = 11

if (num3 === 5){
    console.log(Boolean(number3))
}else if (num4 > 5){
    console.log(Boolean(number4))
}else{
    console.log(false)
}


let number5 = 0
let number6 = 0

if (number5 === 5){
    console.log(Boolean(number5))
}else if (number6 > 5){
    console.log(Boolean(number6))
}else{
    console.log(false)
}
let number7 = 1000
let number8 = -1000

if (number7 === 5){
    console.log(Boolean(number7))
}else if (number8 > 5){
    console.log(Boolean(number8))
}else{
    console.log(false)
}
let number9 = 6
let number10 = 4

if (number9 === 5){
    console.log(Boolean(number9))
}else if (number10 > 5){
    console.log(Boolean(number10))
}else{
    console.log(false)
}
let number11 = 5
let number12 = 5

if (number11 === 5){
    console.log(Boolean(number1))
}else if (number12 > 5){
    console.log(Boolean(number12))
}else{
    console.log(false)
}

console.log("--------------------------------------------------")
console.log("******* Pair and Compare Project *******")
console.log("--------------------------------------------------")

//** Using if/else statements to compare two of two values */
//** Will use stricly operators to see if the pairs are truthy === or !==*/

let param1A = "cat"
let param1B = "cat"

if (param1A === param1B){
    console.log(true)
}else{
    console.log(false)
}

param1A = 6
param1B = "6"

if (param1A === param1B){
    console.log(false)
}else{
    console.log(true)
}

param1A = "five"
param1B = 5

if (param1A === param1B){
    console.log()
}else{
    console.log(false)
}

param1A = "dog"
param1B = "dawg"

if (param1A === param1B){
    console.log(true)
}else{
    console.log(false)
}

