<?php

require_once "../database.php";

// Función para inciar sesión
function account()
{
    $success = false;
    $result = ["success" => $success];

    try {
        $db = new Database();
        $db->connect();

        $message = null;

        $sql = "INSERT INTO personas (nombre, apellido, tipo_documento, nrodocumento, sexo, edad) VALUES (?, ?, ?, ?, ?, ?);";
        $params = Request::all("data_persona");
        $id_persona = $db->insert($sql, $params);



        if (isset($id_persona)) {
            $sql = "INSERT INTO clientes (id_persona, id_usuario, id_cliente_perfil, empresa) VALUES (?, ?, ?, ?);";
            $arrayCliente = Request::all("data_cliente");
            $params = array_merge($arrayCliente, ["id_persona" => $id_persona, "id_usuari   o" => 1, "id_cliente_perfil" => 1]);
            $id_cliente = $db->insert($sql, $params);

            if (isset($id_cliente)) {
                Session::start();

                $success = true;
                $message = "usuario registrado correctamente";
                $result = ["success" => $success, "message" => $message, "result" => null];
            }
        }

        return jsonResponse($result);
    } catch (Exception $e) {
        return ["success" => $success, "error" => $e];
    }

}

/* RUTA */
// Procesar la solicitud
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriSegments = explode('/', trim($uri, '/'));
switch ($method) {
    case 'POST':
        if ($uriSegments[3] === 'account.php') account();
        break;
    default:
        return jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
