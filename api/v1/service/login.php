<?php

require_once "../database.php";

// Función para inciar sesión
function login()
{
	$result = ["success" => false];
	
	try {
		$db = new Database();
		$db->connect();
		
		$data = Request::all();
		
		// API
		$sql = "select * from usuarios u where u.username = ? and u.pwd = ? and u.estado = 'activo' limit 1;";
		$params = getParams($data);
		$users = $db->select($sql, $params);
		
		if (count($users) > 0) {
			$result["success"] = true;
			$result["message"] = "usuario autenticado correctamente";
			$result["result"] = $users;
		}
	} catch (Exception $e) {
		echo $e->getMessage();
		$result["error"] = $e->getMessage();
		$result["trace"] = $e->getTrace();
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
		if ($uriSegments[3] === 'login.php') login();
		break;
	default:
		return jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
