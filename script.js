// Script
console.log("WELCOME TO ROCK PAPER SCISSORS GAME");
// alert("WELCOME TO ROCK PAPER SCISSORS GAME!");




 function getHumanChoice(){
   if(userInput === "rock"){ return "rock" }
   else if (userInput === "paper"){return "paper"}
   else if (userInput === "scissors") {return "scissors"}
}    
   

function getComputerChoice(){
   let result = Math.random();
   if(result <= 0.3){ return "Rock" }
   else if (result >= 0.6){return "Paper"}
   else {return "Scissors"}; 
}
    
  

let humanScore = 0;
let computerScore = 0; 
let win = "You win!"
let lose = "CPU wins"
let tie = "Tie. Let's try again!" 
    
function playRound( humanChoice = getHumanChoice(), computerChoice = getComputerChoice() ){
    
 
   

    if (humanChoice == "rock" && computerChoice == "Rock") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (humanChoice == "paper" && computerChoice == "Rock") return win + " | " + humanChoice.toUpperCase() + " wraps " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (humanChoice == "scissors" && computerChoice == "Rock") return lose + " ( " + computerChoice.toUpperCase() + " crushes " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)

    else if (humanChoice == "rock" && computerChoice == "Paper") return lose + " | " + computerChoice.toUpperCase() + " wraps " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (humanChoice == "paper" && computerChoice == "Paper") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (humanChoice == "scissors" && computerChoice == "Paper") return win + " | " + humanChoice.toUpperCase() + " cut " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)

    else if (humanChoice == "rock" && computerChoice == "Scissors") return win + " | " + humanChoice.toUpperCase() + " crushes " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (humanChoice == "paper" && computerChoice == "Scissors") return lose + " | " + computerChoice.toUpperCase() + " cut " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (humanChoice == "scissors" && computerChoice == "Scissors") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
};        
    

function playGameBkp(){
  
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

function playGame(){
    let winner = playRound()
    const result = document.querySelector("#result")
    const score = document.querySelector("#score")
    const newDiv = document.createElement("div")
    const winnerPara = document.createElement("p")
    const scorePara = document.createElement("p")
    winnerPara.textContent = winner
    scorePara.textContent = ( "Your score: " + humanScore + " | " + "CPU score: " + computerScore)
    result.append(winnerPara)
    score.append(scorePara);
        // alert(winner);   
       
    };
    
    

// playGame();
// confirm("GAME OVER. Play again?", window.location.reload());


const btnRock = document.querySelector("#rock");
btnRock.addEventListener(
    "click", () => {
        userInput = btnRock.id
        playGame()
       // confirm("GAME OVER. Play again?", window.location.reload())
    }  
) 

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener(
    "click", () => {
        userInput = btnPaper.id
        playGame()
        // confirm("GAME OVER. Play again?", window.location.reload())
    }  
) 

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener(
    "click", () => {
        userInput = btnScissors.id
        playGame()
       // confirm("GAME OVER. Play again?", window.location.reload())
    }  
) 

