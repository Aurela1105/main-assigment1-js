    // ============================================
// DEFEAT THE EVIL AI: Number Guessing Game
// ============================================

console.log("╔════════════════════════════════════════╗");
console.log("║  WELCOME TO THE EVIL AI CHALLENGE!    ║");
console.log("║        Number Guessing Game           ║");
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
// Start the game automatically when the page loads

game();


/**
 * Generates a random number between 1 and 100 (inclusive)
 * @returns {number} Random integer between 1 and 100
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

/**
 * Prompts the player for a guess and validates the input
 * Reprompts until a valid number is provided
 * @returns {number} Player's valid guess as an integer
 */


/**
 * Compares the player's guess to the correct number
 * @param {number} playerGuess - The number guessed by the player
 * @param {number} correctNumber - The correct number to guess
 * @returns {string} Feedback message: "correct", "too low", or "too high"
 */
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess === correctNumber) {
        return "correct";
    } else if (playerGuess < correctNumber) {
        return "too low";
    } else {
        return "too high";
    }
}

/**
 * Calculates the player's score based on number of attempts
 * @param {number} attempts - Number of attempts taken to guess correctly
 * @returns {number} Player's score
 */
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

/**
 * Main game function that orchestrates the entire number guessing game
 */
function game() {
        // Generate the random number
       
        const correctNumber = generateRandomNumber();
        const maxAttempts = 10;
        let attemptCount = 0;
        let gameWon = false;

        console.log("🎮 Starting game...\n");

        // Main game loop
        while (attemptCount < maxAttempts) {
            attemptCount++;
            console.log(`\n🎯 Attempt ${attemptCount} of ${maxAttempts}`);

            // Get player's guess
            const playerGuess = getPlayerGuess();
            console.log(`You guessed: ${playerGuess}`);

            // Check the guess
            const result = checkGuess(playerGuess, correctNumber);

            if (result === "correct") {
                gameWon = true;
                console.log("✅ CORRECT! YOU WIN! 🎉\n");
                break;
            } else if (result === "too low") {
                console.log("📈 Your guess is TOO LOW. Try a higher number.");
            } else {
                console.log("📉 Your guess is TOO HIGH. Try a lower number.");
            }
        }

        // Game end messages
        console.log("\n╔════════════════════════════════════════╗");
        if (gameWon) {
            console.log("║          🏆 VICTORY! 🏆              ║");
            const score = calculateScore(attemptCount);
            console.log(`║   You defeated the Evil AI!          ║`);
            console.log("╚════════════════════════════════════════╝\n");
            console.log(`✨ GAME RESULTS:`);
            console.log(`   Attempts used: ${attemptCount}/${maxAttempts}`);
            console.log(`   The number was: ${correctNumber}`);
            console.log(`   Your score: ${score} points!\n`);

            if (attemptCount <= 3) {
                console.log("🏆 INCREDIBLE! You're a true master!");
            } else if (attemptCount <= 6) {
                console.log("🥇 Excellent performance!");
            } else if (attemptCount <= 9) {
                console.log("🥈 Good job!");
            } else {
                console.log("🥉 You made it, but the AI was close to victory!");
            }
        } else {
            console.log("║          ✗ GAME OVER ✗               ║");
            console.log("║   The Evil AI has defeated you!      ║");
            console.log("╚════════════════════════════════════════╝\n");
            console.log(`📊 GAME RESULTS:`);
            console.log(`   Attempts used: ${attemptCount}/${maxAttempts}`);
            console.log(`   The number was: ${correctNumber}`);
            console.log(`   Your score: 0 points\n`);
            console.log("😈 The Evil AI mocks your defeat...");
            console.log("Try again to defeat me!");
        }

        console.log("\n💾 To play again, refresh the page or type: game()");

}
function getPlayerGuess() {
    while (true) {
        let input;
        input = prompt("🤔 Enter your guess (1-100):");
        // Handle cancel button
        if (input === null) {
            console.log("❌ You cancelled the game. Game ended.");
        }

        // Trim whitespace and check if empty
        if (input === "") {
            console.log("⚠️  Please enter a number. Try again.");
            continue;
        }

        // Try to convert to integer
         let guess = parseInt(input, 10);

        // Validate that it's a valid number
        if (isNaN(guess)) {
            console.log("⚠️  That's not a valid number. Please enter a numeric value.");
            continue;
        }

        // Validate range
        if (guess < 1 || guess > 100) {
            console.log("⚠️  Please enter a number between 1 and 100.");
            continue;
        }

        // Valid guess received
        return guess;
    }
};
