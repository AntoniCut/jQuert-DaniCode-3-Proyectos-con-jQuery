<?php
    //  ********************************************
    //  **********  php/listar-tarea.php  **********
    //  ********************************************
?>

<?php

    //echo "La tarea se busco correctamente";
    include("database.php");

    $query = "SELECT * FROM tareas"; 
    $result = mysqli_query($connecction, $query);

    if(!$result) die("Hubo un error en la consulta". mysqli_error($connecction));
        
    //  Recorremos la Base de Datos y lo guardamos en un JSON.
    $json = array();

    while($row = mysqli_fetch_array($result)) {
        $json[] = array(
            "id"          => $row["id"],
            "name"        => $row["name"],
            "description" => $row["description"],
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>