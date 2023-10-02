const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const playerScoreBoard = document.querySelector(".player-score");
  const computerScoreBoard = document.querySelector(".computer-score");
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const playerChoice = option.getAttribute("data-choice");
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerOptions[computerNumber]);

        gameWinner(playerChoice, computerChoice);
      });
    });
  };

  const gameWinner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".player-score");
    const computerScoreBoard = document.querySelector(".computer-score");

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      result.textContent = "Tie";
    } else if (player === "rock") {
      if (computer === "paper") {
        result.textContent = "Computer Won";
        computerScore++;
      } else {
        result.textContent = "Player Won";
        playerScore++;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "Computer Won";
        computerScore++;
      } else {
        result.textContent = "Player Won";
        playerScore++;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.textContent = "Computer Won";
        computerScore++;
      } else {
        result.textContent = "Player Won";
        playerScore++;
      }
    }

    // Update the player and computer score text content
    playerScoreBoard.textContent = `Player score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;
  };
  playGame();
};

game();
