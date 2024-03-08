let games = 0;
let computer = 0;
let player = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3);

    if (computerChoice == 0)
        return "rock";
    if (computerChoice == 1)
        return "paper";
    if (computerChoice == 2)
        return "scissor";
}

function getUserChoice(choice) {
    return choice.toLowerCase();
}

function getRound(player, computer) {
    if (player === computer)
        return 0;
    if (player === "rock" && computer === "paper")
        return 1;
    if (player === "paper" && computer === "rock")
        return 1;
    if (player === "scissor" && computer === "paper")
        return 1;
    return 2;
}

function playRound(player_selection, computer_selection) {
    let win;

    win = getRound(player_selection, computer_selection);
    if (win === 1)
        console.log(`You Win! ${player_selection.toUpperCase()} beats ${computer_selection.toUpperCase()}`);
    else if (win === 2)
        console.log(`You Lose! ${computer_selection.toUpperCase()} beats ${player_selection.toUpperCase()}`);
    else
        console.log(`You Draw! ${computer_selection.toUpperCase()} not beats ${player_selection.toUpperCase()}`);
    return win;
}

function playGame(userInput) {
    let result;
    userChoice = getUserChoice(userInput);
    computerChoice = getComputerChoice();
    const panelUserChoice = document.getElementById("player-choice-player-id");
    const panelComputerChoice = document.getElementById("player-choice-computer-id");

    panelUserChoice.innerHTML = "";
    panelComputerChoice.innerHTML = "";
    panelUserChoice.appendChild(createImage(userChoice));
    panelComputerChoice.appendChild(createImage(computerChoice));
    roundResult = playRound(userChoice, computerChoice);
    if (roundResult == 1) {
        player++;
        const score = document.getElementById("score-id-player");
        score.textContent = player;
    }
    if (roundResult == 2) {
        computer++;
        const score = document.getElementById("score-id-computer");
        score.textContent = computer;
    }
    games++;
    if (games == 5) {
        if (player === computer)
            result = "You Draw This Game";
        if (player > computer)
            result = "You Won This Game";
        else
            result = "You Lose This Game";
        alert(result);
        games = 0;
        player = 0;
        computer = 0;
        document.getElementById("score-id-player").textContent = 0;
        document.getElementById("score-id-computer").textContent = 0;
    }
}

function createButton(_id, content, image) {
    const button = document.createElement("BUTTON");
    button.id = _id;
    button.textContent = content;
    button.style.width = "250px";
    button.style.height = "250px";
    button.appendChild(image);
    return button;
}

function createImage(type) {
    let path;
    const image = document.createElement("img");
    if (type == "rock")
        path = "images/rock.png";
    if (type == "paper")
        path = "images/paper.png";
    if (type == "scissor")
        path = "images/scissor.png";
    image.src = path;
    image.style.width = "200px";
    image.style.height = "200px";
    return image;
}


function createButtons(scorePanel) {
    rockButton = createButton("rock-id", "ROCK", createImage("rock"));
    paperButton = createButton("paper-id", "PAPER", createImage("paper"));
    scissorButton = createButton("scissor-id", "SCISSOR", createImage("scissor"));
    rockButton.addEventListener("click", () => {
        playerChoose("ROCK");
    });
    paperButton.addEventListener("click", () => {
        playerChoose("PAPER");
    });
    scissorButton.addEventListener("click", () => {
        playerChoose("SCISSOR");
    });
    scorePanel.appendChild(rockButton);
    scorePanel.appendChild(paperButton);
    scorePanel.appendChild(scissorButton);
}

function createScorePanel(playerType) {
    const scorePanel = document.createElement("div");
    const score = document.createElement("h1");
    score.textContent = "SCORE";
    const scoreValue = document.createElement("p");
    scoreValue.id = "score-id-" + playerType;
    scoreValue.textContent = 0;
    const playerChoice = document.createElement("div");
    playerChoice.id = "player-choice-" + playerType + "-id";
    const image = document.createElement("img");
    image.src = "images/RPS_GAME.png";

    playerChoice.appendChild(image);
    scorePanel.appendChild(score);
    scorePanel.appendChild(scoreValue);
    scorePanel.appendChild(playerChoice);
    createButtons(scorePanel);
    return scorePanel;
}

function playerChoose(playerChoice) {
    playGame(playerChoice);
}

const playButton = document.getElementById('play-btn');

playButton.addEventListener("click", () => {
    const body = document.querySelector('body');
    const scoreBoard = document.createElement("div");
    const playerPanel = createScorePanel("player");
    const computerPanel = createScorePanel("computer");
    scoreBoard.className = "scoreboard";

    body.removeChild(playButton);
    scoreBoard.appendChild(playerPanel);
    scoreBoard.appendChild(computerPanel);
    scoreBoard.style = "display: flex;justify-content:space-around;";
    body.appendChild(scoreBoard);
});
