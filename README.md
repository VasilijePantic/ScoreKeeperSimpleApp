# ScoreKeeperSimpleApp

ScoreKeeperSimpleApp is a simple app created using JavaScript.
It shows a way of manipulating JavaScript Objects.

This is a simple,"two-player" game. One who reaches the winning score 1st by clicking on a "player1" or "player2" button is the winner and the game stops. 

Either Player1's or Player2's winning socre will turn green as a sign that the game is over.

You are able to reset the game. 

You are also able to set the winning score all by yourself. As soon as you change and set a new winning score,the game will automatically reset.

.addEventListener is a method that was used alongside "if" statements for buttons to work and to change the score itself. 

	For example:
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
I have updated the event listener part of the application.
Both players are also able to play the game using left and right arrow keys.

This app is a part of my JavaScript and DOM learning process. I am currently learning JavaScript using "The Web Developer Bootcamp" course on Udemy.

