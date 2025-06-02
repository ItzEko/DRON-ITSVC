<?php
$archivos = glob(__DIR__ . '/../data/*.json'); 
$dataTotal = [];
foreach ($archivos as $archivo) {//recorre todos los archivos json
    $contenido = file_get_contents($archivo);
    $json = json_decode($contenido, true);

    if (isset($json['datos']) && is_array($json['datos'])) {
        $dataTotal = array_merge($dataTotal, $json['datos']);//junta todo en una sola lista 
    }
}

header('Content-Type: application/json');//envia los datos en formato json
echo json_encode(['datos' => $dataTotal]);
