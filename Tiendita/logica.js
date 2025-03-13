class Producto {
    constructor(nombre, precio, imagen, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }
}

let productos = [];

function agregarProducto(nombre, precio, imagen, stock) {
    let nuevoProducto = new Producto(nombre, precio, imagen);
    productos.push(nuevoProducto);
    mostrarProductos();
}

function mostrarProductos() {
    let contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = ""; // Limpiar antes de volver a mostrar

    productos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        `;

        contenedor.appendChild(div);
    });
}

// Agregamos productos de ejemplo
agregarProducto("pantalon", 400, "https://via.placeholder.com/100", 100);
agregarProducto("camisa", 220, "https://via.placeholder.com/100", 100);
