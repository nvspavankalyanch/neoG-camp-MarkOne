const readlineSync = require('readline-sync');
const chalk = require('chalk');

// Initialize score to 0
let currentScore = 0;

// Take user's name as input
const userName = readlineSync.question(chalk.blue("What's Your Name? "));
console.log(chalk.green("Welcome " + userName));
console.log(chalk.magenta("--Let's check how much do you know me--"));

// Define function to ask question and check answer
function askQuestion(question, correctAnswer) {
  const userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log(chalk.green("Yaay! You are right"));
    currentScore += 1;
  } else {
    console.log(chalk.red("Oops! You are wrong"));
    currentScore -= 1;
  }
  console.log(chalk.yellow("Current Score: " + currentScore));
  console.log("----------");
}

const quizQuestions = [
  {
    question: chalk.cyan("Where do I live? "),
    correctAnswer: "Ponnur"
  },
  {
    question: chalk.cyan("My favorite superhero would be? "),
    correctAnswer: "Goku"
  },
  {
    question: chalk.cyan("Where do I work? "),
    correctAnswer: "Ponnur"
  },
  {
    question: chalk.cyan("My Favourite Sport ? "),
    correctAnswer: "Badminton"
  },
  {
    question: chalk.cyan("What's your Favourite Color? "),
    correctAnswer: "Blue"
  }
];

// Iterate over array and call function with each question and answer
for (let i = 0; i < quizQuestions.length; i++) {
  askQuestion(quizQuestions[i].question, quizQuestions[i].correctAnswer);
}

// Array of objects with highest scores and names of users who achieved them
const highScores = [
  {
    name: "Sai",
    score: 3,
  },

  {
    name: "Deepak",
    score: 2,
  },
];

// Check if user's score is higher than the highest score
let isHighScore = false;
for (let i = 0; i < highScores.length; i++) {
  if (currentScore > highScores[i].score) {
    highScores.splice(i, 0, { name: userName, score: currentScore });
    isHighScore = true;
    break;
  }
}

// If user's score is not higher than the highest score, add it to the end of the array
if (!isHighScore) {
  highScores.push({ name: userName, score: currentScore });
}

console.log(chalk.blue("Please have a look at your Final Score:" + currentScore));
console.log("----------");

// Display highest scores and names of users who achieved them
for (let i = 0; i < highScores.length; i++) {
  console.log(
    chalk.blue("Highest Score of this Quiz: " + highScores[i].name + ":") +
    chalk.yellow(highScores[i].score)
  );
}
console.log("-----------");
console.log(chalk.red("**THANKS FOR TAKING THIS CHALLENGE**"));
