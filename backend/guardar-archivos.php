<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
        $contenidoJSON = file_get_contents($_FILES['archivo']['tmp_name']);
        $datos = json_decode($contenidoJSON, true);
        if (isset($datos['datos']) && is_array($datos['datos']) && isset($datos['datos'][0]['date'])) {
            $fecha = $datos['datos'][0]['date'];
            $nombreArchivo = $fecha . '.json'; 

            $rutaDestino = __DIR__ . '/../data/' . $nombreArchivo;

            if (move_uploaded_file($_FILES['archivo']['tmp_name'], $rutaDestino)) {
                echo "Archivo guardado correctamente como: $nombreArchivo";
            } else {
                echo " Error al mover el archivo a $rutaDestino";
            }
        } else {
            echo "No se encontró la fecha en el JSON.";
        }
    } else {
        echo "No se subió ningún archivo o hubo un error.";
    }
}
?>
