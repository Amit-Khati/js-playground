//---------------Project1: Quiz Game------------------
const prompt = require('prompt-sync')();
console.log("Welcome To the OOPS Quiz!")
let correctAnswer=0
const totalQuestions=6
const answer1=prompt("What is the blueprint of an object called?")
const correctAnswer1="class"
if (answer1.toLowerCase()===correctAnswer1){
    console.log("You got it correct!")
    correctAnswer++
}
else{
    console.log("You got it wrong...")
}

const answer2=prompt("What is the instance of a class called?")
const correctAnswer2="object"
if (answer2.toLowerCase()===correctAnswer2){
    console.log("You got it correct!")
    correctAnswer++
}
else{
    console.log("You got it wrong...")
}
const answer3=prompt("What is the wrapping  of data and methods into a single unit called?")
const correctAnswer3="encapsulation"
if(answer3.toLowerCase()===correctAnswer3){
    console.log("You got it correct.")
    correctAnswer++
}
else{
    console.log("You got it wrong...")
}
const answer4=prompt("Which feature of OOPS hides the implementation details?")
const correctAnswer4="abstraction"
if (answer4.toLowerCase()===correctAnswer4){
    console.log("You got it correct!")
    correctAnswer++
}
else{
    console.log("You got it wrong....")
}
const answer5=prompt("Which feature of OOPS is used to acquire the properties of another class?")
const correctAnswer5="inheritance"
if (answer5.toLowerCase()===correctAnswer5){
    console.log("You got it correct!")
    correctAnswer++
}
else{
    console.log("You got it wrong....")
}
const answer6=prompt("What does same function name, different forms refers to in OOPS?")
const correctAnswer6="polymorphism"
if (answer6.toLowerCase()===correctAnswer6){
    console.log("You got it correct!")
    correctAnswer++
}
else{
    console.log("You got it wrong.")
}
percentage=Math.round((correctAnswer/totalQuestions)*100)
console.log("You got",correctAnswer,"answers correct.")
console.log("You percantage score is:"+percentage+"%.")
