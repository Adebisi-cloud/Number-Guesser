let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = number => {
  return Math.floor(Math.random()*10);
}
const compareGuesses = (humanGuess,computerGuess,target) => {
  if (Math.abs(humanGuess - target) < Math.abs(computerGuess - target)) {
    return true;
  }else if (Math.abs(computerGuess - target) < Math.abs(humanGuess - target)) {
    return false;
  } else {
    return true;
  }
};
const updateScore = winner => {
if (winner === 'human') {
  humanScore += 1;
} else if (winner === 'computer') {
  computerscore += 1;
} else {
  return humanScore + 1;
}
};
const advanceRound = () => {
  currentRoundNumber += 1;
}
updateScore ('human');
console.log (humanScore );

console.log(computerScore);