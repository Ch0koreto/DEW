let bola = document.getElementById("bola");
bola.style.top = '100px';
bola.style.left = '100px';
let movimiento;

function abajo() {
  movimiento = parseInt(bola.style.top) + 10;
  
  bola.style.top = movimiento + "px";
}
function arriba() {
  movimiento = parseInt(bola.style.top) - 10;
  
  bola.style.top = movimiento + "px";
}
function derecha() {
  movimiento = parseInt(bola.style.left) + 10;
  
  bola.style.left = movimiento + "px";
}
function izquierda() {
  movimiento = parseInt(bola.style.left) - 10;
  
  bola.style.left = movimiento + "px";
}
