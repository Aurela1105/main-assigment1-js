// ============================================
// DEFEAT THE EVIL AI: Number Guessing Game
// ============================================

alert("👾 Welcome to the Evil AI Challenge!\n\nOpen the Console (F12) and type game() to start playing!");

console.log("╔════════════════════════════════════════╗");
console.log("║      WELCOME TO THE EVIL AI CHALLENGE! ║");
console.log("║          Number Guessing Game          ║");
console.log("╚════════════════════════════════════════╝\n");

console.log("📖 INSTRUCTIONS:");
console.log("-------------------------------------------");
console.log("1. I am thinking of a number between 1 and 100.");
console.log("2. You have a MAXIMUM of 10 attempts to guess it.");
console.log("3. After each guess, I will tell you if you're too low or too high.");
console.log("4. Guess correctly to WIN and earn points!");
console.log("5. The faster you guess, the more points you earn.");
console.log("6. Type game() in the console to start playing.");
console.log("\n💡 SCORING SYSTEM:");
console.log("• 1-3 attempts: 1000 points 🏆");
console.log("• 4-6 attempts: 750 points 🥇");
console.log("• 7-9 attempts: 500 points 🥈");
console.log("• 10 attempts: 250 points 🥉");
console.log("• Fail to guess: 0 points ✗");
console.log("-------------------------------------------\n");

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while (true) {
        let input = prompt("Enter your guess (1-100):");

        if (input === null) {
            console.log("🚪 Game cancelled.");
            return false;
        }

        input = input.trim();

        if (input === "") {
            console.log("❌ Please enter a number.");
            continue;
        }

        const guess = Number(input);

        if (!Number.isInteger(guess)) {
            console.log("❌ Please enter a whole number.");
            continue;
        }

        if (guess < 1 || guess > 100) {
            console.log("❌ Number must be between 1 and 100.");
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
    const correctNumber = generateRandomNumber();
    const maxAttempts = 10;

    let attemptCount = 0;
    let gameWon = false;

    console.clear();
    console.log("🎮 GAME STARTED!");
    console.log("-------------------------------------------");

    while (attemptCount < maxAttempts) {
        attemptCount++;

        console.log(`\n🎯 Attempt ${attemptCount} of ${maxAttempts}`);

        const playerGuess = getPlayerGuess();

        if (playerGuess === false) {
            console.log("Game cancelled.");
            return;
        }

        console.log(`👉 You guessed: ${playerGuess}`);

        const result = checkGuess(playerGuess, correctNumber);

        if (result === "correct") {
            gameWon = true;
            break;
        }

        if (result === "too low") {
            console.log("📉 Too low! Try a higher number.");
        } else {
            console.log("📈 Too high! Try a lower number.");
        }
    }

    console.log("\n╔════════════════════════════════════════╗");

    if (gameWon) {
        const score = calculateScore(attemptCount);

        console.log("║             🎉 VICTORY! 🎉             ║");
        console.log("╚════════════════════════════════════════╝");

        console.log("\n🏆 You defeated the Evil AI!");
        console.log(`🎯 Attempts: ${attemptCount}/${maxAttempts}`);
        console.log(`🔢 Correct Number: ${correctNumber}`);
        console.log(`⭐ Score: ${score} points`);

        if (attemptCount <= 3) {
            console.log("💯 Incredible! You're a true master!");
        } else if (attemptCount <= 6) {
            console.log("🥇 Excellent performance!");
        } else if (attemptCount <= 9) {
            console.log("🥈 Good job!");
        } else {
            console.log("🥉 You barely defeated the AI!");
        }

    } else {
        console.log("║            💀 GAME OVER 💀             ║");
        console.log("╚════════════════════════════════════════╝");

        console.log("\n🤖 The Evil AI has defeated you!");
        console.log(`🔢 The correct number was: ${correctNumber}`);
        console.log("⭐ Score: 0 points");
    }

    console.log("\n🔄 Type game() to play again.");
}