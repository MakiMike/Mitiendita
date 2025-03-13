class Producto {
    constructor(nombre, precio, imagen, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock || 10;
        this.cantidad = 1; // Inicializar la cantidad en 1
    }
}

// Lista de productos
let productos = [
    new Producto("Camisa Elegante", 25.00, "producto1.jpg"),
    new Producto("Jeans Clásicos", 40.00, "producto2.jpg")
];

// Función para mostrar productos en el HTML
function mostrarProductos() {
    let contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = ""; // Limpiar contenido antes de actualizar

    productos.forEach((producto, index) => {
        let div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button onclick="comprarProducto(${index})">Comprar</button>
            <div class="INC">
                <p>Cantidad: <span id="cantidad-${index}">${producto.cantidad}</span></p>
                <button onclick="cambiarCantidad(${index}, -1)"> - </button>
                <button onclick="cambiarCantidad(${index}, 1)"> + </button>
            </div>
        `;

        contenedor.appendChild(div);
    });
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(index, cambio) {
    let producto = productos[index];
    producto.cantidad += cambio;

    // Asegurarse de que la cantidad no sea menor que 1
    if (producto.cantidad < 1) {
        producto.cantidad = 1;
    }

    // Actualizar la cantidad en la interfaz
    document.getElementById(cantidad-${index}).textContent = producto.cantidad;
}

// Función de compra (puedes personalizarla)
function comprarProducto(index) {
    let producto = productos[index];
    let cantidad = producto.cantidad;

    if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        alert(Has comprado ${cantidad} unidad(es) de ${producto.nombre});
        producto.cantidad = 1; // Resetear la cantidad después de la compra
        mostrarProductos();
    } else {
        alert("No hay suficiente stock para realizar la compra.");
    }
}

// Función para guardar los productos en un archivo JSON
function guardarProductosJSON() {
    let jsonData = JSON.stringify(productos, null, 2);
    let blob = new Blob([jsonData], { type: "application/json" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "productos.json";
    a.click();
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);