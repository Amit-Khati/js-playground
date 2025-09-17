# 🎲 02 Random Number Guesser

A simple **console-based guessing game** where the computer generates a random number and you try to guess it.  
Built as part of my JavaScript practice projects.

---

## 📝 Features

- Random number generated between **0–100**.  
- Accepts user guesses with **prompt-sync**.  
- Gives hints (`Too Small!` / `Too Big!`).  
- Displays total attempts taken once guessed correctly.  

---

## 🚀 Run Instructions

1. Go to this project folder:
   ```bash
   cd 02_RANDOM_NUMBER_GUESSER
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
  Guess the number (0-100): 50
  Too Small!

  Guess the number (0-100): 80
  Too Big!

  Guess the number (0-100): 72
  CONGRATULATIONS!, You got it correct in 3 guesses.
  ```
🎯 Learning Goals
   Learn Node.js basics.

   Practice taking input with prompt-sync.

   Work with conditionals and scoring logic.

   Revise OOP fundamentals interactively.
   
📚 Note: Made as part of my JavaScript mini-projects practice series (_TechWithTim_).
