// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    //alert("Nombre obligatorio");
    document.getElementById("errornombres").innerHTML = "Nombre obligatorio";
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    //alert("Email inválido");
    document.getElementById("errorEmail").innerHTML = "Email inválido";
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    //alert("Contraseña obligatorio");
    document.getElementById("errorContrasena").innerHTML = "Contraseña obligatorio";
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    //alert("Confirmación no coincide");
    document.getElementById("errorConfirmacion").innerHTML = "Confirmación no coincide";
    return false;
  }

  if (formulario.tipo.value == "-1") {
    //alert("Es obligatorio colocar el tipo");
    document.getElementById("errorTipo").innerHTML = "Es obligatorio colocar el tipo";
    return false;
  }

  if (!formulario.acepto.checked) {
    //alert("Debe aceptar los términos y condiciones");
    document.getElementById("errorAcepto").innerHTML = "Debe aceptar los términos y condiciones";
    return false;
  }

  return false;
}
