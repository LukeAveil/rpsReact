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
