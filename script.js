let carrito = [];

function mostrarSeccion(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
    alert(nombre + " fue agregado al carrito 🛍️");
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - Bs. ${item.precio}`;
        lista.appendChild(li);
        total += item.precio;
    });

    document.getElementById("total").textContent = "Total: Bs. " + total;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    alert("El carrito fue vaciado 🧺");
}


