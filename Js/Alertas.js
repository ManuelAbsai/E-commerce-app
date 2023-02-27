function alertaAgregar() {
  Swal.fire({
    title: "Producto agregado",
    icon: "success",
    timer: 2500,
    backdrop: true,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

function correoEnviado() {
  Swal.fire({
    title: "Pronto te contactaremos",
    icon: "success",
    timer: 2500,
    backdrop: true,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

function correoInvalido() {
  Swal.fire({
    title: "Favor de agregar su correo",
    icon: "warning",
    timer: 2500,
    backdrop: true,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}


function alertaPago() {
  Swal.fire({
    title: "Pago completado",
    icon: "success",
    timer: 2500,
    backdrop: true,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  console.log('Fired');
}