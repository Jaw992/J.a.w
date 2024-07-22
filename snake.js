/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------
------------------------*/
let snake = {x: 15, y:15}; // Starting Postion
let snakeBody = [];
let control = {x: 0, y: 0}; // to move snake on the x and y axis of grid
let food = {x: 27, y: 20}; // Starting Position
let score = 0; // Use this to display 
let highScore = [];
const gameState = false; // false determine that game has not end, true means gameover

/*------------------------ Cached Element References ------------------------*/
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const endPage = document.getElementById("game-over");
const gameArea = document.querySelector(".game-area");
const highScoreElement = document.querySelector(".high-score");
/*----------------------------- Render Functions ----------------------------*/
function renderGame() {
    gameArea.innerHTML = '';
    drawSnake();
    drawFood();
}

/*-------------------------------- Functions --------------------------------*/
function init() {
    gamePage.style.display = "block";
    endPage.style.display = "none";
    startPage.style.display = "none";
}

function drawSnake () {
    const snakeElement = document.createElement("div");
    snakeElement.classList.add("snake");

    snake.x += control.x;
    snake.y += control.y;

    snakeElement.style.gridArea = `${snake.y} / ${snake.x}`;
    gameArea.appendChild(snakeElement);
    snakeIncrease()
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

// Add snake length and plus score function
const snakeIncrease = () => {
    if (snake.x === food.x && snake.y === food.y) {
        randomFood();
        snakeBody.push(snake);
        console.log(snakeBody);
        increaseScore();
    }    
}

// Add score and high score function
const increaseScore = () => {
    const scoreElement = document.querySelector(".score");
    score += 1;
    scoreElement.innerText = `Score: ${score}`;
}

// function to move snake with eventlistener

// function to set the border for collision
// if (snake.x <= 0 || snake.x > 30 || snake.y <= 0 || snake.y > 30) {
//     gameState = true;
//     console.log("Bang");
// }



/*----------------------------- Event Listeners -----------------------------*/
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    startPage.style.display = "none";
    endPage.style.display = "none";
    gamePage.style.display = "block";
});

// eventlistener to move by arrow key pressed to move snake
document.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowUp' && control.y != 1) {
        control = {x: 0, y: -1};
    } else if (e.key === 'ArrowDown' && control.y != -1) {
        control = {x: 0, y: 1};
    } else if (e.key === 'ArrowRight' && control.x != -1) {
        control = {x: 1, y: 0};
    } else if (e.key === 'ArrowLeft' && control.x != 1) {
        control = {x: -1, y: 0};
    }
    renderGame();
});

init();
renderGame();