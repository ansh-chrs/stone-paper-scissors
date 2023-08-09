const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('#playerDisplay');
const computerScore = document.querySelector('#compDisplay');
const playerHead =document.querySelector('#playerHeading');
const compHead =document.querySelector('#compHeading');
const resultDisplay = document.querySelector('#result');
const roundDisplay = document.querySelector('#round');


buttons.forEach((btn) => btn.addEventListener('click', game));

let count = 0; //counter variable to count total attempts
let compScore = 0;   //score of computer
let userScore = 0;   //score of user


function game(e) {
    let attempt = playRound(e.target.value);
    ++count;
    console.log(`round ${count}`);
    //    console.log(attempt);
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
        if (userScore > compScore)
            console.log('You win!!');
        else if (compScore > userScore)
            console.log('Comp wins');
        else console.log('Tie');

        count = 0;
        compScore = 0;
        userScore = 0;
    }
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










