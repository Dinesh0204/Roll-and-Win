
# Dice Game

Description

This project is a simple dice game implemented in JavaScript. It provides an interactive gameplay experience where two players take turns rolling dice and accumulating scores. The goal of the game is to reach a score of 10 first. If a player rolls a 1, their current score resets to 0, and it becomes the other player's turn. The first player to reach a score of 10 wins the game.

# Gameplay Instructions

Open the project in your web browser.

The game starts with Player 1 as the active player.

Click the "Roll Dice" button to roll the dice.

The dice will display a random number between 1 and 6.
If the number is not 1:

The rolled number is added to the current player's score.

The current player can continue rolling the dice or choose to hold their score.

If the number is 1:

    The current player's score resets to 0.
    It becomes the other player's turn.
    Click the "Hold" button to add current player's 
    score to their total score and switch to the other
    player.
The first player to reach a total score of 10 or more wins the game.

Click the "Reset" button to start a new game.

    You can Modified code to 20 or 30 which can be easily found in js file

Code Explanation

The JavaScript code consists of the following key components:

    dice variable: 

Represents the dice element in the HTML.

holdButton variable: Represents the "Hold" button element in the HTML.

    reset variable: 

Represents the "Reset" button element in the HTML.

    activePlayer variable: 

Tracks the active player 
(0 for Player 1, 1 for Player 2).

    currentScore variable: 
Stores the current score of the active player.

    playerWin function: 
Displays an alert when a player reaches a score of 10 and adds the "player-winner" class to the winning player's section.


    Event listeners: 
Set up event listeners for the "Roll Dice," "Hold," and "Reset" buttons to handle the game logic and user interactions.


    Technologies Used

HTML


CSS

JavaScript

## Screenshots

![image](https://github.com/Dinesh0204/Roll-and-Win/assets/72650101/58c16670-ab84-4c13-b49d-4e8a092e7b04)




![image](https://github.com/Dinesh0204/Roll-and-Win/assets/72650101/2ae7d631-a3f0-42ce-ad4a-de898088ecc1)







![image](https://github.com/Dinesh0204/Roll-and-Win/assets/72650101/d27c67b9-7743-4ef3-8cac-1d0e5f452d3e)


