const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('#playerDisplay');
const computerScore = document.querySelector('#compDisplay');
const playerHead = document.querySelector('#playerHeading');
const compHead = document.querySelector('#compHeading');
const resultDisplay = document.querySelector('#result');
const roundDisplay = document.querySelector('#round');
const matchResult = document.querySelector('#matchResult');
const resetBtn = document.querySelector('#reset');
// const playBtn = document.querySelector('#play');

resetBtn.style.display ='none';
buttons.forEach((btn) => btn.addEventListener('click', game));

let count = 0; //counter variable to count total attempts
let compScore = 0;   //score of computer
let userScore = 0;   //score of user


function game(e) {
              if(count <5){

                resetBtn.style.display ='inline-block';       
        let attempt = playRound(e.target.value);
        ++count;

        if (attempt.includes('Win'))
            userScore++;

        else if (attempt.includes('Loss'))
            compScore++;
        else {
            userScore++;
            compScore++;
        }

        playerHead.innerText = "YOUR SCORE";
        compHead.innerText = "COMPUTER SCORE";
        yourScore.innerText = userScore;
        computerScore.innerText = compScore;
        roundDisplay.innerText = `Round : ${count}`;
        resultDisplay.innerText = attempt;

        if (count === 5) {
            let finalResult;
            if (userScore > compScore)
                finalResult = 'You win!!';
            else if (compScore > userScore)
                finalResult = 'Comp wins!!';
            else finalResult = 'Tie';
            matchResult.innerText = finalResult;
            // count = 0;
            compScore = 0;
            userScore = 0;
            resetBtn.innerText = "Play Again ?";
            return;
        } 

    }
}


resetBtn.addEventListener('click', reset);
function reset() {
compScore = 0;   //scor
userScore = 0;   //score of user
gameState = 0;
gameState = 0;
    count = 0;
    resetBtn.innerText = "Reset Game";
    resetBtn.style.display ='none';
    playerHead.innerText = "";
    compHead.innerText = "";
    yourScore.innerText = '';
    computerScore.innerText = '';
    roundDisplay.innerText = ``;
    resultDisplay.innerText = '';
    matchResult.innerText = '';
}

// function to generate computer value

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1); //Generates a number between 1 and 3
    if (num === 1) { return 'stone'; }
    else if (num === 2) { return 'paper'; }
    else { return 'scissors'; }
}


//function to run a single round of game 

function playRound(playerSelection) {
    let userChoice = playerSelection;
    let compChoice = getComputerChoice();
    if (userChoice === compChoice)
        return `Tie`;
    else {
        switch (userChoice) {

            case 'stone':
                if (compChoice === 'scissors')
                    return `Win ! ${userChoice} beats ${compChoice}`;
                else
                    return `Loss ! ${compChoice} beats ${userChoice}`;

            case 'paper':
                if (userChoice === 'paper' && compChoice === 'stone')
                    return `Win ! ${userChoice} beats ${compChoice}`;
                else
                    return `Loss ! ${compChoice} beats ${userChoice}`;

            case 'scissors':
                if (userChoice === 'scissors' && compChoice === 'paper')
                    return `Win ! ${userChoice} beats ${compChoice}`;
                else
                    return `Loss ! ${compChoice} beats ${userChoice}`;
        }
    }
}










