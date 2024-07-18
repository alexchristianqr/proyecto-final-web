<?php

require_once "../database.php";

// Función para inciar sesión
function reserva()
{
    $db = new Database();
    $db->connect();

    $success = false;
    $message = null;
    $result = ["success" => $success];

    $username = Request::json("username");
    $pwd = Request::json("password");
    $params = [$username, $pwd];
    $sql = "INSERT INTO reservas (id_cliente, id_habitacion, id_empleado, monto_total, fecha_reserva, fecha_entrada, fecha_salida) VALUES (1, 1, 1, 89.90, '2023-11-10 18:45:29', '2023-11-10 18:45:29', '2023-11-10 18:45:29');";

    $users = $db->select($sql, $params);

    if (count($users) > 0) {
        Session::start();

        $success = true;
        $message = "usuario logueado correctamente";
        $result = ["success" => $success, "message" => $message, "result" => $users];
    }

    return jsonResponse($result);
}

/* RUTA */
// Procesar la solicitud
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriSegments = explode('/', trim($uri, '/'));
switch ($method) {
    case 'POST':
        if ($uriSegments[3] === 'reserva.php') reserva();
        break;
    default:
        return jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
