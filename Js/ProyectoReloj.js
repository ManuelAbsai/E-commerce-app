// Variables declaradas
let carritoCompraStorage = JSON.parse(localStorage.getItem("carritoCompra"));
let clickBotonCompra = 0;
let suma = 0;
let baseCorreoUsuarios = [];

let relojDigital = {
  nombre: "relojDigital",
  precio: 600,
  cantidad: 1,
  id: 0,
};
let relojFormal = {
  nombre: "relojFormal",
  precio: 900,
  cantidad: 1,
  id: 1,
};
let gShock = {
  nombre: "gShock",
  precio: 1200,
  cantidad: 1,
  id: 2,
};
let relojBuceo = {
  nombre: "relojBuceo",
  precio: 1800,
  cantidad: 1,
  id: 3,
};

actualizarCarritoCompraDom();




fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => {generarComentariosDom(json.slice(0,5))})

function generarComentariosDom (json){
  for (i = 0; i < 5; i++) {

  document.getElementById("conócenosComentarios").innerHTML +=
  "<li>" + json[i].body + "</li>";

}};

//     Lista de productos
let productosTotal = [relojDigital, relojFormal, gShock, relojBuceo];

//       Funciones
document.querySelectorAll(".btnProducto").forEach((item) => {
  item.addEventListener("click", (e) => {
    clickBotonCompra = e.target.id;
    agregar(clickBotonCompra);

    //  notificación de compra
    alertaAgregar();
  });
});

function agregar(clickBotonCompra) {
  let productoAgregar = productosTotal[clickBotonCompra];
  guardar(productoAgregar);
}

function guardar(productoAgregar) {
  carritoCompraStorage = JSON.parse(localStorage.getItem("carritoCompra"));
  if (carritoCompraStorage == null) {
    carritoCompraStorage = [];
  }
  let productoRepetido = carritoCompraStorage.filter((elemento) => {
    return elemento.id === productoAgregar.id;
  });

  //El producto esta repetido, agregar la cantidad
  if (productoRepetido.length) {
    carritoCompraStorage[
      carritoCompraStorage.findIndex((elemento) => {
        return elemento.id == productoAgregar.id;
      })
    ].cantidad += 1;
  }
  //El elemento no se habia agregado antes, poner en el local st
  else {
    carritoCompraStorage.push(productoAgregar);
  }
  localStorage.setItem("carritoCompra", JSON.stringify(carritoCompraStorage));
  actualizarCarritoCompraDom();
  // limpiarCarrito();
}

//Funcion que actualiza los productos en el storage
function actualizarCarritoCompraDom() {
  let tablaProductos = document.getElementById("listapago");
  if (!tablaProductos) return;
  let elementoHijo = tablaProductos.lastElementChild;
  while (elementoHijo) {
    tablaProductos.removeChild(elementoHijo);
    elementoHijo = tablaProductos.lastElementChild;
  }
  carritoCompraStorage = JSON.parse(localStorage.getItem("carritoCompra"));
  carritoCompraStorage.forEach((elemento, index) => {
    //Insertar row de un producto en la tabla
    let carritoId = "carrito_" + elemento.id;
    let botonId = "btnBorrar_" + elemento.id;
    let content = `<th scope="row">${index + 1}</th>
          <td class="table__productos">
            <h6 class="title"> ${elemento.nombre} </h6>
          </td>
          <td class="table__precio"><p>${elemento.precio}</p></td>
          <td class="table__cantidad">
            <input type="number" min="1" value=${elemento.cantidad}>
            <button class="btn btn-danger" id ="${botonId}">x</button>
          </td>`;
    document.getElementById("listapago").innerHTML +=
      `<tr id="${carritoId}">${content}</tr>`;
    suma += elemento.precio * elemento.cantidad;
    document.getElementById("precioproductos").innerHTML = suma;
  });
  let elementos = document.querySelectorAll(".btn-danger");
  elementos.forEach((elemento) => {
    elemento.addEventListener("click", removeItemCarrito);
  });

}





//         Correo
const btnCorreo = document.querySelector(".btnCorreo");
btnCorreo.addEventListener("click", () => {
  let correoBase = document.getElementById("emailUsuario").value;
  console.log(correoBase);
  if (!correoBase) {
    correoInvalido();
    return;
  }

  localStorage.setItem("CorreoUsuario", correoBase);
  if (!correoBase) { 
    return;
  }
  correoEnviado();
});

function removeItemCarrito(e) {
  let id = e.target.id.replace(/[A-Za-z]+_/i, '');
  let etc= carritoCompraStorage.findIndex((elemento)=>{
    return elemento.id == id;
  });
  carritoCompraStorage.splice(etc, 1);
  localStorage.setItem("carritoCompra", JSON.stringify(carritoCompraStorage));
  document.getElementById('carrito_'+id).remove();
}


