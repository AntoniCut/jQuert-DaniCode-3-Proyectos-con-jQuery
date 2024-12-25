//  **********  script.js  **********

//  **********  Código jQuery  **********
/*
$(function() {

    console.log("Carga de jQuery");
    alert("Carga de jQuery");

});
*/

/*
$(document).ready(function () {
    alert("Sintaxis de jQuery");
});
*/

/*
$(function () {
    alert("Sintaxis de jQuery");
});
*/

/*
$( ()=> {
    alert("Sintaxis de jQuery");
});
*/

$(function () {
    
    //alert("Sintaxis de jQuery");

    //  **********  Selectores  **********
    
    //  Ocultar los parrafos.
    //$('p').hide();
    //$('p:first').hide();
    $('.parrafo2').hide();
    $('#parrafo3').hide();
    $('ul li:nth-child(2)').hide();     //  efecto ocultar.

    //  **********  Eventos - click y dblclick  **********
    $('ul li:nth-child(3)').click(function () { 
        alert("Estamos viendo los eventos en jQuery");
        $('ul li:nth-child(2)').show();     //  efecto mostrar.
    });

    $("#ocultar").click(function () { 
        $("ul li:first").hide();
    });

    $("#mostrar").click(function () { 
        $("ul li:first").show();
    });
    
    $("#quitaypon").dblclick(function () {
        $("ul li:first").toggle(3000, ()=> {
            alert("Vamos de nuevo");
        });      //  efecto ocultar y mostrar.
    });
    
    //  **********  Eventos - mouseenter u mouseleave  **********
    $("#ocultar").mouseenter(function () { 
        $("ul li:first").hide();
    });

    $("#mostrar").mouseleave(function () { 
        $("ul li:first").show();
    });





});

