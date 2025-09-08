// Script
console.log("Hello World!"); 

function getComputerChoice(){
   let result = Math.random();
   if(result <= 0.3){ return "Rock" }
   else if (result >= 0.6){return "Paper"}
   else {return "Scissors"}; 
}
// console.log( getComputerChoice() );     

function getHumanChoice(){
 let userInput = prompt("What's your choice?");
 let userInputLowerCase = userInput.toLowerCase();
   if(userInputLowerCase === "rock"){ return "Rock" }
   else if (userInputLowerCase === "paper"){return "Paper"}
   else if (userInputLowerCase === "scissors") {return "Scissors"}
   else if (userInputLowerCase == "") { return "Please pick rock, paper or scissors"}
   else { return "Please pick rock, paper or scissors"}
}    
     
// console.log ( getHumanChoice() );        
   

// let humanScore = 0;
// let computerScore = 0; 

let humanScore = 0;
let computerScore = 0; 
let win = "You win!"
let lose = "CPU wins"
let tie = "Tie, let's try again!" 
   
function playRound( humanChoice = "paper" /* getHumanChoice()*/, computerChoice = getComputerChoice() ){
    

    if (humanChoice == "rock" && computerChoice == "Rock") return tie
    else if (humanChoice == "paper" && computerChoice == "Rock") return win + " | " + humanChoice + " beats " + computerChoice + " | Your score " + (++humanScore)
    else if (humanChoice == "scissors" && computerChoice == "Rock") return lose + " | " + computerChoice + " beats " + humanChoice + " | CPU score " + (++computerScore)

    else if (humanChoice == "rock" && computerChoice == "Paper") return win + " | " + humanChoice + " beats " + computerChoice + " | Your score " + (++humanScore)
    else if (humanChoice == "paper" && computerChoice == "Paper") return tie
    else if (humanChoice == "scissors" && computerChoice == "Paper") return lose + " | " + computerChoice + " beats " + humanChoice + " | CPU score " + (++computerScore)

    else if (humanChoice == "rock" && computerChoice == "Scissors") return win + " | " + humanChoice + " beats " + computerChoice + " | Your score " + (++humanScore)
    else if (humanChoice == "paper" && computerChoice == "Scissors") return lose + " | " + computerChoice + " beats " + humanChoice + " | CPU score " + (++computerScore)
    else if (humanChoice == "scissors" && computerChoice == "Scissors") return tie
};    

  
//    console.log ( playRound() ) ;      
    

function playGame(){
  
       for (rnd = 1; rnd <= 5; rnd++){
        let winner = playRound();
        console.log( "Round " + rnd + " " + winner );
        console.log( "Your score: " + humanScore + " | " + "CPU score: " + computerScore);
        alert("Ready fro the next round?");          
    }   
    }   
                                        
            
console.log(playGame()); 
// playGame();

if (humanScore > computerScore){console.log("Congratulation! You're the final winner.")}
else if (humanScore < computerScore) console.log("CPU won! Game Over");
else if (humanScore === computerScore) console.log("No winner! This one tough");
  