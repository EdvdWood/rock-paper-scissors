let computerScore = 0;
let playerScore = 0;
const results = document.querySelector('.results');
const wrapper = document.querySelector('html')
const buttons = document.querySelectorAll('.playButton');
const resetButton = document.querySelector('.resetButton');
const header = document.querySelector('h1')

resetButton.addEventListener('click', () => {reset()
});


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playround(computerPlay(), button.id);
  });
});

let computerPlay = () => {
  let value = Math.random()
  
  if (value>0.66) {
      return "rock";
  } else if (value<0.66 && value >0.33) {
      return "paper";
  } else {
      return "scissors";
  }
};

let playround = (computerSelection, playerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  const para = document.createElement('p');
  const line = document.createElement('p');
  if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
      console.log("Invalid choice!");
      return;
  } else if (computerSelection === playerSelection) {
      para.classList.add('draw');
      para.textContent = (`Player played ${playerSelection}, Computer played ${computerSelection}. It's a draw!`);
  } else if ((computerSelection === "rock" && playerSelection === "paper") ||
          (computerSelection === "paper" && playerSelection === "scissors") ||
          (computerSelection === "scissors" && playerSelection === "rock")) {
      para.classList.add('playerWin');
      para.textContent = `Player played ${playerSelection}, Computer played ${computerSelection}. Player wins!`;
      playerScore += 1;
  } else {
      console.log();
      para.classList.add('computerWin');
      para.textContent = `Player played ${playerSelection}, Computer played ${computerSelection}. Computer wins!`;
      computerScore +=1;
  };
  keepscore(para, line);
  results.appendChild(para);
  decideWinner(line);
};


let keepscore = (para, line) => {
  line.textContent += `Player: ${playerScore} vs. Computer: ${computerScore}`
  para.appendChild(line);
};

let decideWinner = (line) => {
  if (playerScore == 3) {
    line.classList.add('playerWin');
    wrapper.classList.add('playerWin');
    header.textContent = "YOU WIN";
    header.style.fontSize = "80px";
    resetButton.classList.remove("invisible")
    buttons.forEach(el => el.classList.add("invisible"))
    const wins = document.querySelectorAll('p.playerWin')
    wins.forEach(el => el.classList.add('big'))
  } else if (computerScore == 3) {
    line.classList.add('computerWin');
    wrapper.classList.add('computerWin');
    header.textContent = 'YOU LOSE';
    header.style.fontSize = "80px";
    resetButton.classList.remove("invisible")
    buttons.forEach(el => el.classList.add("invisible"))
    const losses = document.querySelectorAll('p.computerWin')
    losses.forEach(el => el.classList.add('big'))
  }
}

let reset = () => {
  playerScore = 0;
  computerScore = 0;
  wrapper.classList.remove('computerWin');
  wrapper.classList.remove('playerWin');
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  resetButton.classList.add("invisible");
  buttons.forEach(el => el.classList.remove("invisible"))
  header.textContent = "Rock, Paper & Scissors by Eddie";
  header.style.fontSize = "50px";
}



