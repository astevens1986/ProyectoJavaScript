// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado){

  //Guarda el resultado en una variable
  evento = resultado.eventos;

  var id = location.search.match(/id=(\d)*/)[1]

  //Busca el elemento en el arreglo
  evento = evento.find(function (element) {
    return element.id == id
  })

  //Crea un string que contenga el HTML que describe el detalle del evento
  
  //var html = `
  //<h2>${evento.nombre}</h2>
  //<p>${evento.fecha}</p>
  //<p>Lugar: ${evento.lugar}</p
  //<p>Descripción: ${evento.descripcion}</p>
  //<p>Costo: ${evento.precio}</p>
  //<p>Invitados: ${evento.invitados}</p>
  //`

  var html = `<div class="col-md-12">
  <div class="card flex-md-row mb-4 h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h3 class="mb-0">
        <a href="detalle.html?id=${evento.id}">${evento.nombre}</a>
      </h3>
      <div class="mb-1 text-muted">${evento.fecha + " " + evento.lugar}</div>
      <p class="card-text mb-auto">${evento.descripcion}</p>
      <p class="card-text mb-auto">Costo: ${evento.precio}</p>
      <p class="card-text mb-auto">Invitados: ${evento.invitados}</p>


    </div> 
  </div>
</div>`

  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("evento").innerHTML = html

});
});
