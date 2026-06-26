// ============================================
// DEFEAT THE EVIL AI: Number Guessing Game
// ============================================

console.log("╔════════════════════════════════════════╗");
console.log("║  WELCOME TO THE EVIL AI CHALLENGE!     ║");
console.log("║        Number Guessing Game            ║");
console.log("╚════════════════════════════════════════╝\n");

console.log("📖 INSTRUCTIONS:");
console.log("-------------------------------------------");
console.log("1. I am thinking of a number between 1 and 100");
console.log("2. You have a MAXIMUM of 10 attempts to guess it");
console.log("3. After each guess, I will tell you if you're too low or too high");
console.log("4. Guess correctly to WIN and earn points!");
console.log("5. The faster you guess, the more points you earn");
console.log("\n💡 SCORING SYSTEM:");
console.log("   • Guess in 1-3 attempts: 1000 points 🏆");
console.log("   • Guess in 4-6 attempts: 750 points 🥇");
console.log("   • Guess in 7-9 attempts: 500 points 🥈");
console.log("   • Guess in 10 attempts: 250 points 🥉");
console.log("   • Fail to guess: 0 points ✗");
console.log("-------------------------------------------\n");


game();


function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    let input;
    let guess;

  while (true) {
        input = prompt("Enter your guess (1-100):");
        if (input === null) {
            console.log("You cancelled the game. Game ended.");
        }
        input = input.trim();
        if (input === "") {
            console.log("Please enter a number. Try again.");
            continue;
        }
        guess = parseInt(input, 10);
        if (isNaN(guess)) {
            console.log("That's not a valid number. Please enter a numeric value.");
            continue;
        }
        if (guess < 1 || guess > 100) {
            console.log("Please enter a number between 1 and 100.");
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
    if (attempts <= 3) {
        return 1000;
    } else if (attempts <= 6) {
        return 750;
    } else if (attempts <= 9) {
        return 500;
    } else {
        return 250;
    }
}

function game() {
        // Generate the random number
        const correctNumber = generateRandomNumber();
        const maxAttempts = 10;
        let attemptCount = 0;
        let gameWon = false;

        console.log(" Starting game...\n");

        // Main game loop
        while (attemptCount < maxAttempts) {
            attemptCount++;
            console.log(`\n Attempt ${attemptCount} of ${maxAttempts}`);

            // Get player's guess
            const playerGuess = getPlayerGuess();
            console.log(`You guessed: ${playerGuess}`);

            // Check the guess
            const result = checkGuess(playerGuess, correctNumber);

            if (result === "correct") {
                gameWon = true;
                console.log(" CORRECT! YOU WIN! \n");
                break;
            } else if (result === "too low") {
                console.log(" Your guess is TOO LOW. Try a higher number.");
            } else {
                console.log(" Your guess is TOO HIGH. Try a lower number.");
            }
        }

        // Game end messages
        console.log("\n╔════════════════════════════════════════╗");
        if (gameWon) {
            console.log("║           VICTORY!               ║");
            const score = calculateScore(attemptCount);
            console.log(`║   You defeated the Evil AI!          ║`);
            console.log("╚════════════════════════════════════════╝\n");
            console.log(` GAME RESULTS:`);
            console.log(`   Attempts used: ${attemptCount}/${maxAttempts}`);
            console.log(`   The number was: ${correctNumber}`);
            console.log(`   Your score: ${score} points!\n`);

            if (attemptCount <= 3) {
                console.log(" INCREDIBLE! You're a true master!");
            } else if (attemptCount <= 6) {
                console.log(" Excellent performance!");
            } else if (attemptCount <= 9) {
                console.log(" Good job!");
            } else {
                console.log(" You made it, but the AI was close to victory!");
            }
        } else {
            console.log("║          ✗ GAME OVER ✗               ║");
            console.log("║   The Evil AI has defeated you!      ║");
            console.log("╚════════════════════════════════════════╝\n");
            console.log(` GAME RESULTS:`);
            console.log(`   Attempts used: ${attemptCount}/${maxAttempts}`);
            console.log(`   The number was: ${correctNumber}`);
            console.log(`   Your score: 0 points\n`);
            console.log(" The Evil AI mocks your defeat...");
            console.log("Try again to defeat me!");
        }

        console.log("\n To play again, refresh the page or type: game()");

}

