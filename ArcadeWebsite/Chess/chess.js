// get the chess board element
var board = document.getElementById("chess-board");

// create eight pawns for the white pieces
for (var i = 0; i < 8; i++) {
  var pawn = document.createElement("div");
  pawn.classList.add("piece");
  pawn.classList.add("white");
  pawn.classList.add("pawn");
  pawn.innerHTML = "&#9817;"; // HTML entity for the pawn character
  var square = document.getElementById("a2"); // get the starting square for the pawns
  square.appendChild(pawn); // add the pawn to the square
  square = square.nextElementSibling; // move to the next square
}

// create eight pawns for the black pieces
for (var i = 0; i < 8; i++) {
  var pawn = document.createElement("div");
  pawn.classList.add("piece");
  pawn.classList.add("black");
  pawn.classList.add("pawn");
  pawn.innerHTML = "&#9823;"; // HTML entity for the pawn character
  var square = document.getElementById("a7"); // get the starting square for the pawns
  square.appendChild(pawn); // add the pawn to the square
  square = square.nextElementSibling; // move to the next square
}
