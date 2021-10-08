var aciertos = new Array();
var errores = new Array();
var pregunta = 0;
var pregunta_b = 0;
var conaudio=1;
var Total = 9;

$(document).ready(function() {

  $('.toggle').toggles({
    drag: true, // allow dragging the toggle between positions
    click: true, // allow clicking on the toggle
    text: {
      on: 'SI', // text for the ON position
      off: 'NO' // and off
    },
    'on': true,
  });

  $('.toggle').on('toggle', function (e, active) {
    if (active) {
      conaudio=1;
    } else {
      conaudio=2;
    }
  });

  $('.btn_iniciar').on('click',function(event) {
    $('#portada').fadeOut('slow');
    $('#preguntas_1').fadeIn();
  });

  setTimeout(function() {
    $('#portada').fadeOut('slow');
    $('#preguntas_1').fadeIn();
  },1500)

  $('body').on('click','.bt__jugar-de-nuevo',function(){
    $('#test').submit();
  })

  $('#preguntas_1 .respuesta_a').on('click', verificar_respuesta);
  $('#preguntas_2 .respuesta_b').on('click', verificar_respuesta_b);
  $('#preguntas_3 .respuesta_c').on('click', verificar_respuesta_c);

});

var verificar_respuesta = function() {
  var PREG = $(this).data('preg');

  if( !$('#'+PREG).hasClass('verificada') && pregunta<6) {
    $('#'+PREG).addClass('verificada');

    var dataRESP = $(this).data('valor');

    $('audio')[0].pause();
    $('audio')[0].load();

    if(dataRESP) {
      $(this).addClass('buena');
      aciertos.push(pregunta);
      if(conaudio<2) $('audio')[1].play();
    } else {
      $(this).addClass('mala');
      errores.push(pregunta);
      if(conaudio<2) $('audio')[2].play();
    }

    pregunta++;

  }

  //console.log('pregunta = ',pregunta)

  if(pregunta>4) {
    setTimeout(function() {
      $('#preguntas_1').fadeOut();
      $('#preguntas_2').fadeIn();
    }, 1500);
  }

}

var verificar_respuesta_b = function() {
  var PREG = $(this).data('preg');

  if( !$('#'+PREG).hasClass('verificada') && pregunta_b<4) {
    $('#'+PREG).addClass('verificada');

    var dataRESP = $(this).data('valor');

    $('audio')[0].pause();
    $('audio')[0].load();

    if(dataRESP) {
      $('.r'+PREG).addClass('positivo');
      aciertos.push(pregunta_b);
      if(conaudio<2) $('audio')[1].play();
    } else {
      $('.r'+PREG).addClass('negativo');
      errores.push(pregunta_b);
      if(conaudio<2) $('audio')[2].play();
    }

    pregunta_b++;

  }

  if(pregunta_b>2) {
    setTimeout(function() {
      $('#preguntas_2').fadeOut();
      $('#preguntas_3').fadeIn();
    }, 1500);
  }

}

var verificar_respuesta_c = function() {
  var PREG = $(this).data('preg');

  if( !$('#'+PREG).hasClass('verificada')) {
    $('#'+PREG).addClass('verificada');

    var dataRESP = $(this).data('valor');

    $('audio')[0].pause();
    $('audio')[0].load();

    if(dataRESP) {
      $(this).addClass('cbuena');
      aciertos.push(pregunta_b);
      if(conaudio<2) $('audio')[1].play();
    } else {
      $(this).addClass('cmala');
      errores.push(pregunta_b);
      if(conaudio<2) $('audio')[2].play();
    }

  }

  setTimeout(function() {
    resultados();
  }, 1500);


}

var resultados = function() {

  $('#preguntas_3').fadeOut();
  $('#resultados').fadeIn();

  if(conaudio<2) {
    $('audio')[1].pause();
    $('audio')[2].pause();
    $('audio')[3].load();
    $('audio')[4].load();
  }

  var numeroPreguntas=Total;
  var buenas=aciertos.length;

  var estadistica__puntaje = '';
  var estadistica__porcentaje = '';
  var estadistica__mensaje = '';

  estadistica__puntaje = buenas + " de " + numeroPreguntas;
  estadistica__porcentaje = Math.floor(buenas*100/numeroPreguntas);

  if(estadistica__porcentaje <= 70)
    estadistica__mensaje = "Lamento los pocos aciertos.";
  if(estadistica__porcentaje > 70 && estadistica__porcentaje <= 99)
    estadistica__mensaje = "Buen trabajo!";
  if(estadistica__porcentaje == 100)
    estadistica__mensaje = "¡Excelente! Te felicito, has logrado el mejor puntaje";

  $('.estadistica__numero').text(estadistica__puntaje);
  $('.estadistica__porcentaje').text(estadistica__porcentaje+'%');
  $('.estadistica__mensaje p').html(estadistica__mensaje);

  if(conaudio) {
    $('audio')[0].pause();
    $('audio')[1].pause();
    $('audio')[2].pause();
    if(estadistica__porcentaje > 85) $('audio')[3].play();
    else $('audio')[4].play();
  }
} /* -- fin resultados --*/
