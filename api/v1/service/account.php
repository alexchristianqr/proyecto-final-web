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
			$arrayDataUsuario = Request::all("data_usuario");
			
			// API
			$sql = "INSERT INTO usuarios (nombres, apellidos, rol, username, pwd, estado) VALUES (?, ?, ?, ?, ?, ?);";
			$params = getParams($arrayDataUsuario);
			$id_usuario = $db->insert($sql, $params);
			
			if (isset($id_usuario)) {
				$arrayDataCliente = Request::all("data_cliente");
				$data = array_merge(["id_persona" => $id_persona, "id_usuario" => $id_usuario, "id_cliente_perfil" => 1], $arrayDataCliente);
				
				// API
				$sql = "INSERT INTO clientes (id_persona, id_usuario, id_cliente_perfil, empresa) VALUES (?, ?, ?, ?);";
				$params = getParams($data);
				$id_cliente = $db->insert($sql, $params);
				
				if (isset($id_cliente)) {
					$result["success"] = true;
					$result["message"] = "usuario registrado correctamente";
				}
			}
			
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
		if ($uriSegments[3] === 'account.php') account();
		break;
	default:
		jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
