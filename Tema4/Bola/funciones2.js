const circle = document.getElementById("bola");
let move = 5;
bola
  .querySelector(".arriba")
  .addEventListener("mouseover", () => moveBall(0, -move));
bola
  .querySelector(".abajo")
  .addEventListener("mouseover", () => moveBall(0, move));
bola
  .querySelector(".izquierda")
  .addEventListener("mouseover", () => moveBall(-move, 0));
bola
  .querySelector(".derecha")
  .addEventListener("mouseover", () => moveBall(move, 0));

//document.queryCommand("body").addEventListener("keypress", key);
document.body.addEventListener('keypress',key);
function moveBall(x, y) {
  let top = parseInt(circle.style.top) || 50;
  let left = parseInt(circle.style.left) || 50;

  top += y;
  left += x;
  circle.style.top = top + "px";
  circle.style.left = left + "px";
}

function key(event){
  switch(event.key){
    case 'w': moveBall(0, -move);
    break;
    case 's': moveBall(0, move);
    break;
    case 'a': moveBall(-move,0);
    break;
    case 'd': moveBall(move,0);
    break;
  } 

}