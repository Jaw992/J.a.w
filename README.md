# Game Development - Sassy Snakey

## Project Scope
First project assigned while attending the Software Engineering Immersive Course at General Assembly. I was given a choice to choose a game to implement as part of my journey in developing myself in knowledge, logic, and skillsets in becoming more competent. 

1. To re-create the classic snake game with the use of HTML, CSS and JavaScript
2. Project Planning:
  - User stories
  - Wire FrameWork
  - Code Setup
3. Complete within given time frame 

## Time Frame
Duration - 1 Week 

## Game Description
Re-visiting the classic game called Snake played by millions. It was a childhood favourite of mine as it was the very first mobile game that I've played and it brings me back to the fond memories of times spent on this game with my friends and family.
![Snake Homepage](/SassySnake.png)

## How to Play
Using the directional arrow buttons from the keyboard to move the snake in the particular direction. The goal is to seek after food displayed on the board and points will be added whenever the food have been consumed by snake.

Take note to avoid the edges of the board as well as colliding into your own snake body cause that's how you die!!

## User Story
1) New Players see a start page that welcomes players to the game
2) Instructions will be shown it the start page
3) Players will see the board with the snake in a starting position
4) Players will get to see their scores when the snake has consumed the apple
5) Player will start the game by moving any directional keys from keyboard
6) Player will see the snake start to grow in length when the food is consume
7) The game will be ended when the player hits the wall or itself
8) Players can see their high score displayed
9) Players are able to play again when the game has ended

## Wire FrameWork
Start Page
- Players will see a welcome page when they enter the browser
- Players can read the instructions in the main page
- Click on start button to bring them to the game board

Game Page
- Players will see the board and snake in it's starting positions
- Players will see a scoreboard at the top of the board
- PLayers will see the scoring on display in the top left hand corner of the scoreboard
- PLayers will see their high score on display in the scoreboard
- When the game has ended they will have an option to play again

End Game Popup
- Players will see their current score and high score on game board
- Players will play again when they click the replay button


## Code Setup
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
```
let snake = {x: 15, y:15}; // Starting Postion
let snakeBody = [];
let controlX = 0;
let controlY = 0;
let food = {x: 25, y: 20}; // Starting Position

let score = 0; // Use this to display 
let highScore = localStorage.getItem("high-score") || 0;
let gameState = false; // false determine that game has not end, true means gameover
let renderTime;
```
/*------------------------ Cached Element References ------------------------*/
```
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const endPage = document.getElementById("game-over");
const popUpElement = document.getElementById("popup");

const gameArea = document.querySelector(".game-area");
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
```
