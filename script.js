
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
   if(result <= 0.3){ return "rock" }
   else if (result >= 0.6){return "paper"}
   else {return "scissors"}; 
}
    
  

let humanScore = 0;
let computerScore = 0; 
let win = "You win!"
let lose = "CPU wins"
let tie = "Tie. Let's try again!" 

    
function playRound( humanChoice = getHumanChoice(), computerChoice = getComputerChoice() ){

    const rockImgCpu = document.createElement("img")
       rockImgCpu.src = "./images/cpu/cpu-hand-back-fist-solid-full.svg";
       rockImgCpu.height = 100;
       

     const paperImgCpu = document.createElement("img")
       paperImgCpu.src = "./images/cpu/cpu-hand-solid-full.svg";
       paperImgCpu.height = 100;

     const scissorsImgCpu = document.createElement("img")
       scissorsImgCpu.src = "./images/cpu/cpu-hand-scissors-solid-full.svg";
       scissorsImgCpu.height = 100;

       if(computerChoice === "rock"){ document.querySelector("#cpuImage").replaceChildren(rockImgCpu) }
       else if(computerChoice === "paper"){ document.querySelector("#cpuImage").replaceChildren(paperImgCpu) }
       else if(computerChoice === "scissors"){ document.querySelector("#cpuImage").replaceChildren(scissorsImgCpu) }  
    
 
   

    if (humanChoice == "rock" && computerChoice == "rock") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (humanChoice == "paper" && computerChoice == "rock") return win + " | " + humanChoice.toUpperCase() + " wraps " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (humanChoice == "scissors" && computerChoice == "rock") return lose + " ( " + computerChoice.toUpperCase() + " crushes " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)

    else if (humanChoice == "rock" && computerChoice == "paper") return lose + " | " + computerChoice.toUpperCase() + " wraps " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (humanChoice == "paper" && computerChoice == "paper") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
    else if (humanChoice == "scissors" && computerChoice == "paper") return win + " | " + humanChoice.toUpperCase() + " cut " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)

    else if (humanChoice == "rock" && computerChoice == "scissors") return win + " | " + humanChoice.toUpperCase() + " crushes " + computerChoice.toUpperCase() + " | Your score: " + (++humanScore)
    else if (humanChoice == "paper" && computerChoice == "scissors") return lose + " | " + computerChoice.toUpperCase() + " cut " + humanChoice.toUpperCase() + " | CPU score: " + (++computerScore)
    else if (humanChoice == "scissors" && computerChoice == "scissors") return tie + " " + humanChoice.toUpperCase() + " vs " + computerChoice.toUpperCase()
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
    result.textContent = winner
    score.textContent = ( "Your score: " + humanScore + " | " + "CPU score: " + computerScore); 

    if(humanScore === 5){
        result.textContent = winner
        score.textContent = ( "Your score: " + humanScore + " | " + "CPU score: " + computerScore);
        score.append(newDiv.textContent="\n Congratulation! You're the final winner. 🏆🎉")
        // alert("Congratulation! You're the final winner.")
       const playAgain = document.createElement("div")
       playAgain.classList.add("playAgain")
       playAgain.textContent = "PLAY AGAIN?"
       resetContainer.appendChild(playAgain)

        resetContainer.append(resetButton)
        resetContainer.appendChild(cancelButton)
        resetButton.addEventListener("click", () => {window.location.reload()})
        cancelButton.addEventListener("click",() => {alert("GAME OVER!")})
      // confirm("GAME OVER. Play again?", window.location.reload())
    }
    else if (computerScore === 5){
        result.textContent = winner
        score.textContent = ( "Your score: " + humanScore + " | " + "CPU score: " + computerScore);
        score.append(newDiv.textContent="\n \n CPU WON! 😎") 
       // alert("CPU won!")
       const playAgain = document.createElement("div")
       playAgain.classList.add("playAgain")
       playAgain.textContent = "PLAY AGAIN?"
       resetContainer.appendChild(playAgain)

       resetContainer.append(resetButton)
       resetContainer.appendChild(cancelButton)
       resetButton.addEventListener("click", () => {window.location.reload()})
       cancelButton.addEventListener("click",() => {alert("GAME OVER!")})
       

      // confirm("GAME OVER. Play again?", window.location.reload())
    }
        // alert(winner);   
       
    };
    
    

// playGame();
// confirm("GAME OVER. Play again?", window.location.reload());


const btnRock = document.querySelector("#rock");
btnRock.addEventListener(
    "click", () => {
        userInput = btnRock.id
        document.querySelector("#userImage").replaceChildren(rockImg)
        playGame() 
       // confirm("GAME OVER. Play again?", window.location.reload())
    }  
) 

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener(
    "click", () => {
        userInput = btnPaper.id
        document.querySelector("#userImage").replaceChildren(paperImg)
        playGame()
        // confirm("GAME OVER. Play again?", window.location.reload())
    }  
) 

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener(
    "click", () => {
        userInput = btnScissors.id
        document.querySelector("#userImage").replaceChildren(scissorsImg)
        playGame()
       // confirm("GAME OVER. Play again?", window.location.reload())
    }  
)

       const resetButton = document.createElement("button")
       resetButton.classList.add("resetbutton")
       resetButton.textContent = "YES!"
       resetContainer = document.querySelector("#reset")

       const cancelButton = document.createElement("button")
       cancelButton.classList.add("cancelbutton")
       cancelButton.textContent = "NO!"
       resetContainer = document.querySelector("#reset")

       const rockImg = document.createElement("img")
       rockImg.src = "./images/user/hand-back-fist-solid-full.svg";
       rockImg.height = 100;

       const paperImg = document.createElement("img")
       paperImg.src = "./images/user/hand-solid-full.svg";
       paperImg.height = 100;

       const scissorsImg = document.createElement("img")
       scissorsImg.src = "./images/user/hand-scissors-solid-full.svg";
       scissorsImg.height = 100;

       


       
       