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
