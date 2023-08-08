const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', game));

let count = 0; //counter variable to count total attempts
    let compScore = 0;   //score of computer
    let userScore = 0;   //score of user


    function game(e) {

    
      
        let attempt = playRound(e.target.value);
        console.log(`round ${count}`);
               console.log( attempt);
    
    
       // loop to run game attempt 5 times
    
        
            if (attempt.includes('Win'))
                userScore++;
    
            else if (attempt.includes('Loss'))
                compScore++;
    
    
            else {
                userScore++;
                compScore++;
            }
    
            count++;
    // comparing scores to decide winner
    
        console.log(`Your score ${userScore}`);
        console.log(`Comp Score ${compScore}`)
          
         if(count === 5 )
         {
        if(userScore > compScore)
        console.log('You win!!');
        else if(compScore > userScore)
        console.log('Comp wins');
        else console.log('Tie');
      
    
        count = 0;
        compScore =0;
        userScore =0;
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

    let userChoice =playerSelection; 
    let compChoice = getComputerChoice();   //Generatiing computer choice using getComputerChoice function 

    if (userChoice === compChoice)
        return `Tie` ;

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




 






