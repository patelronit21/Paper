let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const gencomChoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return option[randInx];
}

const drawGame = () =>{
    console.log("Game Was Draw");
    msg.innerText = "Game Was Draw!!!";
    msg.style.backgroundColor ="#081b31"
}

const showWinner = (userwin, userChoice, compChoice) =>{
   if(userwin){
    userScore ++;
    userScorePara.innerText = userScore;
    console.log("You Win!!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }else{
    compScore ++;
    compScorePara.innerText= compScore;
    console.log("You Lose");
    msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};

const playGame = (userChoice) =>{
  console.log("user Choice = ",userChoice);
  const compChoice = gencomChoice();
  console.log("Comp Choice = ",compChoice);
  
  if(userChoice === compChoice){
     drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true; 
    } else if(userChoice === "paper"){
       userWin = compChoice === "scissors" ? false : true;
    }else{
       userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

};

choices.forEach((choice) => {
   
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
         playGame(userChoice);
    });
});