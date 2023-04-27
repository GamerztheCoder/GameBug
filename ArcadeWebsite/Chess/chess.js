
const kingWhite = document.querySelector('.kingWhite');
const pawnWhite = document.querySelectorAll('.pawnWhite');
const chessBoard = document.querySelector('.board');
console.log(chessBoard)

chessBoard.addEventListener('click', function(event){
  console.log(event);
})

pawnWhite.forEach(pawn => {
  pawn.addEventListener('click', function(pawnevent){
    chessBoard.addEventListener('click', function(event){
      document.getElementById(event.target.id).classList.add('pawnWhite');
      document.getElementById(pawnevent.target.id).classList.remove('pawnWhite');
    })
  })
})

/* pawnWhite.addEventListener('mousedown', function(event){
  document.getElementById('a3').classList.add('pawnWhite');
  document.getElementById('a2').classList.remove('pawnWhite');
}); */

