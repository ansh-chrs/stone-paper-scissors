// function to generate computer value
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1); //Generates a number between 1 and 3
    if (num === 1) { return 'stone'; }
    else if (num === 2) { return 'paper'; }
    else { return 'scissors'; }
}