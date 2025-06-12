// Carrito de compras como array
let carrito = [];

// Función para agregar cursos al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// Función para actualizar la lista del carrito
function actualizarCarrito() {
  const contenedor = document.getElementById('carrito');
  contenedor.innerHTML = ''; // Limpiar antes de volver a mostrar

  let total = 0;

  carrito.forEach((curso, index) => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';

    item.innerHTML = `
      ${curso.nombre} - $${curso.precio.toFixed(2)}
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">X</button>
    `;

    contenedor.appendChild(item);
    total += curso.precio;
  });

  if (carrito.length > 0) {
    const totalItem = document.createElement('li');
    totalItem.className = 'list-group-item list-group-item-success fw-bold';
    totalItem.innerText = `Total: $${total.toFixed(2)}`;
    contenedor.appendChild(totalItem);
  } else {
    contenedor.innerHTML = '<li class="list-group-item">El carrito está vacío.</li>';
  }
}

// Función para eliminar un curso del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

