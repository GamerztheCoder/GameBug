'use strict'

const squareBlack = document.querySelectorAll('.squareBlack');
const squareWhite = document.querySelectorAll('.squareWhite');
const kingWhite = document.querySelector('.kingWhite');
const chessBoard = document.querySelector('.board');

squareWhite.forEach(pos => {
  if(pos.id.includes('2')){
    document.getElementById(pos.id).classList.add('pawnWhite')
  } else if(pos.id.includes('7')){
    document.getElementById(pos.id).classList.add('pawnBlack')
  }
})
squareBlack.forEach(pos => {
  if(pos.id.includes('2')){
    document.getElementById(pos.id).classList.add('pawnWhite')
  } else if(pos.id.includes('7')){
    document.getElementById(pos.id).classList.add('pawnBlack')
  }
})

const pawnWhite = document.querySelectorAll('.pawnWhite');
const pawnBlack = document.querySelectorAll('.pawnBlack');

function handlePawnClickBlack(pawnevent) {
  function handleChessBoardClick(event) {
    document.getElementById(event.target.id).classList.add('pawnBlack');
    document.getElementById(pawnevent.target.id).classList.remove('pawnBlack');
  }

  chessBoard.addEventListener('click', handleChessBoardClick);

  setTimeout(function() {
    chessBoard.removeEventListener('click', handleChessBoardClick);
  }, 1000);
}
function handlePawnClickWhite(pawnevent) {
  function handleChessBoardClick(event) {
    let coordList = event.target.id.split('');
    document.getElementById(event.target.id).classList.add('pawnWhite');
    document.getElementById(pawnevent.target.id).classList.remove('pawnWhite');
  }

  chessBoard.addEventListener('click', handleChessBoardClick);

  setTimeout(function() {
    chessBoard.removeEventListener('click', handleChessBoardClick);
  }, 1000);
}

pawnBlack.forEach(pawn => {
  pawn.addEventListener('click', handlePawnClickBlack);
});
pawnWhite.forEach(pawn => {
  pawn.addEventListener('click', handlePawnClickWhite);
})


