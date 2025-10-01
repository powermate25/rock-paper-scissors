// Script
console.log("WELCOME TO ROCK PAPER SCISSORS GAME");
alert("WELCOME TO ROCK PAPER SCISSORS GAME!");


function getComputerChoice(){
   let result = Math.random();
   if(result <= 0.3){ return "Rock" }
   else if (result >= 0.6){return "Paper"}
   else {return "Scissors"}; 
}
    

 function getHumanChoice(){
 let userInput = prompt("What's your choice? | 1 - Rock | 2 - Paper | 3 - Scissors");
 let userInputLowerCase = userInput.toLowerCase();
   if(userInputLowerCase === "rock" || userInput === "1"){ return "Rock" }
   else if (userInputLowerCase === "paper" || userInput === "2"){return "Paper"}
   else if (userInputLowerCase === "scissors" || userInput === "3") {return "Scissors"}
   else if (userInputLowerCase == "") { return "Please pick rock, paper or scissors"}
   else { return "Please pick rock, paper or scissors"}
}    
     

let humanScore = 0;
let computerScore = 0; 
let win = "You win!"
let lose = "CPU wins"
let tie = "Tie. Let's try again!" 
    
function playRound( humanChoice = getHumanChoice() /* getHumanChoice()*/, computerChoice = getComputerChoice() ){
    
 
let userInputLowerCase = humanChoice.toLowerCase();     

    if (userInputLowerCase == "rock" && computerChoice == "Rock") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (userInputLowerCase == "paper" && computerChoice == "Rock") return win + " | " + humanChoice.toUpperCase() + " wraps " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (userInputLowerCase == "scissors" && computerChoice == "Rock") return lose + " ( " + computerChoice.toUpperCase() + " crushes " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)

    else if (userInputLowerCase == "rock" && computerChoice == "Paper") return lose + " | " + computerChoice.toUpperCase() + " wraps " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (userInputLowerCase == "paper" && computerChoice == "Paper") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (userInputLowerCase == "scissors" && computerChoice == "Paper") return win + " | " + humanChoice.toUpperCase() + " cut " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)

    else if (userInputLowerCase == "rock" && computerChoice == "Scissors") return win + " | " + humanChoice.toUpperCase() + " crushes " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (userInputLowerCase == "paper" && computerChoice == "Scissors") return lose + " | " + computerChoice.toUpperCase() + " cut " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (userInputLowerCase == "scissors" && computerChoice == "Scissors") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
};        
    

function playGame(){
  
       for (rnd = 1; rnd <= 5; rnd++){
        let winner = playRound();
        if (rnd=== 5){alert("Ready for the result?")}
        else {
        alert( "Round " + rnd + ", " + winner);
        alert( "Your score: " + humanScore + " | " + "CPU score: " + computerScore);
        // alert(winner);   
        alert("Ready for the next round?");  }  
        if (rnd === 4) {alert("Final Round. Get Ready!")};   
        if (rnd === 5 && humanScore > computerScore){alert("Congratulation! You're the final winner." + " Final Score: " + humanScore + " - " + computerScore)}
        else if (rnd === 5 && humanScore < computerScore) alert("CPU won!" + " | Final Score: " + humanScore + " - " + computerScore);
        else if (rnd === 5 && humanScore === computerScore) alert("No winner. This one tough!" + " | Final Score: " + humanScore + " - " + computerScore); 
        
    }   
    };   


playGame();
confirm("GAME OVER. Play again?", window.location.reload());



  