var Letter = require("./Letter.js");


class Word {

    constructor(underlyingWord) {
        // An array of new Letter objects representing the letters of the underlying word
        this.letterArrOfUnderlyingWord = [];
        for (var i = 0; i < underlyingWord.length; i++) {
            var newLetters = new Letter(underlyingWord[i]);
            this.letterArrOfUnderlyingWord.push(newLetters);
        } }
        // A function that returns a string representing the word. This should 
        // call the function on each letter object (the first function defined 
        // in Letter.js) that displays the character or an underscore and 
        // concatenate those together.
        wordLetters() {
            this.displayCurrentGameProgress = [];
            for (var i = 0; i < this.letterArrOfUnderlyingWord.length; i++) {
                var displayLetterOrUnderscore = this.letterArrOfUnderlyingWord[i].guesses();
                this.displayCurrentGameProgress.push(displayLetterOrUnderscore);
            }
            console.log(this.displayCurrentGameProgress);
        }
        // A function that takes a character as an argument and calls the guess 
        // function on each letter object (the second function defined in Letter.js)
        updateHasBeenGuessedBool (guess) {
            for (var i = 0; i < this.letterArrOfUnderlyingWord.length; i++) {
                this.letterArrOfUnderlyingWord[i].compareGuessToUnderlyingChar(guess);
            }
        }
    }

    module.exports = Word;


// previous code that I may want to incorporate

    // guessedLetter(char) {
    //     let letterGuessed = false;
    //     this.letters.forEach(letter => {
    //         if (letter.wasGuessTrue(char)) {
    //             letterGuessed = true;
    //         }
    //     });
    //     return letterGuessed;
    // }
    // loop() {
    //     this.letters.forEach(letter => {
    //     return letter.getSolution;
    // })
