class Producto {
    constructor(nombre, precio, imagen, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock || 10;
        this.cantidad = 0; 
  
    }
}

// Lista de productos
let productos = [
    new Producto("Camisa Elegante", 25.00, "producto1.jpg"),
    new Producto("Jeans Clásicos", 40.00, "producto2.jpg")
];

// Función para mostrar productos en el HTML
function mostrarProductos() {
    let contenedor = document.getElementById("producto");
    contenedor.innerHTML = ""; // Limpiar contenido antes de actualizar

    productos.forEach((producto, index) => {
        let div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="infoProd">
            <h3>${producto.nombre}</h3>
            <p id="cantidad">Cantidad: <span id="cantidad-${index}">${producto.cantidad}</span></p>
            <p>$${producto.precio.toFixed(2)}</p>
            </div>
            <div class="opciones"> 
            <button class="comprar" onclick="comprarProducto(${index})">Comprar</button> 
            <div class="INC">
                <button onclick="cambiarCantidad(${index}, -1)"> - </button>
                <button onclick="cambiarCantidad(${index}, 1)"> + </button>
            </div>
                
                </div>
                 <p id="subtotal-${index}">subtotal: $0 </p>
        `;

        contenedor.appendChild(div);
    });
}


function cambiarCantidad(index, cambio) {
    let producto = productos[index];
    producto.cantidad += cambio;
   

    if (producto.cantidad <= 0) {
        producto.cantidad = 0;
        
    }
    const subtotal = producto.precio * producto.cantidad;
    // Actualizar la cantidad en la interfaz
    document.getElementById(`subtotal-${index}`).textContent = `subtotal: $${subtotal}`;
    document.getElementById(`cantidad-${index}`).textContent = producto.cantidad;
}

function comprarProducto(index) {
    let producto = productos[index];
    let cantidad = producto.cantidad;

    if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        alert(`Has comprado ${cantidad} unidad(es) de ${producto.nombre}`);
        producto.cantidad = 0; // Resetear la cantidad después de la compra
        document.getElementById(`subtotal-${index}`).textContent= `subtotal: $0`
        mostrarProductos();
    } else {
        alert("No hay suficiente stock para realizar la compra.");
    }
}

function compraGeneral(){
    productos.forEach((producto,index) =>{
         cantidad = producto.cantidad;

        if (producto.stock >= cantidad && cantidad!=0) {
            producto.stock -= cantidad;
            alert(`Has comprado ${cantidad} unidad(es) de ${producto.nombre}`);
            producto.cantidad = 0; // Resetear la cantidad después de la compra
            document.getElementById(`subtotal-${index}`).textContent= `subtotal: $0`
            mostrarProductos();
        }
        if (cantidad == 0 || producto.stock >= cantidad) {
           
        } else {
            alert("No hay suficiente stock para realizar la compra.");
        }
    })
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


document.addEventListener("DOMContentLoaded", mostrarProductos);