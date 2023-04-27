const pawnWhite = document.querySelector('.pawnWhite')
console.log(pawnWhite)
pawnWhite.addEventListener('mousedown', function(event){
  document.getElementById('a3').classList.add('pawnWhite');
  document.getElementById('a2').classList.remove('pawnWhite');
});



const rookWhite = document.querySelector('.rookWhite');

rookWhite.addEventListener('mousedown', function(event) {
  // When the rook is clicked, add a mouseover listener that calls onMouseOver
  rookWhite.addEventListener('mouseover', onMouseOver);

  function onMouseOver(event) {
    // When the mouse is over a valid square, add the rookWhite class and remove it from the original square
    document.getElementById('a4').classList.add('rookWhite');
    document.getElementById('a1').classList.remove('rookWhite');
  }
  
  // When the mouse button is released, remove the mouseover listener
  rookWhite.addEventListener('mouseup', onMouseOver);
  
  console.log(event); // This logs the mousedown event to the console
});
