//  **********  script.js  **********

//  *****  JQuery 3.6.3-min  *****  
$(document).ready(function () {
    

    console.warn('-----  Documento Cargado  --  jQuery Version: ', $.fn.jquery, '  -----');

    $('#example').DataTable( {

        //  configurar registros del menu.
        lengthMenu: [3, 6, 9, 12],

        //  configurar opciones de columnas para ordenar.
        columnDefs: [
            {orderable: false, target:[1, 2, 3, 4, 5]} ],




    });








});