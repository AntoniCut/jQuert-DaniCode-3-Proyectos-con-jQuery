//  *********************************************************
//  **********  js/ajax.js  *****  archivo jQuery  **********
//  *********************************************************


$(function () {

    //console.log("jQuery is Ready!!");

    $("#task-result").hide();   //  Ocultamos la Caja donde se muestra la Tarea Buscada.
    fetchTasks();    //  Funcion que Lista las Tareas en una Tabla.

    let edit = false;

    //$("#task-add").hide();      //  Ocultamos la Caja donde se muestra la Tarea se ha realizado con éxito.

    //  *****  Buscador de Táreas  *****
    $("#search").keyup(() => {

        if ($("#search").val()) {
            let search = $("#search").val();
            //console.log(search);

            //  *****  Petición AJAX  *****
            $.ajax({
                url: "php/buscar-tarea.php",
                data: { search },
                type: "POST",
                //dataType: "dataType",
                success: function (response) {
                    if (!response.error) {     //  Si no hay ningun error
                        //console.log(response);
                        //let task = response;
                        //console.log(json.parse(task));
                        let tasks = JSON.parse(response);
                        console.log(tasks);
                        let template = ``;
                        tasks.forEach(task => {
                            template += `<li> <a href="#" class="task-item"> ${task.name} </a> </li>`;
                        });

                        //console.log(template);

                        $("#task-result").show();
                        $("#container").html(template);

                    }
                }
            });
        }

    });


    //  *****  Guardar Tárea y Editar Tarea  *****
    $("#task-form").submit(e => {

        e.preventDefault();

        //  Guardamos los valores introducidos en un objeto.
        const postData = {
            name: $("#name").val(),
            description: $("#description").val(),
            id: $("#taskId").val()
        }

        const url = edit === false ? "php/agregar-tarea.php" : "php/editar-tarea.php";

        //  *****  Peticion AJAX  *****
        $.ajax({
            url,
            type: "POST",
            data: postData,
            //dataType: "dataType",
            success: function (response) {

                if (!response.error) {                                  //  Si no hay ningun error.
                    fetchTasks();                                       //  Funcion que Lista las Tareas en una Tabla.
                    $("#task-form").trigger("reset");                   //  Resetea el formulario.
                    //$("#task-add").show().text("Tárea Agregada!");    //  Mostramos la Caja donde se muestra la Tarea se ha realizado con éxito.
                }
            }

        });
    });


    //  ***** Listar Tareas  *****
    function fetchTasks() {

        //  *****  Petición AJAX  *****
        $.ajax({
            url: "php/listar-tareas.php",
            type: "GET",
            //data: "data",
            success: function (response) {
                const tasks = JSON.parse(response);
                let template = ``;
                tasks.forEach(task => {
                    template += `
                        <tr taskId="${task.id}">
                            <td> ${task.id} </td>
                            <td> ${task.name} </td>
                            <td> ${task.description} </td>
                            <td class="text-center"> 
                                <button class="btn btn-danger task-delete"> Eliminar </button> 
                                <button class="btn btn-warning task-item"> Modificar </button> 
                            </td>
                        </tr>
                    `;

                });
                $("#tasks").html(template);
            }
        });
    }


    //  *****  Dar Clic al Boton Eliminar  *****
    $(document).on("click", ".task-delete", () => {

        $("#task-result").hide();   //  Ocultamos la Caja donde se muestra la Tarea Buscada.

        if (confirm("Estas Seguro que quieres eliminar esta tarea")) {
            const element = $(this)[0].activeElement.parentElement.parentElement;  //  Obtenemos la posicion del boton.
            //console.log(element);
            const id = $(element).attr("taskId");

            //  *****  Petición por el metodo POST  *****
            $.post(
                "php/eliminar-tarea.php",
                { id },
                () => {
                    fetchTasks();       //  Recargamos la Página.
                }
            );
        }
    });


    //  *****  Dar Clic al Boton Modificar  *****
    $(document).on("click", ".task-item", () => {

        $("#task-result").hide();   //  Ocultamos la Caja donde se muestra la Tarea Buscada.
        if (confirm("Estas Seguro que quieres modificar esta tarea")) {
            const element = $(this)[0].activeElement.parentElement.parentElement;  //  Obtenemos la posicion del boton.
            //console.log(element);
            const id = $(element).attr("taskId");
            let url = "php/obtener-una-tarea.php";

            console.log(id);

            //  *****  Petición AJAX  *****
            $.ajax({
                url,
                type: "POST",
                data: { id },
                success: function (response) {
                    //console.log("Entra");

                    if(!response.error) {
                        console.log(response);
                        //const task = JSON.parse(response);
                        const task = JSON.parse(response);

                        console.log("valor de task: " + task);

                        //  Rellenar el formulario de creacion de tareas con la tarea que obtenemos del servidor.
                        $("#name").val(task.name);
                        $("#description").val(task.description);
                        $("#taskId").val(task.id);
                        edit = true;
                    }
                    else {
                        console.log("Error del response.")
                    }

                }
            });


                          
        }
    });




});