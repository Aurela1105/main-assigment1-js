
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while (true) {
        let input = prompt("Enter your guess between 1 and 100:");

        if (input === null) {
            console.log("Game cancelled.");
            return false;
        }

        input = input.trim();

        if (input === "") {
            console.log("Please enter a number.");
            continue;
        }

        const guess = Number(input);

        if (!Number.isInteger(guess)) {
            console.log("Please enter a whole number.");
            continue;
        }

        if (guess < 1 || guess > 100) {
            console.log("Number must be between 1 and 100.");
            continue;
        }

        return guess;
    }
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess === correctNumber) {
        return "correct";
    } else if (playerGuess < correctNumber) {
        return "too low";
    } else {
        return "too high";
    }
}

function calculateScore(attempts) {
    if (attempts <= 3) return 1000;
    if (attempts <= 6) return 750;
    if (attempts <= 9) return 500;
    return 250;
}

function game() {
    const correctNumber = generateRandomNumber();
    const maxAttempts = 10;

    let attemptCount = 0;
    let gameWon = false;

    console.log("🎮 GAME STARTED!");

    while (attemptCount < maxAttempts) {
        attemptCount++;

        console.log(`Attempt ${attemptCount} of ${maxAttempts}`);

        const playerGuess = getPlayerGuess();

        if (playerGuess === false) {
            return;
        }

        console.log(`You guessed: ${playerGuess}`);

        const result = checkGuess(playerGuess, correctNumber);

        if (result === "correct") {
            gameWon = true;
            break;
        } else if (result === "too low") {
            console.log("Too low. Try a higher number.");
        } else {
            console.log("Too high. Try a lower number.");
        }
    }

    if (gameWon) {
        const score = calculateScore(attemptCount);

        console.log("🎉 YOU WIN!");
        console.log(`Attempts used: ${attemptCount}/${maxAttempts}`);
        console.log(`The number was: ${correctNumber}`);
        console.log(`Your score: ${score} points`);
    } else {
        console.log("💀 GAME OVER");
        console.log(`The number was: ${correctNumber}`);
        console.log("Your score: 0 points");
    }

    console.log("Game started Good luck!");
}
alert(
    "👋 Welcome to the Number Guessing Game!\n\n" +
    "⚠️ IMPORTANT: This game runs entirely in the browser Console.\n" +
    "Please open your Developer Tools Console to see your feedback and instructions:\n\n" +
    "💻 Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
    "🍎 Mac: Press Cmd + Option + J\n\n" +
    "Press OK after opening the Console!"
);

console.log("🎮 NUMBER GUESSING GAME");
console.log("----------------------------");
console.log("📊 SCORING SYSTEM");
console.log("1-3 attempts  = 1000 points 🏆");
console.log("4-6 attempts  = 750 points 🥈");
console.log("7-9 attempts  = 500 points 🥉");
console.log("10 attempts   = 250 points");
console.log("Lose the game = 0 points");
console.log("----------------------------");
console.log("👉 Ready? Type game() in the console below and press Enter to start playing!");
