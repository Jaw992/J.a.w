/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// so think about how to represent the snake to move the snake, if 3 blocks long how will it show
let snake = {x: 15, y:15};
let control; // to move snake on the x and y axis of grid
let food = {x: 27, y: 20};
let score = 0; // Use this to display as well as add to snakes length count??
let highScore = 0;
const gameState = false; // false determine that game has not end, true means gameover

// using x and y 0,0 is start top left of the screen
// snake still moves by itself without clicking - button on screen click the snake moves

/*------------------------ Cached Element References ------------------------*/
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const endPage = document.getElementById("game-over");
const gameArea = document.querySelector(".game-area");
/*----------------------------- Render Functions ----------------------------*/
function renderGame() {
    console.log(gameArea);
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
    snakeElement.style.gridArea = `${snake.y} / ${snake.x}`;
    gameArea.appendChild(snakeElement);
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

randomFood();

// function to move snake with eventlistener



// function to set the border for collision



/*----------------------------- Event Listeners -----------------------------*/
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    startPage.style.display = "none";
    endPage.style.display = "none";
    gamePage.style.display = "block";
});

// eventlistener to move by arrow key pressed to move snake

init();
renderGame();