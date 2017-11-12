// p1Button, p2Button and resetButton are buttons that are shown in index.html
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

// p1Dislay and p2Display represent scores that players achieved 
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

// These input represent the end game score
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

// Both players should start with score 0
var p1Score = 0;
var p2Score = 0;

// At the start game must be set to false
// Default winning score is 5
var gameOver = false;
var winningScore = 5;

//addEventListener method with property "click" so that buttons can be responsive to mouse clicks
p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	} 
});

//addEventListener method with property "click" so that buttons can be responsive to mouse clicks
p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// Reset button is used to reset the score
resetButton.addEventListener("click", function(){
	reset();
});

// EventListener for player 1
// This eventListener respondes to left arrow key 
window.addEventListener("keydown", checkKeyPressedLeft, false);
 
function checkKeyPressedLeft(e) {
    if (e.keyCode == "37") {
        if(!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
    }
};

// EventListener for player 2
// This eventListener respondes to right arrow key
window.addEventListener("keyup", checkKeyPressedRight, false);

function checkKeyPressedRight(e) {
    if (e.keyCode == "39") {
        if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
    }
}

// This function is called when reset button is pressed
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

// When winning score is changed, game will reset automatically
numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
