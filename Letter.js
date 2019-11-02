class Letter {
    constructor(underlyingLetter) {
        // A string value to store the underlying character for the letter
        this.underlyingLetter = underlyingLetter;
        // A boolean value that stores whether that letter has been guessed yet
        this.hasUnderlyingLetterBeenGuessed = false;
    }
    // A function that returns the underlying character if the letter has been guessed, 
    //or a placeholder (like an underscore) if the letter has not been guessed
    returnLetterOrUnderscore() {
        if (this.hasUnderlyingLetterBeenGuessed === true) {
            // console.log(`underlyingLetter = ${}`)
            return this.underlyingLetter;
        } else {
            return "_";
        }
    }
    // A function that takes a character as an argument and checks it
    //  against the underlying character, updating the stored 
    // boolean value to true if it was guessed correctly
    updateWasLetterGuessedBool(guess) {
        // console.log(this.underlyingLetter);
        if (guess === this.underlyingLetter) {
            this.hasUnderlyingLetterBeenGuessed = true;
        } 
    }
}
// if underlyingLetter is "a" as in:
var letter = new Letter("a");
console.log(letter);
/* I would expect the resulting object would look like this:
Letter = {
    underlyingLetter: "a",
    hasUnderlyingLetterBeenGuessed: false,
    guesses: function(guess) {
        if (this.hasUnderlyingLetterBeenGuessed === true) {
            return this.underlyingLetter;
        } else {
            return "_";
        }
    }
    check: function(guess) {
        if (guess === this.underlyingLetter) {
            this.hasUnderlyingLetterBeenGuessed = true;
        }
    }
}

*/

// console.log(letter);

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   let Person = function() {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }


module.exports = Letter;