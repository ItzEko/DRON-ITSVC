<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {// Verifica si se subió un archivo sin errores
        $contenidoJSON = file_get_contents($_FILES['archivo']['tmp_name']);// Leer el contenido del archivo subido
        $datos = json_decode($contenidoJSON, true);

        if (isset($datos['datos']) && is_array($datos['datos'])) {
            $fechaActual = date("Y-m-d");            
            foreach ($datos['datos'] as &$item) {// Reemplazar todas las fechas en el array
                $item['date'] = $fechaActual;
            }
            $nombreArchivo = $fechaActual . '.json';            // Guardar el nuevo JSON con la fecha actual
            $rutaDestino = __DIR__ . '/../data/' . $nombreArchivo;

            if (file_put_contents($rutaDestino, json_encode($datos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {//HAcer un json legible y que no se codifiquen los caracteres especiales
                echo "Archivo guardado correctamente como: $nombreArchivo";
            } else {
                echo "Error al guardar el archivo.";
            }
        } else {
            echo "No se encontró la estructura esperada en el JSON.";
        }
    } else {
        echo "No se subió ningún archivo o hubo un error.";
    }
}
?>
