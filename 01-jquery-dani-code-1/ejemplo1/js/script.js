
'use strict';

//  *****  JQuery - cargar documento  *****

$(()=>{ /*alert("Estamos viendo una de las sintaxis en JQuery"); */});

//  *****  ocultar elementos  *****  //
//$('p').hide();
//$('p:first').hide();
//$('.parrafo').hide();
//$('#parrafo3').hide();
//$('ul li:nth-child(2)').hide();

//  *****  eventos  *****  //  efectos: hide(), show(), toggle().

$('ul li:nth-child(2)').click(function (e) { 
  //alert("Estamos viendo los eventos en JQuery");
});

$("#ocultar").click(function (e) { 
  //alert("Estamos viendo los eventos en JQuery");
  $("ul li:first").hide();
});

$("#mostrar").click(function (e) { 
  $("ul li:first").show();
});

$("#quitaypon").click(()=>{$("ul li:first").toggle(3000, ()=>alert("Vamos de Nuevo"));});

//$("#quitaypon").click(()=>{$("ul li:first").toggle(3000, ()=>alert("Vamos de Nuevo"));});


$(".fondo").click( ()=> { $("body").css({'background-color': 'white', 'color':'black'});  });
$(".fondo").dblclick( ()=> { $("body").css({'background-color': 'black', 'color':'white'});  });

$(".hideP").click( ()=> {  $("p").hide(); });
$(".showP").click( ()=> {  $("p").show(); });


$("#mostrardiv").click( ()=> {   
  $("#div1").fadeIn("slow");
  $("#div2").fadeIn(3000);
  $("#div3").fadeIn();
});

$("#ocultardiv").click( ()=> {   
  $("#div1").fadeOut(3000);
  $("#div2").fadeOut(6000);
  $("#div3").fadeOut(9000 ,()=> console.log("Listo, todo cargado..."));
});

$("#mostrarocultardiv").click( ()=> {   
  $("#div1").fadeToggle();
  $("#div2").fadeToggle();
  $("#div3").fadeToggle( console.log("Listo, todo cargado..."));
});

$("#fadeTo").click( ()=> {   
  $("#div1").fadeTo(1000, 0.15);    //  0.15, 0.75, 0.99, niveles de opacidad.
  $("#div2").fadeTo(2000, 0.75);
  $("#div3").fadeTo(5000, 0.99, ()=> console.log("acaba de terminar de cargar..."));
});


//  acordeon.
$("#slideUp").click( ()=> {   
  $("#div1").slideUp(1000);    //  0.15, 0.75, 0.99, niveles de opacidad.
  $("#div2").slideUp(2000);
  $("#div3").slideUp(5000);
  $("#lorem").slideUp(2000);
});

$("#slideDown").click( ()=> {   
  $("#div1").slideDown(1000);    //  0.15, 0.75, 0.99, niveles de opacidad.
  $("#div2").slideDown(2000);
  $("#div3").slideDown(5000);
  $("#lorem").slideDown(2000);
});

$(".over").mouseleave( ()=> {
  $(".lorem").css( {"display":"none"}  );
});

/*
$("#stop").click( ()=> {   
  //$("#div1").stop();    
  //$("#div2").stop();    
  //$("#div3").stop();    
});
*/








/*
$("#quitaypon").click(function (e) { 
  $("ul li:first").toggle();
});
*/
/*
$("#quitaypon").dblclick(function (e) { 
  $("ul li:first").toggle();
});
*/
/*
$("#quitaypon").mouseleave(function () { 
  $("ul li:first").show();
});
*/


/*  formas de cargar el documento o pagina
$(document).ready(function () {
    alert("Estamos viendo la sintaxis");
});


$(function () {
  console.log("Estamos trabajando con JQuery de nuevo.....")  ;
});
*/
