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
            throw new Error("Game cancelled by player");
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
