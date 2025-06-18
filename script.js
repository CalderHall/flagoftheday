const flag = document.getElementById("flag");
const guessInput = document.getElementById("guess");
const result = document.getElementById("result");
const guessForm = document.getElementById("guessForm");

// Set your daily flag here:
const dailyFlag = {
  filename: "flags/Flag_of_Argentina.svg",
  country: "Argentina",
};

flag.src = dailyFlag.filename;

let guessesLeft = 3;

guessForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload on submit
  submitGuess();
});

function submitGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  if (!userGuess) {
    result.textContent = "Please enter a guess.";
    return;
  }

  if (userGuess === dailyFlag.country.toLowerCase()) {
    result.textContent = "🎉 Correct! You guessed the country!";
    guessInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
  } else {
    guessesLeft--;
    if (guessesLeft > 0) {
      result.textContent = `❌ Wrong! You have ${guessesLeft} guess${guessesLeft > 1 ? "es" : ""} left.`;
    } else {
      result.textContent = `☠️ No guesses left! The correct answer was: ${dailyFlag.country}`;
      guessInput.disabled = true;
      guessForm.querySelector("button").disabled = true;
    }
  }

  guessInput.value = "";
  guessInput.focus();
}

