

const kingWhite = document.querySelector('.kingWhite');
const pawnWhite = document.querySelectorAll('.pawnWhite');
const pawnBlack = document.querySelectorAll('.pawnBlack')
const chessBoard = document.querySelector('.board');

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



pawnWhite.addEventListener('mousedown', function(event){
  document.getElementById('a3').classList.add('pawnWhite');
  document.getElementById('a2').classList.remove('pawnWhite');
}); 


