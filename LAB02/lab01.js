const prompt = require('prompt');

// Configure the prompt
prompt.start();
prompt.message = '';

// Function to generate a random selection for the computer
const generateCompSelection = () => {
  const random = Math.random();
  if (random < 0.35) return 'PAPER';
  if (random < 0.68) return 'SCISSORS';
  return 'ROCK';
};

// Function to determine the winner
const findWinner = (user, computer) => {
  if (user === computer) return "It's a tie";
  if (
    (user === 'ROCK' && computer === 'SCISSORS') ||
    (user === 'PAPER' && computer === 'ROCK') ||
    (user === 'SCISSORS' && computer === 'PAPER')
  ) {
    return 'User Wins';
  }
  return 'Computer Wins';
};

// Ask the user to choose ROCK, PAPER, or SCISSORS
prompt.get(['userSelection'], (err, result) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  const computerSelection = generateCompSelection();

  // Display user and computer selections
  console.log('User Selection:', userSelection);
  console.log('Computer Selection:', computerSelection);

  // Determine the winner and display the outcome
  const finalResult = findWinner(userSelection, computerSelection);
  console.log('final Result:', finalResult);
});