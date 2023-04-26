const kingWhite = document.querySelector('.kingWhite');
const pawnWhite = document.querySelector('.pawnWhite')
console.log(pawnWhite)
pawnWhite.addEventListener('mousedown', function(event){
  document.getElementById('a3').classList.add('pawnWhite');
  document.getElementById('a2').classList.remove('pawnWhite');
});