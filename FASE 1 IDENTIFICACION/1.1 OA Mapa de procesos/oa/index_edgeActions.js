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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         
         // Reproducir una pista de audio 
         sym.$("titulo")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_intro}", "click", function(sym, e) {
         sym.setVariable("tema","intro");
         sym.play();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("intro");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();
         sym.getSymbol("intro-mc").play(1);
         //sym.getSymbol("intro-mc").$("introduccion")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4888, function(sym, e) {
         sym.getSymbol("intro-mc").$("introduccion")[0].currentTime = 0;
         sym.getSymbol("intro-mc").$("introduccion")[0].pause();
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();
         sym.getSymbol("funcional-mc").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();
         sym.getSymbol("mapa-mc").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.stop();
         sym.getSymbol("identificar-mc").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();
         sym.getSymbol("caracterizar-mc").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         sym.stop();
         sym.getSymbol("elab-mc").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5905, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }
         sym.getSymbol("funcional-mc").$("organizacionfuncionalvsprocesos")[0].currentTime = 0;
         sym.getSymbol("funcional-mc").$("organizacionfuncionalvsprocesos")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6893, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }
         sym.getSymbol("mapa-mc").$("mapadeprocesos")[0].currentTime = 0;
         sym.getSymbol("mapa-mc").$("mapadeprocesos")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7876, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8891, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9892, function(sym, e) {
         var ctema = sym.getVariable("tema");
         if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "funcional") {
         	sym.play("funcional");
         } else if (ctema == "mapa") {
         	sym.play("mapa");
         } else if (ctema == "identificar") {
         	sym.play("identificar");
         } else if (ctema == "caracterizar") {
         	sym.play("caracterizar");
         } else if (ctema == "elab") {
         	sym.play("elab");
         } else if (ctema == "") {
         	sym.playReverse("puntos");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.getSymbol("mm-mc").play(1);
         sym.$("titulo")[0].currentTime = 0;
         sym.$("titulo")[0].pause();
         sym.getSymbol("intro-mc").stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mm-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${mm_intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().playReverse();
         sym.stop("intro");
         sym.getComposition().getStage().getSymbol("intro-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("intro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_funcional}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","funcional");
         sym.getComposition().getStage().playReverse();
         sym.stop("funcional");
         sym.getComposition().getStage().getSymbol("funcional-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("funcional");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_mapa}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","mapa");
         sym.getComposition().getStage().playReverse();
         sym.stop("mapa");
         sym.getComposition().getStage().getSymbol("mapa-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("mapa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_identificar}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","identificar");
         sym.getComposition().getStage().playReverse();
         sym.stop("identificar");
         sym.getComposition().getStage().getSymbol("identificar-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("identificar");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_caracterizar}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","caracterizar");
         sym.getComposition().getStage().playReverse();
         sym.stop("caracterizar");
         sym.getComposition().getStage().getSymbol("caracterizar-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("caracterizar");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_elab}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","elab");
         sym.getComposition().getStage().playReverse();
         sym.stop("elab");
         sym.getComposition().getStage().getSymbol("elab-mc").stop(0);
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("elab");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mm-mc");
   //Edge symbol end:'mm-mc'

   //=========================================================
   
   //Edge symbol: 'intro-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("intro-mc");
   //Edge symbol end:'intro-mc'

   //=========================================================
   
   //Edge symbol: 'funcional-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         //sym.$("organizacionfuncionalvsprocesos")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${funcionnal-1-btn_vertical}", "click", function(sym, e) {
         sym.stop("vertical");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${funcionnal-1-btn_horizontal}", "click", function(sym, e) {
         sym.stop("horizontal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         sym.stop("2");
         sym.$("organizacionfuncionalvsprocesos")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${funcional-2-popup-btn}", "click", function(sym, e) {
         sym.stop("2-popup");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         var pos = sym.getPosition();
         if (pos < 1000 ) {
         sym.play(1);
         } else {
         sym.stop("2");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("funcional-mc");
   //Edge symbol end:'funcional-mc'

   //=========================================================
   
   //Edge symbol: 'mapa-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         //sym.$("mapadeprocesos")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mapa-mc");
   //Edge symbol end:'mapa-mc'

   //=========================================================
   
   //Edge symbol: 'identificar-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("identificar-mc");
   //Edge symbol end:'identificar-mc'

   //=========================================================
   
   //Edge symbol: 'identificar-sm'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${identificar-sm_bloques}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("identificar-mc").stop("bloques");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${identificar-sm_integrado}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("identificar-mc").stop("integrado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${identificar-sm_cadena}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("identificar-mc").stop("cadena");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${identificar-sm_aleman}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("identificar-mc").stop("aleman");

      });
      //Edge binding end

   })("identificar-sm");
   //Edge symbol end:'identificar-sm'

   //=========================================================
   
   //Edge symbol: 'caracterizar-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_ficha}", "click", function(sym, e) {
         sym.stop("3-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_flujograma}", "click", function(sym, e) {
         sym.stop("3-2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_modelop}", "click", function(sym, e) {
         sym.stop("3-3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_modeloc}", "click", function(sym, e) {
         sym.stop("3-4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_modeloa}", "click", function(sym, e) {
         sym.stop("3-5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-3-sm_modelos}", "click", function(sym, e) {
         sym.stop("3-6");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         if (sym.getPosition() < 1500 ) {sym.play();}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup2}", "click", function(sym, e) {
         sym.stop("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-modelos}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("seis");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ficha-de-procesos}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("uno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-flujograma}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("dos");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-modelop}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("tres");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-modeloc}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("cuatro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-modeloa}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("cinco");

      });
      //Edge binding end

   })("caracterizar-mc");
   //Edge symbol end:'caracterizar-mc'

   //=========================================================
   
   //Edge symbol: 'elab-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${elab-btn_popup1}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-btn_popup2}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bwCopy}", "click", function(sym, e) {
         if (sym.getPosition() > 1500) { sym.stop(1500);}
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fwCopy}", "click", function(sym, e) {
         if (sym.getPosition() < 1750) { sym.play(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-btn_1}", "click", function(sym, e) {
         sym.stop("2-2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-btn_2}", "click", function(sym, e) {
         sym.stop("2-2-2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-btn_3}", "click", function(sym, e) {
         sym.stop("2-2-3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-btn_4}", "click", function(sym, e) {
         sym.stop("2-2-4-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-btn_5}", "click", function(sym, e) {
         sym.stop("2-2-5-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         sym.stop("2-2-4-2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         sym.stop("2-2-4-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fwCopy2}", "click", function(sym, e) {
         var cutime = sym.getPosition();
         if (cutime == 3000) {
         	sym.stop("2-2-5-2");
         } else if (cutime == 3250) {
         	sym.stop("2-2-5-3");
         } else {}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bwCopy2}", "click", function(sym, e) {
         var cutime = sym.getPosition();
         if (cutime == 3500) {
         	sym.stop("2-2-5-2");
         } else if (cutime == 3250) {
         	sym.stop("2-2-5-1");
         } else {}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup1-btn_apoyo}", "click", function(sym, e) {
         sym.$("elab-popup1-globo_apoyo").show();
         sym.$("elab-popup1-globo_estrategicos").hide();
         sym.$("elab-popup1-globo_misionales").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup1-btn_estrategicos}", "click", function(sym, e) {
         sym.$("elab-popup1-globo_apoyo").hide();
         sym.$("elab-popup1-globo_estrategicos").show();
         sym.$("elab-popup1-globo_misionales").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup1-btn_misionales}", "click", function(sym, e) {
         sym.$("elab-popup1-globo_apoyo").hide();
         sym.$("elab-popup1-globo_estrategicos").hide();
         sym.$("elab-popup1-globo_misionales").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-glb_5-1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("nueve");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-glb_4-1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("ocho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-ill1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("siete");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-glb_5-3ill}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("diez");

      });
      //Edge binding end

   })("elab-mc");
   //Edge symbol end:'elab-mc'

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

      Symbol.bindElementAction(compId, symbolName, "${funcional}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","funcional");
         sym.getComposition().getStage().playReverse();
         sym.stop("funcional");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mapa}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","mapa");
         sym.getComposition().getStage().playReverse();
         sym.stop("mapa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${identificar}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","identificar");
         sym.getComposition().getStage().playReverse();
         sym.stop("identificar");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","caracterizar");
         sym.getComposition().getStage().playReverse();
         sym.stop("caracterizar");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","elab");
         sym.getComposition().getStage().playReverse();
         sym.stop("elab");

      });
      //Edge binding end

   })("tm-breadcrumb");
   //Edge symbol end:'tm-breadcrumb'

   //=========================================================
   
   //Edge symbol: 'circles-loop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play(501);

      });
      //Edge binding end

   })("circles-loop");
   //Edge symbol end:'circles-loop'

   //=========================================================
   
   //Edge symbol: 'bloques-smc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupita1}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("bloques-smc");
   //Edge symbol end:'bloques-smc'

   //=========================================================
   
   //Edge symbol: 'integrado-smc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${lupita12}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup2}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("integrado-smc");
   //Edge symbol end:'integrado-smc'

   //=========================================================
   
   //Edge symbol: 'cadena-smc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupita13}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup3}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("cadena-smc");
   //Edge symbol end:'cadena-smc'

   //=========================================================
   
   //Edge symbol: 'aleman-smc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup4}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupita14}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("aleman-smc");
   //Edge symbol end:'aleman-smc'

   //=========================================================
   
   //Edge symbol: 'caracterizarill1-smc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup5}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-1-il1}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("caracterizarill1-smc");
   //Edge symbol end:'caracterizarill1-smc'

   //=========================================================
   
   //Edge symbol: 'caracterizar2-smc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup6}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-2-t1}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("caracterizar2-smc");
   //Edge symbol end:'caracterizar2-smc'

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
         window.open("materiales/AP01_OA_MaPro.pdf", "_blank");

      });
      //Edge binding end

   })("opciones-mc");
   //Edge symbol end:'opciones-mc'

   //=========================================================
   
   //Edge symbol: 'popups-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 350, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 950, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1050, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1650, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2100, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2350, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3050, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3150, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${caracterizar-popup-3-modelos}", "click", function(sym, e) {
         window.open("materiales/plantilla_caracterizacion_de_procesos.xlsx", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elab-popup2-glb_5-1}", "click", function(sym, e) {
         window.open("materiales/DiagramaFlujoGestionFinanciera.jpg", "_blank");

      });
      //Edge binding end

   })("popups-mc");
   //Edge symbol end:'popups-mc'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3282958");