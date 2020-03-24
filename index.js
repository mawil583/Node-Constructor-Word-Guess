var Word = require("./Word.js");
var inquirer = require('inquirer');
var wordsArr = ["peppermint", "backpack", "politics", "coffee", "engagement", "fun", "passion", "food", "travel", "code"];

// Randomly selects a word and uses the Word constructor to store it
let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
let wordObj = new Word(randomWord);
let guesses = 12;
//  Starts the game
askQuestions();
// Prompts the user for each guess and keeps track of the user's remaining guesses
function askQuestions() {
    wordObj.displayCurrent();
    let wordHasBeenSolved = wordObj.displayCurrentGameProgress.indexOf("_") === -1
    if (wordHasBeenSolved && guesses >= 0) {
        console.log("You won!");
    } else if (guesses > 0) {
        inquirer
            .prompt([{
                type: "input",
                name: "guess",
                message: "Please guess a letter"
            }])
            .then(responseObj => {
                // this sends the user input (letterGuess)
                // as an argument into the checker function
                // from the word.js file
                let guessIsCorrect = wordObj.updateLetterObjArr(responseObj.guess);
                if (guessIsCorrect === true) {
                    console.log("Correct!");
                } else {
                    console.log("Wrong! Try again.");
                };
                guesses--;
                console.log(`guesses remaining: ${guesses}`);
                askQuestions();

            })
    } else {
        console.log(`You ran out of guesses. Game Over!`)
    }
};
