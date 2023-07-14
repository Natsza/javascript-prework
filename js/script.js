const buttonPaper = document.getElementById("button-rock"),
	buttonRock = document.getElementById("button-paper"),
	buttonScissors = document.getElementById("button-scissors");

function buttonClicked(playerMove) {
	clearMessages();

	let computerMove, randomNumber;

	/**
	 * Describe this function...
	 */
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return "kamień";
		} else if (argMoveId == 2) {
			return "papier";
		} else if (argMoveId == 3) {
			return "nożyce";
		} else {
			printMessage(
				"Nie znam ruchu o id " +
					argMoveId +
					'. Zakładam, że chodziło o "kamień".'
			);
			return "kamień";
		}
	}

	/**
	 * Describe this function...
	 */
	function displayResult(argPlayerMove, argComputerMove) {
		if (argPlayerMove == "papier" && argComputerMove == "kamień") {
			printMessage("Wygrywasz!");
		} else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
			printMessage("Wygrywasz!");
		} else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
			printMessage("Wygrywasz!");
		} else if (argPlayerMove == argComputerMove) {
			printMessage("Remis!");
		} else {
			printMessage("Przegrywasz :(");
		}
		printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
	}

	randomNumber = Math.floor(Math.random() * 3 + 1);
	computerMove = getMoveName(randomNumber);
	displayResult(playerMove, computerMove);
}
buttonRock.addEventListener("click", function () {
	buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
	buttonClicked("papier");
});
buttonScissors.addEventListener("click", function () {
	buttonClicked("nożyce");
});
