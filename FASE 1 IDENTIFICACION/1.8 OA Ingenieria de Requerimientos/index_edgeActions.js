/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
/*favicon*/
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
/*favicon*/
/*css*/
var cssId = 'myCss';
      if (!document.getElementById(cssId))
      {
          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.id   = cssId;
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = 'css/style.css';
          link.media = 'all';
          head.appendChild(link);
      }
/*end-css*/

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         sym.getSymbol("mm-mc").stop(2);
         sym.$("titulo")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
         sym.getSymbol("intro-mc").play(1);
         sym.getSymbol("mm-mc").stop("intro");
         sym.getSymbol("tm-breadcrumb").stop("intro");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "") {
         	sym.playReverse();
         } else if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "definicion") {
         	sym.play("definicion");
         } else if (ctema == "clases") {
         	sym.play("clases");
         } else if (ctema == "etapas") {
         	sym.play("etapas");
         } else if (ctema == "comentarios") {
         	sym.play("comentarios");
         } else if (ctema == "ejemplos") {
         	sym.play("ejemplos");
         } 
         sym.getSymbol("intro-mc").stop(0);
         sym.getSymbol("definicion-mc").stop(0);
         sym.getSymbol("clases-mc").stop(0);
         sym.getSymbol("etapas-mc").stop(0);
         sym.getSymbol("comentarios-mc").stop(0);
         sym.getSymbol("ejemplos-mc").stop(0);
         //audios
         sym.getSymbol("intro-mc").$("introduccion")[0].pause();
         sym.getSymbol("intro-mc").$("introduccion")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-intro}", "click", function(sym, e) {
         sym.setVariable("tema","intro");
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();
         sym.getSymbol("definicion-mc").play(1);
         sym.getSymbol("mm-mc").stop("definicion");
         sym.getSymbol("tm-breadcrumb").stop("definicion");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         sym.getSymbol("clases-mc").play(1);
         sym.getSymbol("mm-mc").stop("clases");
         sym.getSymbol("tm-breadcrumb").stop("clases");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3900, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbol("mm-mc").play(1);
         sym.getSymbol("tm-breadcrumb").stop("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();
         sym.getSymbol("etapas-mc").play(1);
         sym.getSymbol("mm-mc").stop("etapas");
         sym.getSymbol("tm-breadcrumb").stop("etapas");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();
         sym.getSymbol("comentarios-mc").play(1);
         sym.getSymbol("mm-mc").stop("comentarios");
         sym.getSymbol("tm-breadcrumb").stop("comentarios");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();
         sym.getSymbol("ejemplos-mc").play(1);
         sym.getSymbol("mm-mc").stop("ejemplos");
         sym.getSymbol("tm-breadcrumb").stop("ejemplos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5900, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6900, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'opciones-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger}", "click", function(sym, e) {
         if (sym.getPosition() == 0 ) { sym.play(); }
         else { sym.playReverse(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger-a}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_mapa}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("mapa/index.html", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_ad}", "click", function(sym, e) {
         window.open("actividad/index.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_bibliografia}", "click", function(sym, e) {
         window.open("materiales/bibliografia.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_glosario}", "click", function(sym, e) {
         window.open("materiales/glosario.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_oa}", "click", function(sym, e) {
         window.open("oa.zip", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_pdf}", "click", function(sym, e) {
         window.open("materiales/AP01_OA_IngReq.pdf", "_blank");

      });
      //Edge binding end

   })("opciones-mc");
   //Edge symbol end:'opciones-mc'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tm-breadcrumb'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn-home}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${inicio}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();
         sym.stop("inicio");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().playReverse();
         sym.stop("intro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","clases");
         sym.getComposition().getStage().playReverse();
         sym.stop("clases");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${definicion}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","definicion");
         sym.getComposition().getStage().playReverse();
         sym.stop("definicion");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","etapas");
         sym.getComposition().getStage().playReverse();
         sym.stop("etapas");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${comentarios}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","comentarios");
         sym.getComposition().getStage().playReverse();
         sym.stop("comentarios");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ejemplos}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","ejemplos");
         sym.getComposition().getStage().playReverse();
         sym.stop("ejemplos");

      });
      //Edge binding end

   })("tm-breadcrumb");
   //Edge symbol end:'tm-breadcrumb'

   //=========================================================
   
   //Edge symbol: 'mm-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${mm_intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_definicion}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","definicion");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_clases}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","clases");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_etapas}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","etapas");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_comentarios}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","comentarios");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_ejemplos}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","ejemplos");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

   })("mm-mc");
   //Edge symbol end:'mm-mc'

   //=========================================================
   
   //Edge symbol: 'intro-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("intro-mc");
   //Edge symbol end:'intro-mc'

   //=========================================================
   
   //Edge symbol: 'definicion-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("definicion-mc");
   //Edge symbol end:'definicion-mc'

   //=========================================================
   
   //Edge symbol: 'clases-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${clases-sm-funcionales}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("clases-popups").play("funcionales");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases-sm-no-funcionales}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("clases-popups").play("no-funcionales");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases-sm-caracteristicas}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("clases-popups").play("caracteristicas");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("clases-mc");
   //Edge symbol end:'clases-mc'

   //=========================================================
   
   //Edge symbol: 'clases-popups'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2200, function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4200, function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         if (sym.getPosition() > 2000 && sym.getPosition() < 5200) {
         	sym.stop(2000);
         } else {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases-popup-no-funcional-producto-btn}", "click", function(sym, e) {
         sym.play("producto");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases-popup-no-funcional-organizaciones-btn}", "click", function(sym, e) {
         sym.play("organizaciones");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clases-popup-no-funcional-externos-btn}", "click", function(sym, e) {
         sym.play("externos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("clases-popups");
   //Edge symbol end:'clases-popups'

   //=========================================================
   
   //Edge symbol: 'etapas-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         if (sym.getPosition() > 1250) { sym.playReverse(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         if (sym.getPosition() < 1250) { sym.play(); }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-2-sm-validacion}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("etapas-popup").play("validacion");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-2-sm-levantamiento}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("etapas-popup").play("levantamiento");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-2-sm-definicion}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("etapas-popup").play("definicion");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-2-sm-analisis}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("etapas-popup").play("analisis");

      });
      //Edge binding end

   })("etapas-mc");
   //Edge symbol end:'etapas-mc'

   //=========================================================
   
   //Edge symbol: 'etapas-popup'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         if (sym.getPosition() > 1250 && sym.getPosition() < 4000) {
         	sym.stop(1000);
         } else if (sym.getPosition() > 4750 && sym.getPosition() < 6000) {
         	sym.stop(4750);
         } else if (sym.getPosition() > 7000 && sym.getPosition() < 8250) {
         	sym.stop(7000);
         } else if (sym.getPosition() > 9250) {
         	sym.stop(9250);
         } else {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bwCopy}", "click", function(sym, e) {
         if (sym.getPosition() == 1750 || sym.getPosition() == 7750) { sym.playReverse(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fwCopy}", "click", function(sym, e) {
         if (sym.getPosition() == 1500 || sym.getPosition() == 7500) { sym.play(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-identificacion-but}", "click", function(sym, e) {
         sym.play("identificacion");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         var tpts = sym.getVariable("tpt");
         if ( tpts == "entrevistas" ) {
         	sym.stop("entrevistas");
         } else if ( tpts == "prototipos" ) {
         	sym.stop("prototipos");
         } else if ( tpts == "vistas" ) {
         	sym.stop("vistas");
         } else if ( tpts == "reuniones" ) {
         	sym.stop("reuniones");
         } else if ( tpts == "narrativa" ) {
         	sym.stop("narrativa");
         } 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but_vistas}", "click", function(sym, e) {
         sym.setVariable("tpt","vistas");
         if (sym.getPosition() == 2250) {
         	sym.play();
         } else {
         	sym.playReverse("tp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but_reuniones}", "click", function(sym, e) {
         sym.setVariable("tpt","reuniones");
         if (sym.getPosition() == 2250) {
         	sym.play();
         } else {
         	sym.playReverse("tp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but_prototipos}", "click", function(sym, e) {
         sym.setVariable("tpt","prototipos");
         if (sym.getPosition() == 2250) {
         	sym.play();
         } else {
         	sym.playReverse("tp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but_narrativa}", "click", function(sym, e) {
         sym.setVariable("tpt","narrativa");
         if (sym.getPosition() == 2250) {
         	sym.play();
         } else {
         	sym.playReverse("tp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but_entrevistas}", "click", function(sym, e) {
         sym.setVariable("tpt","entrevistas");
         if (sym.getPosition() == 2250) {
         	sym.play();
         } else {
         	sym.playReverse("tp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-levantamiento-tecnicas-but}", "click", function(sym, e) {
         sym.play("tecnicas");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-analisis-clasificacion-but}", "click", function(sym, e) {
         sym.stop("clasificacion");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-analisis-modelado-but}", "click", function(sym, e) {
         sym.stop("modelado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-analisis-diseno-but}", "click", function(sym, e) {
         sym.stop("diseno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-analisis-negociacion-but}", "click", function(sym, e) {
         sym.stop("negociacion");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-definicion-documento-but}", "click", function(sym, e) {
         sym.stop("documento");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-definicion-formatoe-but}", "click", function(sym, e) {
         sym.stop("formatoe");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-definicion-formatoc-but}", "click", function(sym, e) {
         sym.stop("formatoc");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-validacion-but_criterios}", "click", function(sym, e) {
         sym.stop("criterios");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-validacion-but_revision}", "click", function(sym, e) {
         sym.stop("revision");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${etapas-popup-validacion-but_validaciones}", "click", function(sym, e) {
         sym.stop("validaciones");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8371, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("etapas-popup");
   //Edge symbol end:'etapas-popup'

   //=========================================================
   
   //Edge symbol: 'comentarios-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("comentarios-mc");
   //Edge symbol end:'comentarios-mc'

   //=========================================================
   
   //Edge symbol: 'ejemplos-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ejemplos-funcionales-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("ejemplos-popup").play("funcionales");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ejemplos-control-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("ejemplos-popup").play("control");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ejemplos-consultorio-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("ejemplos-popup").play("consultorio");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ejemplos-mc");
   //Edge symbol end:'ejemplos-mc'

   //=========================================================
   
   //Edge symbol: 'ejemplos-popup'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2200, function(sym, e) {
         sym.stop();
         sym.getSymbol("ej3-mc").$("ketsa")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         if (sym.getSymbol("ej3-mc").getPosition() == 0) {
         	sym.getSymbol("ej3-mc").play(1);
         } else {
         	sym.getSymbol("ej3-mc").play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("ejemplos-popup").getSymbol("ej3-mc").$("ketsa")[0].pause();
         sym.getComposition().getStage().getSymbol("ejemplos-popup").getSymbol("ej3-mc").$("ketsa")[0].currentTime() = 0;
         sym.getSymbol("ej3-mc").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ejemplos-popup-consultorio-c2-but}", "click", function(sym, e) {
         sym.play("c2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         if (sym.getPosition() > 3071) {
         	sym.stop(3070);
         } else if (sym.getPosition() < 3071 || sym.getPosition() > 2250){
         	sym.playReverse(2999);
         	sym.getSymbol("ej3-mc").stop(0);
         } else {
         sym.getSymbol("ej3-mc").$("ketsa")[0].pause();
         	sym.playReverse();
         }

      });
      //Edge binding end

   })("ejemplos-popup");
   //Edge symbol end:'ejemplos-popup'

   //=========================================================
   
   //Edge symbol: 'ej3-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("ejemplos-popup").play("c2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$("ketsa")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-play}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir una pista de audio 
         sym.$("ketsa")[0].play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-pause}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Pausar una pista de audio 
         sym.$("ketsa")[0].pause();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-stop}", "click", function(sym, e) {
         sym.stop(0);
         
         // Saltar a un tiempo de reproducción (en segundos) 
         sym.$("ketsa")[0].currentTime = 0;
         
         // Pausar una pista de audio 
         sym.$("ketsa")[0].pause();

      });
      //Edge binding end

   })("ej3-mc");
   //Edge symbol end:'ej3-mc'

   //=========================================================
   
   //Edge symbol: 'p3mc'
   (function(symbolName) {   
   
   })("p3mc");
   //Edge symbol end:'p3mc'

   //=========================================================
   
   //Edge symbol: 'p4-mc'
   (function(symbolName) {   
   
   })("p4-mc");
   //Edge symbol end:'p4-mc'

   //=========================================================
   
   //Edge symbol: 'bubesloop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("bubesloop");
   //Edge symbol end:'bubesloop'

   //=========================================================
   
   //Edge symbol: 'globo-loop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("globo-loop");
   //Edge symbol end:'globo-loop'

   //=========================================================
   
   //Edge symbol: 'heli-loop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("heli-loop");
   //Edge symbol end:'heli-loop'

   //=========================================================
   
   //Edge symbol: 'dp1mc'
   (function(symbolName) {   
   
   })("dp1mc");
   //Edge symbol end:'dp1mc'

   //=========================================================
   
   //Edge symbol: 'dp2mc'
   (function(symbolName) {   
   
   })("dp2mc");
   //Edge symbol end:'dp2mc'

   //=========================================================
   
   //Edge symbol: 'dp1ojos-loop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("dp1ojos-loop");
   //Edge symbol end:'dp1ojos-loop'

   //=========================================================
   
   //Edge symbol: 'dp2mc-ojosloop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("dp2mc-ojosloop");
   //Edge symbol end:'dp2mc-ojosloop'

   //=========================================================
   
   //Edge symbol: 'cp1-mc'
   (function(symbolName) {   
   
   })("cp1-mc");
   //Edge symbol end:'cp1-mc'

   //=========================================================
   
   //Edge symbol: 'ep2mc1'
   (function(symbolName) {   
   
   })("ep2mc1");
   //Edge symbol end:'ep2mc1'

   //=========================================================
   
   //Edge symbol: 'cp22-mc'
   (function(symbolName) {   
   
   })("cp22-mc");
   //Edge symbol end:'cp22-mc'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-196247413");