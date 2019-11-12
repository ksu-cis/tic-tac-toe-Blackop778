// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = 'X';

var turnElement = document.getElementById("turn");
turnElement.innerHTML = `Player ${currentTurn}'s turn`;

function cellClicked(event) {
	event.preventDefault();
	event.target.innerText = currentTurn;
	nextTurn();
}

function nextTurn() {
	if (currentTurn === 'X')
		currentTurn = 'O';
	else
		currentTurn = 'X';
	turnElement.innerHTML = `Player ${currentTurn}'s turn`;
}

var squares = document.getElementsByClassName('square');
for (var i = 0; i < squares.length; i += 1) {
	squares[i].addEventListener("click", cellClicked);
}
