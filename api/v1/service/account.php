<?php

require_once "../database.php";

// Función para crear cuenta
function account()
{
	$result = ["success" => false];
	
	try {
		$db = new Database();
		$db->connect();
		
		$data = Request::all("data_persona");
		
		// API
		$sql = "INSERT INTO personas (nombre, apellido, tipo_documento, nrodocumento, sexo, edad) VALUES (?, ?, ?, ?, ?, ?);";
		$params = getParams($data);
		$id_persona = $db->insert($sql, $params);
		
		
		if (isset($id_persona)) {
			$arrayCliente = Request::all("data_cliente");
			$data = array_merge(["id_persona" => $id_persona, "id_usuario" => 1, "id_cliente_perfil" => 1], $arrayCliente);
			
			// API
			$sql = "INSERT INTO clientes (id_persona, id_usuario, id_cliente_perfil, empresa) VALUES (?, ?, ?, ?);";
			$params = getParams($data);
			$id_cliente = $db->insert($sql, $params);
			
			if (isset($id_cliente)) {
				$result["success"] = true;
				$result["message"] = "usuario registrado correctamente";
			}
		}
		
		return jsonResponse($result);
		
	} catch (Exception $e) {
		echo $e->getMessage();
		$result["trace"] = $e->getTrace();
		$result["error"] = $e->getMessage();
		return jsonResponse($result);
	}
}

/* RUTA */
// Procesar la solicitud
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriSegments = explode('/', trim($uri, '/'));
switch ($method) {
	case 'POST':
		if ($uriSegments[4] === 'account.php') account();
		break;
	default:
		jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
