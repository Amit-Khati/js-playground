//-----------Project2:Random Number Guesser------------

const prompt=require("prompt-sync")();
const target=(Math.round(Math.random()*100));
//if we have to generate a random variable between a range (say 10-100)then we can do it as  10+Math.round(Math.random()*90)
let guesses=0;
while (true){
const guess=parseInt(prompt("Guess the number(0-100):")) //Number(promp("Guess the number(0-100):"))
guesses++
    if (guess===target){
        console.log("CONGRATULATIONS!, You got it correct in",guesses,"guesses.")
        break
    }
    else if(guess<target){
        console.log("Too Small!")
        continue
    }
    else{
        console.log("Too big!")
    }
    
}
