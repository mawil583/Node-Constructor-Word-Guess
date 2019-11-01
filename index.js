var Word = require("./Word.js");
var inquirer = require('inquirer');
var wordArr = ["peppermint", "backpack", "politics", "coffee", "engagement", "fun", "passion", "food", "travel", "code"];
// Randomly selects a word and uses the Word constructor to store it
let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
let game = new Word(randomWord);
//  Starts the game
askQuestions();
// Prompts the user for each guess and keeps track of the user's remaining guesses
function askQuestions() {
    game.wordLetters();
    if (game.displayCurrentGameProgress.indexOf("_") === -1) {
        console.log("Correct!")
    } else {
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
                game.updateHasBeenGuessedBool(responseObj.guess);
                askQuestions();
            })
    }
};
