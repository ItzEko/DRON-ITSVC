<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
        $nombreArchivo = basename($_FILES['archivo']['name']);
        $rutaDestino = __DIR__ . '/../data/' . time() . '_' . $nombreArchivo;

        if (move_uploaded_file($_FILES['archivo']['tmp_name'], $rutaDestino)) {
            echo "Archivo guardado correctamente en: $rutaDestino";
        } else {
            echo "❌ Error al mover el archivo a $rutaDestino";
        }
    } else {
        echo "⚠️ No se subió ningún archivo o hubo un error.";
    }
}
?>
