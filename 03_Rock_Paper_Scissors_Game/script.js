//-----------Project3:Rock Paper Scissors game------------
const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;
while (true) {
    const playerChoice = (prompt("Enter rock, paper or scissors(or q to quit):")).toLowerCase();
    if (playerChoice == 'q') {
        break;
    }
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("Please enter a valid choice!");
        continue;
    }

    const choices = ["rock", "paper", "scissors"];
    //               0        1          2
    const randomIndex = Math.floor(Math.random() * 3); //It will return numbers from 0 to 2 i.e.:0,1,2
    const computerChoice = choices[randomIndex];
    console.log("The computer chose:", computerChoice)

    if (computerChoice === playerChoice) {
        console.log("Draw");
        ties++;
    } else if ((playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log("You won!");
        wins++;
    }

    //long method to do the same :)
    //else if(playerChoice==="rock" && computerChoice==="scissors"){
    //     console.log("You won!");
    //     wins++;
    // }else if(playerChoice==="scissors" && computerChoice==="paper"){
    //     console.log("You won!");
    //     wins++;
    // }
    
    else {
        console.log("You lost!");
        losses++;
    }
}
console.log("Record:\nWins:",wins,"\nLosses:",losses,"\nTies:",ties,"\nTotal Matches:",wins+losses+ties)

