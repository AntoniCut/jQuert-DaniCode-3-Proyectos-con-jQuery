
'use strict';

//  *****  JQuery - cargar documento  *****

$( ()=> { 
    
    /*alert("Estamos viendo una de las sintaxis en JQuery"); */

    let $div1 = $("#div1");
    let $div2 = $("#div2");
    let $div3 = $("#div3");


    $("#slideup").click( () => { 
      $div1.slideUp(2000).slideDown(3000);
      $div2.slideUp(2000).slideDown(3000);
      $div3.slideUp(3000, ()=> console.log("Listo, todo cargado...")).slideDown(4000, ()=> console.log("Listo, todo cargado..."));
    });


    //  *****  Animaciones  *****












});


