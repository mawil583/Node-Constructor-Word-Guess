var Letter = require("./Letter.js");
class Word {
    constructor(underlyingWord) {
        // An array of new Letter objects representing the letters of the underlying word
        this.ArrOfLetterObjects = [];
        for (var i = 0; i < underlyingWord.length; i++) {
            var newLetterObj = new Letter(underlyingWord[i]);
            // console.log(newLetters);
            this.ArrOfLetterObjects.push(newLetterObj);
            // console.log(this.ArrOfLetterObjects);
        }
    }
    // A function that returns a string representing the word. This should 
    // call the function on each letter object (the first function defined 
    // in Letter.js) that displays the character or an underscore and 
    // concatenate those together.
    displayCurrent() {
        this.displayCurrentGameProgress = [];
        for (var i = 0; i < this.ArrOfLetterObjects.length; i++) {
            var displayLetterOrUnderscore = this.ArrOfLetterObjects[i].returnLetterOrUnderscore();
            this.displayCurrentGameProgress.push(displayLetterOrUnderscore);
            // console.log(this.ArrOfLetterObjects[i].returnLetterOrUnderscore())
        }
        
        console.log(this.displayCurrentGameProgress.join(" "));
    }
    // A function that takes a character as an argument and calls the
     // updateWasLetterGuessedBool function on each letter object 
     // (the second function defined in Letter.js)
     /* this creates an array of letter*/
    updateLetterObjArr(guess) {
        // updateHasBeenGuessedBool
        // console.log(this.ArrOfLetterObjects);

        // for (let i = 0; i < this.ArrOfLetterObjects.length; i++) {
        //     if (this.ArrOfLetterObjects[i].underlyingLetter !== guess) {
        //         // console.log(this.ArrOfLetterObjects[i].underlyingLetter)
        //         let count = 0;
        //         count++;
        //     }
        // }
        // if (count === this.ArrOfLetterObjects.length) {
        //     console.log("wrong guess");
        // }
        let guessIsCorrect = false;
        for (var i = 0; i < this.ArrOfLetterObjects.length; i++) {
            let letterWasGuessed = this.ArrOfLetterObjects[i].updateWasLetterGuessedBool(guess);
            if (letterWasGuessed === true) {
                guessIsCorrect = true;
            }
        }
        return guessIsCorrect;
    }
}
// let newWord = new Word("cat");
// console.log(newWord);
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
