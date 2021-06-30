// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   promptedWord = input.question("Let's play some scrabble! Enter a word:");
   return console.log(oldScrabbleScorer(promptedWord));
};

let simpleScore = function(word) {
  word = input.question("Let's play some scrabble! Enter a word:");
  return word.length
};

let vowelBonusScore = function(word) {
  word = input.question("Let's play some scrabble! Enter a word:");
  word = word.toUpperCase();
  const vowelsAndConsonants = {
    3: ["A", "E", "I", "O", "U"],
    1: ["B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  };
  let bonusScore = 0;

  for (let i = 0; i < word.length; i++) {

    for (const vowAndConPointScore in vowelsAndConsonants) {
      if (vowelsAndConsonants[vowAndConPointScore].includes(word[i])) {
        bonusScore += Number(vowAndConPointScore)
        
      }
    }

  }
  return bonusScore;
};

console.log(vowelBonusScore());

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

