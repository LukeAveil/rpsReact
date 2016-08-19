function userChoice() {
  prompt("Choose rock, paper, scissors, lizard or spock");
}

function computerChoice() {
  var randomNumber = Math.random();

  if (randomNumber < 0.2) {
    return "rock";
  } else if (randomNumber < 0.4) {
    return "paper";
  } else if (randomNumber < 0.6) {
    return "scissors";
  } else if (randomNumber < 0.8) {
    return "lizard";
  } else {
    return "spock";
  }
}

function getWinner(userChoice,computerChoice) {
    var winner;
    if (userChoice === computerChoice){
        winner = "Tie";
    } else if (userChoice === "rock" && computerChoice ==="paper"){
        winner = "computer";
    } else if (userChoice === "rock" && computerChoice ==="scissors"){
        winner = "player";
    } else if (userChoice === "rock" && computerChoice ==="lizard"){
        winner = "player";
    } else if (userChoice === "rock" && computerChoice ==="spock"){
        winner = "computer";
    } else if (userChoice === "paper" && computerChoice ==="rock"){
        winner = "player";
    } else if (userChoice === "paper" && computerChoice ==="scissors"){
        winner = "computer";
    } else if (userChoice === "paper" && computerChoice ==="lizard"){
        winner = "computer";
    } else if (userChoice === "paper" && computerChoice ==="spock"){
        winner = "player";
    } else if (userChoice === "scissors" && computerChoice ==="rock"){
        winner = "computer";
    } else if (userChoice === "scissors" && computerChoice ==="paper"){
        winner = "player";
    } else if (userChoice === "scissors" && computerChoice ==="lizard"){
        winner = "player";
    } else if (userChoice === "scissors" && computerChoice ==="spock"){
        winner = "computer";
    } else if (userChoice === "lizard" && computerChoice ==="rock"){
        winner = "computer";
    } else if (userChoice === "lizard" && computerChoice ==="paper"){
        winner = "player";
    } else if (userChoice === "lizard" && computerChoice ==="scissors"){
        winner = "computer";
    } else if (userChoice === "lizard" && computerChoice ==="spock"){
        winner = "player";
    } else if (userChoice === "spock" && computerChoice ==="rock"){
        winner = "player";
    } else if (userChoice === "spock" && computerChoice ==="paper"){
        winner = "computer";
    } else if (userChoice === "spock" && computerChoice ==="scissors"){
        winner = "player";
    } else if (userChoice === "spock" && computerChoice ==="lizard"){
        winner = "computer";
    }
    return winner;
}

function bestOfThree() {
  var playerWins = 0;
  var computerWins = 0;

  while (playerWins < 2 && computerWins < 2) {
    var playerMove = userChoice();
    var computerMove = computerChoice();
    var winner = getWinner(playerMove, computerMove);

    if (winner === "player") {
      playerWins += 1;
      console.log("Player chose " + playerMove + " while the computer chose " + computerMove);
      console.log("Current Score: Player " + playerWins + " Computer: " + computerWins + "\n");
    } else if (winner === "computer") {
      computerWins += 1;
      console.log("Player chose " + playerMove + " while the computer chose " + computerMove);
      console.log("Current Score: Player " + playerWins + " Computer: " + computerWins + "\n");
    } else if ("Tie") {
      playerWins += 0;
      computerWins += 0;
      console.log("Draw!! You both chose " + computerMove);
    }

    if (playerWins === 2) {
      console.log("You win!");
    }

    if (computerWins === 2) {
      console.log("You lose!");
    }
  }
  console.log("The final score: Player: " + playerWins + " Computer " + computerWins);
}
