<?php
require_once "../database.php";

// Función lista reservas
function reservations()
{
  $db = new Database();
  $db->connect();

  $success = false;
  $message = null;
  $result = ["success" => $success];

  $id_cliente = Request::json("id_cliente", null);
  $id_habitacion = Request::json("id_habitacion", null);
  $estado = Request::json("estado", null);

  $params = [];
  $sql = "SELECT r.*, c.nombres as cliente_nombres, c.apellidos as cliente_apellidos, 
            h.descripcion as habitacion_descripcion, e.nombres as empleado_nombres, e.apellidos as empleado_apellidos 
            FROM reservas r 
            JOIN clientes cl ON r.id_cliente = cl.id
            JOIN personas c ON cl.id_persona = c.id
            JOIN habitaciones h ON r.id_habitacion = h.id
            JOIN empleados emp ON r.id_empleado = emp.id
            JOIN personas e ON emp.id_persona = e.id";
  $condiciones = [];

  if($id_cliente !== null){
    $condiciones[] = "r.id_cliente = ?";
    $params[] = $id_cliente;
  }

  if ($id_habitacion !== null) {
    $condiciones[] = "r.id_habitacion = ?";
    $params[] = $id_habitacion;
  }

  if ($estado !== null) {
    $condiciones[] = "r.estado = ?";
    $params[] = $estado;
  }

  if (count($condiciones) > 0) {
    $sql .= " WHERE " . implode(" AND ", $condiciones);
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
    if ($uriSegments[3] === 'reservations.php') reservations();
    break;
  default:
    return jsonResponse(['status' => 'error', 'message' => 'Ruta no encontrada'], 404);
}
/* FIN RUTA */
