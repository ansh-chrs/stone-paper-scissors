// function to generate computer value
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1); //Generates a number between 1 and 3
    if (num === 1) { return 'stone'; }
    else if (num === 2) { return 'paper'; }
    else { return 'scissors'; }
}

function playRound() {

    let userChoice = prompt('Enter your choice'); //Taking user input
    userChoice = userChoice.toLowerCase();
    let compChoice = getComputerChoice();   //Generatiing computer choice using getComputerChoice function 

    if (userChoice.toLowerCase() === compChoice) //checking if both choices are not same
        return "Tie";

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



function game() {
    let count = 0; //counter variable to count total attempts
    let compScore = 0;   //score of computer
    let userScore = 0;   //score of user

    while (count < 5) {
        let attempt = playRound();
        console.log(attempt);
        if (attempt.includes('Win'))
            userScore++;

        else if (attempt.includes('Loss'))
            compScore++;


        else {
            userScore++;
            compScore++;
        }

        count++;
    }

    console.log(`Your score ${userScore}`);
    console.log(`Comp Score ${compScore}`)
    if(userScore > compScore)
    console.log('You win!!');
    else if(compScore > userScore)
    console.log('Comp wins');
    else console.log('Tie');
}





