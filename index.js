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
    userChoice = getUserChoice(userInput);
    computerChoice = getComputerChoice();
    roundResult = playRound(userChoice, computerChoice);
    if (roundResult == 1)
        player++;
    if (roundResult == 2)
        computer++;
    games++;
    if (games == 5) {
        if (player === computer)
            console.log("You Draw This Game");
        if (player > computer)
            console.log("You Won This Game");
        else
            console.log("You Lose This Game");
        games = 0;
        player = 0;
        computer = 0;
    }
}

function createScorePanel(playerType) {
    const scorePanel = document.createElement("div");
    const score = document.createElement("h1");
    score.textContent = "SCORE";
    const playerChoice = document.createElement("div");
    const rockButton = document.createElement("BUTTON");
    rockButton.id = "rock-" + playerType;
    rockButton.textContent = "ROCK";
    const paperButton = document.createElement("BUTTON");
    paperButton.id = "paper-" + playerType;
    paperButton.textContent = "PAPER";
    const scissorButton = document.createElement("BUTTON");
    scissorButton.id = "scissor-" + playerType;
    scissorButton.textContent = "SCISSOR";
    scorePanel.appendChild(score);
    scorePanel.appendChild(playerChoice);
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
