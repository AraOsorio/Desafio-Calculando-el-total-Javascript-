const precio = 400000
let cantidad = 0

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

const totalSpan = document.querySelector(".valor-total");
totalSpan.innerHTML = 0;


function aumentar() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = precio * cantidad;
}

function disminuir() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
  }
}