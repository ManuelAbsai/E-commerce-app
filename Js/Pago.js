const tarjeta = document.querySelector("#tarjeta"),
  btnAbrirFormulario = document.querySelector("#btn-abrir-formulario"),
  formulario = document.querySelector("#formulario-tarjeta"),
  numeroTarjeta = document.querySelector("#tarjeta .numero"),
  nombreTarjeta = document.querySelector("#tarjeta .nombre"),
  logoMarca = document.querySelector("#logo-marca"),
  firma = document.querySelector("#tarjeta .firma p"),
  mesExpiracion = document.querySelector("#tarjeta .mes"),
  yearExpiracion = document.querySelector("#tarjeta .year");
ccv = document.querySelector("#tarjeta .ccv");

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
  if (tarjeta.classList.contains("active")) {
    tarjeta.classList.remove("active");
  }
};

// * Rotacion tarjeta
tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

// * Abrir formulario
btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toggle("active");
  formulario.classList.toggle("active");
});

// * Select mes
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

// * Select  año
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

// *  numero  tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
    // Eliminamos espacios
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "")
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput == "") {
    numeroTarjeta.textContent = "#### #### #### ####";

    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "/Proyecto/Proyecto reloj 2/Img/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "/Proyecto/Proyecto reloj 2/Img/mastercard.png";
    logoMarca.appendChild(imagen);
  }

  // Voltear frente.
  mostrarFrente();
});

// *  nombre de tarjeta
formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == "") {
    nombreTarjeta.textContent = "NOMBRE";
  }

  mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener("keyup", () => {
  if (!tarjeta.classList.contains("active")) {
    tarjeta.classList.toggle("active");
  }

  formulario.inputCCV.value = formulario.inputCCV.value
    // Eliminar los espacios
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "");

  ccv.textContent = formulario.inputCCV.value;
});


//Boton de pago 

document.getElementById("btnPago").addEventListener("click", function() {
  alertaPago();
});