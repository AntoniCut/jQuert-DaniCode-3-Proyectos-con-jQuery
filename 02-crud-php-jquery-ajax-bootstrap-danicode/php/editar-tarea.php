<?php
    //  ********************************************
    //  **********  php/editar-tarea.php  **********
    //  ********************************************
?>

<?php

    //echo "La tarea se busco correctamente";
    include("database.php");

    //  Verificar si hemos recibido el 'id' de la tarea.
    if(isset($_POST["id"])) {

        $task_id          = $_POST["id"];
        $task_name        = $_POST["name"];
        $task_description = $_POST["description"];
        
        $query = "UPDATE tareas SET name = '$task_name', description =  '$task_description' WHERE id='$task_id'";
        $result = mysqli_query($connecction, $query);
        
        if(!$result) die("Hubo un error en la consulta". mysqli_error($connecction));
        
        echo "Tarea Actualizada con Éxito";
      

    }
    
?>