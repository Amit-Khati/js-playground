# 🎲 03 Rock Paper Scissors

A **console-based Rock, Paper, Scissors game** where you play against the computer.  

---

## 📝 Features

- Play multiple rounds until you choose to quit (`q`).  
- Accepts user input with **prompt-sync**.  
- Random computer choice each round.  
- Tracks **Wins, Losses, Ties**, and total matches.  
- Provides feedback for each round (`You won!`, `You lost!`, `Draw`).

---

## 🚀 Run Instructions

1. Go to this project folder:
   ```bash
   cd 03_ROCK_PAPER_SCISSORS
   ```
  Install dependency:

   ```bash
   npm install prompt-sync
   ```
   Run the game:
   ```bash
   node script.js
   ```
📊 Sample Output
   ```
  Enter rock, paper or scissors (or q to quit): rock
  The computer chose: paper
  You lost!

  Enter rock, paper or scissors (or q to quit): scissors
  The computer chose: paper
  You won!

  Enter rock, paper or scissors (or q to quit): q
  Record:
  Wins: 1
  Losses: 1
  Ties: 0
  Total Matches: 2
  ```
## 🎯 Learning Goals
 - Practice conditional logic for game rules.
 - Use loops to manage multiple rounds.
 - Work with arrays and randomization (Math.random()).
 - Track and display game statistics.
   
📚 Note: Made as part of my JavaScript mini-projects practice series (_TechWithTim_).
