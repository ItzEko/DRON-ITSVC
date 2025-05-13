<?php
$archivos = glob(__DIR__ . '/../data/*.json'); // asegurarte que guardas con .json

$dataTotal = [];

foreach ($archivos as $archivo) {
    $contenido = file_get_contents($archivo);
    $json = json_decode($contenido, true);

    if (isset($json['datos']) && is_array($json['datos'])) {
        $dataTotal = array_merge($dataTotal, $json['datos']);
    }
}

header('Content-Type: application/json');
echo json_encode(['datos' => $dataTotal]);
