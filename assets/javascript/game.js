//Declare variables to be used

const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessedLetters = [];

//Randomly generated computer guess

let pcGuess = chars[Math.floor(Math.random() * chars.length)];

//Guesses Left Function

function countGuessesLeft(){
	document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
}

//Display All User Guesses Function

function userGuesses(){
	document.querySelector('#currentGuesses').innerHTML = "Your Guesses So Far: " + guessedLetters.join(' , ');
}

//Reset Game Function

const reset = function() {
    guessesLeft = 10;
	guessedLetters = [];
	pcGuess = chars[Math.floor(Math.random() * chars.length)];
	document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
	document.querySelector('#currentGuesses').innerHTML = "Your Guesses So Far: None ";
	document.querySelector('#pc-pick').innerHTML = "???";
}

//Gameplay

document.onkeyup = function(event) {
	const userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	guessedLetters.push(userGuess);
	userGuesses();
	guessesLeft--;
	countGuessesLeft();
	
	if (userGuess === pcGuess) {
		wins++;
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		reset();
	} 
	else if(guessesLeft === 0) {
		losses++;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		reset();
	}	
}