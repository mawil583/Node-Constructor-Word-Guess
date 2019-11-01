var Word = require("./Word.js");
var inquirer = require('inquirer');
var wordsArr = ["peppermint", "backpack", "politics", "coffee", "engagement", "fun", "passion", "food", "travel", "code"];
// Randomly selects a word and uses the Word constructor to store it
let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
let wordObj = new Word(randomWord);
//  Starts the game
askQuestions();
// Prompts the user for each guess and keeps track of the user's remaining guesses
function askQuestions() {
    wordObj.displayCurrent();
    if (wordObj.displayCurrentGameProgress.indexOf("_") === -1) {
        console.log("You won!")
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
                wordObj.updateLetterObjArr(responseObj.guess);
                askQuestions();
            })
    }
};
