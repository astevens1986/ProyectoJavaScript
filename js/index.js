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
 

  eventosPasados2.forEach(evento => {
    eventosPasados2HTML += "<div style=\"background-color: rgba(237,223,245,0.85);width: 25em; padding: 0.7em 1.5em; border-radius: 0.3em;     margin-left:8%; \">";
    eventosPasados2HTML += "<a style=\"font-weight: 550; font-size: 150%; border-top: 1em;\" href=\"pasados.html\">" + evento.nombre + "</a>"
    eventosPasados2HTML += "<p style=\"font-family:'Calibri'; font-size: 90%; color:grey;\">" + evento.fecha + "</p>"
    eventosPasados2HTML += "<p class=\"descr\">" + evento.descripcion + "</p>"
    eventosPasados2HTML += "</div>"
  });


  //Modifica el DOM agregando el html generado
  document.getElementById("pasados").insertAdjacentHTML("afterbegin", eventosPasados2HTML);

  //Crea un string que contenga el HTML que describe el detalle del evento
  var eventosProximos2HTML = ""

  //Recorre el arreglo y concatena el HTML para cada evento

  eventosProximos2.forEach(evento => {
    eventosProximos2HTML += "<div style=\"background-color: rgba(237,223,245,0.85);width: 25em; padding: 0.7em 1.5em; border-radius: 0.3em;     margin-left:8%; \">";
    eventosProximos2HTML += "<a style=\"font-weight: 550; font-size: 150%; border-top: 1em;\" href=\"pasados.html\">" + evento.nombre + "</a>"
    eventosProximos2HTML += "<p style=\"font-family:'Calibri'; font-size: 90%; color:grey;\">" + evento.fecha + "</p>"
    eventosProximos2HTML += "<p class=\"descr\">" + evento.descripcion + "</p>"
    eventosProximos2HTML += "</div>"
  });


  //Modifica el DOM agregando el html generado
  document.getElementById("proximos").insertAdjacentHTML("afterbegin", eventosProximos2HTML);
})

});
