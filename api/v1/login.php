<?php

require_once "./database.php";

// Definir funciones
function login()
{
  $db = new Database();
  $db->connect();

  $success = false;
  $message = null;
  $result = ["success" => $success];

  $username = Request::json("username");
  $pwd = Request::json("password");
  $users = $db->select("select * from usuarios u where u.username = ? and u.pwd = ? and u.estado = 'activo' limit 1;", [$username, $pwd]);

  if (count($users) > 0) {
    Session::start();

    $success = true;
    $message = "usuario logueado correctamente";
    $result = ["success" => $success, "message" => $message, "result" => $users];
  }

  return jsonResponse($result);
}

// Procesar la solicitud
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriSegments = explode('/', trim($uri, '/'));

// Definir rutas y métodos
switch ($method) {
  case 'POST':
    if ($uriSegments[3] === 'login.php') {
      login();
    }
    break;
  default:
    return jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
