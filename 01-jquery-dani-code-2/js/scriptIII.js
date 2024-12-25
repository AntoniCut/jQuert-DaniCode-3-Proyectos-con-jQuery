//  **********  scriptIII.js  **********

//  **********  Manipulando el DOM - text, html, val, attr, append, prepend  **********

$(() => {

    $("#dom").click(() => {

        alert($("#p1").text());     //  obtiene el contenido.
        alert($("#p2").text());     //  obtiene el contenido.
        alert($("#p2").html());     //  obtiene el html.
        alert($("#val").val());     //  obtiene el valor. el value en un input.

        alert($("#p1").text());     //  obtiene el contenido.
        alert($("#p2").text());     //  obtiene el contenido.
        alert($("#val").val());     //  obtiene el valor. el value en un input.
        $("#p1").text("nuevo contenido del parrafo 1");
        $("#p2").text("nuevo contenido del parrafo 2");
        $("#val").val("nuevo valor del input");

    });

    $("#domModificado").click(() => {

        $("#p1").text("nuevo contenido del parrafo 1");
        $("#p2").text("nuevo contenido del parrafo 2");
        $("#val").val("nuevo valor del input");

        alert($("#p1").text());     //  obtiene el contenido.
        alert($("#p2").text());     //  obtiene el contenido.
        alert($("#val").val());     //  obtiene el valor. el value en un input.
    });

    $("#modificarEnlace").click(()=> {
        
        $("#enlace").attr({                 //  modifica el contenido de una etiqueta.
            href: "https://youtube.com",
            title: "Ven como funciona",
        });

        $("#enlace").text("Youtube");
    });
    
    $("#dom2").click(()=> {
     
        $("ol")
            .append("<li> Metodo append </li>")        //  añade elementos al final.
            .prepend("<li> Metodo prepend </li>")      //  añade elementos al principio.
            .after("<li> Metodo after </li>")          //  añade elementos despues.
            .before("<li> Metodo before </li>");       //  añade elementos antes.
     
     
     
    });
    


});

