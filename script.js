function startGame() {
//To reset the game
  for (var i = 1; i <= 9; i++) {
    clearSquare(i);
  }
//First player to begin is set to random
  document.turn = "X";
  if (Math.random() < .5) {
    document.turn = "O";
  }

  document.winner = null;
  setMessage(document.turn + " Starts");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}
//Once game is over stops player from moving again
function nextTurn(space) {
  if (document.winner != null) {
     setMessage(None);
} else if (space.innerText == "") {
        space.innerText = document.turn;
      switchTurn();
 }
}

function switchTurn() {
//Message X or O Wins!
if (checkWinner(document.turn)) {
setMessage(document.turn + " Wins" + "!");
document.winner = document.turn;
} else if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
 }
}
//Checks for possible outcomes
function checkWinner(turn) {
var result = false;
if (checkRow(1, 2, 3, turn) ||
    checkRow(4, 5, 6, turn) ||
    checkRow(7, 8, 9, turn) ||
    checkRow(1, 4, 7, turn) ||
    checkRow(2, 5, 8, turn) ||
    checkRow(3, 6, 9, turn) ||
    checkRow(3, 5, 7, turn) ||
    checkRow(1, 5, 9, turn)) {

    result = true;
  }
    return result;
}

function checkRow(a, b, c, turn) {
  var result = false;
  if (getSquare(a) == turn && getSquare(b) == turn && getSquare(c) == turn) {
    result = true;
  }
  return result;
}

function getSquare(number) {
  return document.getElementById("space" + number).innerText;
}

function clearSquare(number) {
  document.getElementById("space" + number).innerText = "";
}
