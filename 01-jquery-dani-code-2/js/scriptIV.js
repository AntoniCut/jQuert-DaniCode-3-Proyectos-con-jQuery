//  **********  scriptIII.js  **********

$(() => {

    //  **********  Manipulando el DOM - Eliminar elementos, clases, css, traversing  **********
    $("#vaciar").click(() => {
        $("#div1").empty();         //  elimina el contenido del elemento.
    });

    $("#eliminar").click(() => {
        $("#div1").remove();        //  elimina elementos.
    });

    $("#add_remove").click(() => {
        $("#div5").addClass("div5");        //  añadimos una clase.
        $("#div5").removeClass("clase");    //  eliminamos una clase.
    });

    $("#toggleClass").click(() => {
        $("#div5").toggleClass("div5");        //  añadimos y eliminamos una clase.
    });

    //  **********  CSS  **********
    $("#css").click(() => {
        ($("#div5").css({
            "background-color": "green", 
            "width": "200",
            "height": "200",
            "font-size": "1.5em",
        }));        //  muestra la regla css que tiene el elemento.
    });
   
    //  ********** traversing - parent, parents, parentsUntil, children, find  **********
    $("#traversing1").click(() => {
        $("span")
            .parent()
            .css({
                "border": "1px solid red",
                "color": "blue"
            });
    });

    $("#traversing2").click(() => {
        $("span")
            .parents()
            .css({
                "border": "1px solid red",
                "color": "blue"
            });
    });

    $("#traversing3").click(() => {
        $("span")
            .parentsUntil("div")
            .css({
                "border": "1px solid red",
                "color": "blue"
            });
    });

    $("#traversing4").click(() => {
        $("div:nth(3)")
            .children("p:first")
            .css({
                "border": "1px solid red",
                "color": "blue"
            });
    });

    $("#traversing5").click(() => {
        $("div:nth(3)")
            .find("*")
            .css({
                "border": "1px solid red",
                "color": "blue"
            });
    });

    //  para buscar hermanos.
    sibling()
    next()
    nextAll()
    nextUntil()
    Prev()
    prevAll()
    prevUntil()

    //  para filtrar.
    first()
    last()
    eq()
    Filter()
    Not()







});




