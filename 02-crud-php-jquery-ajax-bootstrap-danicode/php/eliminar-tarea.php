<?php
    //  **********************************************
    //  **********  php/eliminar-tarea.php  **********
    //  **********************************************
?>

<?php

    //echo "La tarea se busco correctamente";
    include("database.php");

    //  Verificar si hemos recibido el 'id' de la tarea.
    if(isset($_POST["id"])) {

        $id = $_POST["id"];

        $query = "DELETE FROM tareas WHERE id = $id"; 
        $result = mysqli_query($connecction, $query);

        if(!$result) die("Hubo un error en la consulta". mysqli_error($connecction));

        echo "La tarea ha sido eliminada!";

    }
    
?>