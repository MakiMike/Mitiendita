class Producto {
    constructor(nombre, precio, imagen, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock || 100;
    }
}

// Lista de productos
let productos = [
    new Producto("Camisa Elegante", 25.00, "producto1.jpg"),
    new Producto("Jeans Clásicos", 40.00, "producto2.jpg")
];

// Función para mostrar productos en el HTML
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
        `;

        contenedor.appendChild(div);
    });
}

function agregarProducto(nombre, precio, imagen, stock) {
     productos.push(new Producto(nombre, precio, imagen, stock));
    mostrarProductos();
}

// Función de compra (puedes personalizarla)
function comprarProducto(index) {
    alert(`Has comprado: ${productos[index].nombre}`);
}

// Función para guardar los productos en un archivo JSON
function guardarProductosJSON() {
    let jsonData = JSON.stringify(productos, null, 2);
    let blob = new Blob([jsonData], { type: "application/json" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "productos.json";
    a.click();
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);
