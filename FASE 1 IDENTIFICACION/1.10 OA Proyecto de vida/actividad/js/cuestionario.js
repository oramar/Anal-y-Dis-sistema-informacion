var pos=0;

var conaudio=1;
var aleluya=0;

var preguntas = new Array();
var aciertos = new Array();
var errores = new Array();
var listado = new Array(1,2,3,4,5,6,7,8,9);
var Total = listado.length;

var fraccion = (1/Total)*100;
var fraccion_global = 0;

var puestos = new Array('uno','dos','tres','cuatro');
var letras = {'uno':'A. ','dos':'B. ','tres':'C. ','cuatro':'D. '};

$(document).ready(function() {

  $('#resultados').hide();

  $('body').on('click','.bt__jugar-de-nuevo',function(){
    $('#test').submit();
  })


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

  /**************************/
  for(i=0; i<Total; i++) {
    aleatorio = Math.floor(Math.random()*(listado.length));
    seleccion = listado[aleatorio];
    preguntas.push(seleccion);
    listado.splice(aleatorio, 1);
  }

  for(i=1; i<=Total; i++) {
    aux = [];
    puestos = ['uno','dos','tres','cuatro'];

    for(j=0;j<4;j++) {
      aleatorio = Math.floor(Math.random()*(puestos.length));
      seleccion = puestos[aleatorio];
      aux.push(seleccion);
      puestos.splice(aleatorio, 1);
    }

    var posicion=0;
    if(!$('#p'+i+' .opciones').hasClass('norandom')) {
      $('#p'+i+' .opciones div').each(function() {
        $(this).addClass(aux[posicion]);
        $(this).find('span').html(letras[aux[posicion]]);
        posicion++;
      })
    }
  }
  /**************************/

    $('#p'+preguntas[pos]).fadeIn();
    $('.respuesta').bind('click',verificar_respuesta);
    
    $('body').on('click','.btn_resp_multiple',function() {
      $('.c'+pos).removeClass('normal');
      if(!$('#p9opt1').hasClass('active') && !$('#p9opt2').hasClass('active') && !$('#p9opt3').hasClass('active') && !$('#p9opt4').hasClass('active')) {
          alert('Debe seleccionar al menos una opci??n de respuesta.');
        return false;
      }
      if(!$('#p9opt1').hasClass('active') && $('#p9opt2').hasClass('active') && !$('#p9opt3').hasClass('active') && $('#p9opt4').hasClass('active')) {
        aciertos.push(pos);
        document.getElementById('personaje').className = 'gano';
        $('#flecha').animate({"top": "+=383px","left":"-=407px"}, 500);
        $('.c'+pos).addClass('gano');
        if(conaudio<2) $('audio')[1].play();
      } else {
          $('#flecha').animate({"top": "+=302px","left":"-=311px"}, 500);
          $('.c'+pos).addClass('perdio');
          if(conaudio<2) $('audio')[2].play();
          document.getElementById('personaje').className = 'perdio';
      }
      $('.respuesta').unbind('click');
      setTimeout(siguiente_pregunta,3500);
    })
    
});

var verificar_respuesta = function() {
  var PREG = $(this).data('preg');

  if( !$('#'+PREG).hasClass('verificada') && PREG!='p9') {
    $('#'+PREG).addClass('verificada');

    var dataRESP = $(this).data('valor');

    $('audio')[0].pause();
    $('audio')[0].load();
    $('.c'+pos).removeClass('normal');

    if(dataRESP) {
      $(this).addClass('buena');
      aciertos.push(pos);
      document.getElementById('personaje').className = 'gano';
      $('#flecha').animate({"top": "+=383px","left":"-=407px"}, 500);
      $('.c'+pos).addClass('gano');
      if(conaudio<2) $('audio')[1].play();
    } else {
      $(this).addClass('mala');
      errores.push(pos);
      $('#flecha').animate({"top": "+=302px","left":"-=311px"}, 500);
      $('.c'+pos).addClass('perdio');
      if(conaudio<2) $('audio')[2].play();
      document.getElementById('personaje').className = 'perdio';
    }

    $('.respuesta').unbind('click');
    setTimeout(siguiente_pregunta,3500);

  } else if(PREG == 'p9') {
        var self=$(this);
        self.toggleClass('active');
  }

} /* --- fin verificar_respuesta() */


var siguiente_pregunta = function() {

    if(conaudio<2) {
      $('audio')[1].pause();
      $('audio')[2].pause();
    }

    $('#flecha').css({'left':'1100px','top':'-68px'});

    //$('.respuesta').removeClass();
    $('#p'+preguntas[pos]).fadeOut('slow');

    pos++;

    if(pos>(Total-1)) {
      resultados();
      return false;
    }

    document.getElementById('personaje').className = 'default';

    if(conaudio<2) {
      $('audio')[0].play();
      $('audio')[1].load();
      $('audio')[2].load();
      $('audio')[3].load();
      $('audio')[4].load();
    }

    $('#p'+preguntas[pos]).fadeIn();
    $('.respuesta').bind('click',verificar_respuesta);
} /* --- fin siguiente pregunta */

var resultados = function() {

  $('.opcion').hide();
  $('#preguntas').addClass('fondo_vacio');
  $('#resultados').fadeIn();
  $('#personaje').hide();
  $('.instrucciones').hide();

  $('#cinta').hide();

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
    estadistica__mensaje = "Ha tenido pocos aciertos. ??Debe estudiar m??s!";
  if(estadistica__porcentaje > 70 && estadistica__porcentaje <= 99)
    estadistica__mensaje = "??Buen trabajo!";
  if(estadistica__porcentaje == 100)
    estadistica__mensaje = "!Felicidades?? ha logrado el mejor puntaje";


  $('.estadistica__numero').text(estadistica__puntaje);
  $('.estadistica__porcentaje').text(estadistica__porcentaje+'%');
  $('.estadistica__mensaje p').html(estadistica__mensaje);

  var fraccion = buenas / Total;

  $('.resultados.circle').circleProgress({
      value: fraccion,
      size:150
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(parseInt(100 * fraccion) + '<i>%</i>');
  });

  if(conaudio) {
    $('audio')[0].pause();
    $('audio')[1].pause();
    $('audio')[2].pause();
    if(estadistica__porcentaje > 85) $('audio')[3].play();
    else $('audio')[4].play();
  }
} /* -- fin resultados --*/
