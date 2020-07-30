// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var eventosProximos = [];
var eventosPasados = [];
var hoy;
var eventos;


$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "./info.json"
  }).done(function (resultado) {

  //Guarda el resultado en variables
  hoy = resultado.fechaActual;
  eventos = resultado.eventos;

  //Clasifica los eventos segun la fecha actual del JSON
  eventos.forEach(evento => {
    if (hoy < evento.fecha) {
      eventosProximos.push(evento);
    }
    else {
      eventosPasados.push(evento);
    }
  });

 
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  eventosPasados = eventosPasados.sort(function(x,y){
    if (x.fecha < y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos
  var eventosPasados2 = [];
			eventosPasados2.push(eventosPasados[0]);
			eventosPasados2.push(eventosPasados[1]);

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  eventosProximos = eventosProximos.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos
  var eventosProximos2 = [];
  eventosProximos2.push(eventosProximos[0]);
  eventosProximos2.push(eventosProximos[1]);

  //Crea un string que contenga el HTML que describe el detalle del evento
  var eventosPasados2HTML = ""

  //Recorre el arreglo y concatena el HTML para cada evento

 for(var j = 0; j < eventosPasados2.length; j++){
  eventosPasados2HTML += `<div class="col-md-6">
              <div class="card flex-md-row mb-4 h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                  <h3 class="mb-0">
                    <a href="detalle.html?id=${eventosPasados2[j].id}">${eventosPasados2[j].nombre}</a>
                  </h3>
                  <div class="mb-1 text-muted">${eventosPasados2[j].fecha}</div>
                  <p class="card-text mb-auto">${eventosPasados2[j].descripcion}
                  </p>
                 


                </div> 
              </div>
           </div>`
}



  //Modifica el DOM agregando el html generado
  document.getElementById("pasados").insertAdjacentHTML("afterbegin", eventosPasados2HTML);

  //Crea un string que contenga el HTML que describe el detalle del evento
  var eventosProximos2HTML = ""

  //Recorre el arreglo y concatena el HTML para cada evento


  for(var j = 0; j < eventosProximos2.length; j++){
    eventosProximos2HTML += `<div class="col-md-6">
                <div class="card flex-md-row mb-4 h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                      <a href="detalle.html?id=${eventosProximos2[j].id}">${eventosProximos2[j].nombre}</a>
                    </h3>
                    <div class="mb-1 text-muted">${eventosProximos2[j].fecha}</div>
                    <p class="card-text mb-auto">${eventosProximos2[j].descripcion}
                    </p>
                  </div> 
                </div>
             </div>`
  }







  //Modifica el DOM agregando el html generado
  document.getElementById("proximos").insertAdjacentHTML("afterbegin", eventosProximos2HTML);
})

});
