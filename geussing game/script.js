// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const messageElement = document.getElementById('message');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = 'Please enter a valid number between 1 and 100.';
  } else {
    attempts++;
    if (userGuess === randomNumber) {
      messageElement.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
      document.getElementById('userGuess').disabled = true;
    } else if (userGuess < randomNumber) {
      messageElement.textContent = 'Try a higher number.';
    } else {
      messageElement.textContent = 'Try a lower number.';
    }
  }
}
