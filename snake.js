/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let snake = {x: 15, y:15}; // Starting Postion
let snakeBody = [];
let controlX = 0;
let controlY = 0;
let food = {x: 25, y: 20}; // Starting Position

let score = 0; // Use this to display 
let highScore = localStorage.getItem("high-score") || 0;
let gameState = false; // false determine that game has not end, true means gameover
let renderTime;

/*------------------------ Cached Element References ------------------------*/
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const endPage = document.getElementById("game-over");
const popUpElement = document.getElementById("popup");

const gameArea = document.querySelector(".game-area");
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');

highScoreElement.innerText = `High Score: ${highScore}`;
/*----------------------------- Render Functions ----------------------------*/
// Initialise gameArea with starting positions of snake and food
function initGame() {
    gameArea.innerHTML = '';
    drawSnake();
    drawFood();
}

function renderGame() {    
    if (gameState === true) {
        endPage.style.display = "block";
        clearInterval(renderTime);
    }
    // Adds x and y movement to snake when arrow keys are pressed 
    snake.x += controlX;
    snake.y += controlY;

    // Check if the snake has meet with the food
    if (snake.x === food.x && snake.y === food.y) {
        randomFood();
        snakeBody.push([food.x, food.y]); // Store an array value to add to snake length
        getScores();
    }

    // Shift element value forward by one to snake body
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snake.x, snake.y]; // Sets first element of snake body to current position

    endConditions();
    initGame();
}

/*-------------------------------- Functions --------------------------------*/
// Initialise welcome page
function init() {
    gamePage.style.display = "block";
    endPage.style.display = "none";
    startPage.style.display = "block";
}

function drawSnake () {
    for (let i = 0; i < snakeBody.length; i++) {
    const snakeElement = document.createElement("div");
    snakeElement.classList.add("snake");
    snakeElement.style.gridArea = `${snakeBody[i][1]} / ${snakeBody[i][0]}`;
    gameArea.appendChild(snakeElement);
    }

    // Adds additional div for each new part of snake
    const snakeHead = document.createElement("div");
    snakeHead.classList.add("head");
    snakeHead.style.gridArea = `${snake.y} / ${snake.x}`;
    gameArea.appendChild(snakeHead);
}

function drawFood () {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridArea = `${food.y} / ${food.x}`;
    gameArea.appendChild(foodElement);
}

const randomFood = () => {
    food.x = Math.floor(Math.random() * 30) + 1;
    food.y = Math.floor(Math.random() * 30) + 1;
}

// function gameOver() {
//     clearInterval(renderTime);
//     // alert("You Lose!!");
//     // location.reload(); // Reload the page
// }

function getScores () {
    score += 1;
    highScore = Math.max(score, highScore);
    localStorage.setItem("high-score", highScore);
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
    this.sound = new Audio();
    this.sound.src = 'mixkit-quick-lock-sound-2854.wav';
    this.sound.play();
}

const endConditions = () => {
        // Cehcking if snake goes over board
        if (snake.x <= 0 || snake.x > 30 || snake.y <= 0 || snake.y > 30) {
            this.sound = new Audio();
            this.sound.src = 'mixkit-arcade-fast-game-over-233.wav';
            this.sound.play();
            gameState = true;
        }
    
        // Checking if snake hits itself
        for (let i = 1; i < snakeBody.length; i++) {
            if (snake.x === snakeBody[i][0] && snake.y === snakeBody[i][1]) {
                this.sound = new Audio();
                this.sound.src = 'mixkit-arcade-fast-game-over-233.wav';
                this.sound.play();
                gameState = true;
            }
        }
}


/*----------------------------- Event Listeners -----------------------------*/
// Goes to game page from start page
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    startPage.style.display = "none";
    endPage.style.display = "none";
    gamePage.style.display = "block";
});

const endButton = document.getElementById("end");
endButton.addEventListener("click", () => {
    clearInterval(renderTime);
    location.reload();
});

// eventlistener to move by arrow key pressed to move snake
document.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowUp' && controlY != 1) {
        controlX = 0;
        controlY = -1;
    } else if (e.key === 'ArrowDown' && controlY != -1) {
        controlX = 0;
        controlY = 1;
    } else if (e.key === 'ArrowRight' && controlX != -1) {
        controlX = 1;
        controlY = 0;
    } else if (e.key === 'ArrowLeft' && controlX != 1) {
        controlX = -1; 
        controlY = 0;
    }
    renderGame();
});


init();
renderTime = setInterval(renderGame, 100);