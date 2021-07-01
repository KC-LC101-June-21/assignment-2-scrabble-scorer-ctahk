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

  let word = input.question("Let's play some Scrabble!\n\nEnter a word: ");
  return word;
};

let simpleScore = function(word) {

   return word.length;

};

let vowelBonusScore = function(word) {
   word = word.toUpperCase();
   const vowelsAndConsonants = {
      3: ["A", "E", "I", "O", "U"],
      1: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
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

let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let originalScore = 0;

  for (let i = 0; i < word.length; i++){
    for(letterInWord in newPointStructure) {
      if(letterInWord === word[i]) {
        originalScore += newPointStructure[letterInWord];
      }
    }
  }
  return originalScore;
};

let simpleScoreObj = {
  name: "Simple",
  description: "One point per character",
  scoringFunction: simpleScore
};

let bonusVowelsObj = {
  name: "Vowel Bonus",
  description: "Vowels are worth 3 points",
  scoringFunction: vowelBonusScore
};

let scrabbleObj = {
  name: "Scrabble",
  description: "Uses scrabble point system",
  scoringFunction: scrabbleScore
};

const scoringAlgorithms = [simpleScoreObj, bonusVowelsObj, scrabbleObj];
 
function scorerPrompt() {
  let scoredWord = initialPrompt();
  //input.question("Let's play some Scrabble!\n\nEnter a word to score: ");
  console.log(`\nWhich scoring algorithm would you like to use?\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
  let algorithmChosen = Number(input.question("Enter 0, 1, or 2: "));
  
  if (algorithmChosen === 0) {
    return console.log(`Score for '${scoredWord}': ${scoringAlgorithms[0].scoringFunction(scoredWord)}`);
  } else if (algorithmChosen === 1) {
    return console.log(`Score for '${scoredWord}': ${scoringAlgorithms[1].scoringFunction(scoredWord)}`);
  } else {
    return console.log(`Score for '${scoredWord}': ${scoringAlgorithms[2].scoringFunction(scoredWord)}`);
  } 
  
};

function transform(obj) {
  let revisedPointStructure = {};

  for (key in obj) {
    for (let i = 0; i < obj[key].length; i++) {
      let letter = obj[key][i];
      revisedPointStructure[`${letter.toLowerCase()}`] = Number(key);
    }
  }
  
  return revisedPointStructure;

};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
  
   scorerPrompt();
   
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

