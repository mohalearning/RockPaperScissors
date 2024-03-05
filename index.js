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

function playGame() {
    let userWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Enter Your Choice");
        userChoice = getUserChoice(userInput);
        computerChoice = getComputerChoice();
        roundResult = playRound(userChoice, computerChoice);
        if (roundResult == 1)
            userWin++;
        if (roundResult == 2)
            computerWin++;
    }
    if (userWin === computerWin)
        console.log("You Draw This Game");
    if (userWin > computerWin)
        console.log("You Won This Game");
    else
        console.log("You Lose This Game");
}

