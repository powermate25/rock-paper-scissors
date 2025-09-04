// Script
console.log("Hello World!"); 

function getComputerChoice(){
   let result = Math.random();
   if(result <= 0.3){ return "rock" }
   else if (result >= 0.6){return "paper"}
   else {return "scissors"}; 
}
// console.log( getComputerChoice() );     

function getHumanChoice(){
 let userInput = prompt("What's your choice?");
 let userInputLowerCase = userInput.toLowerCase();
   if(userInputLowerCase === "rock"){ return "rock" }
   else if (userInputLowerCase === "paper"){return "paper"}
   else if (userInputLowerCase === "scissors") {return "scissors"}
   else { return "Please only pick rock, paper or scissors"}
}

// console.log ( getHumanChoice() );     
 

// let humanScore = 0;
// let computerScore = 0; 

let humanScore = 0;
let computerScore = 0; 


function playRound( humanChoice = getHumanChoice(), computerChoice = getComputerChoice() ){
    if (humanChoice == "rock" && computerChoice == "rock") return ("Tie, let'S try again!")
    else if (humanChoice == "paper" && computerChoice == "rock") return ("You win!")
    else if (humanChoice == "scissors" && computerChoice == "rock") return ("CPU wins!")

    else if (humanChoice == "rock" && computerChoice == "paper") return ("CPU wins!")
    else if (humanChoice == "paper" && computerChoice == "paper") return "Tie, let'S try again!"
    else if (humanChoice == "scissors" && computerChoice == "paper") return ("You win!")

    else if (humanChoice == "rock" && computerChoice == "scissors") return ("You win!")
    else if (humanChoice == "paper" && computerChoice == "scissors") return ("CPU wins!") 
    else if (humanChoice == "scissors" && computerChoice == "scissors") return "Tie, let'S try again!"     
};

// // + " | " + "CPU Score = " + computerScore + 1)  
  
 console.log (  )   
 
 



console.log (
    playRound() ) 
// let humanChoice = getHumanChoice();
// let computerChoice = getHumanChoice();    