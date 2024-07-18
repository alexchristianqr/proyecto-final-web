<?php
if (!function_exists('dd')) {
	/**
	 * Dump and die - Muestra el contenido de una variable y detiene la ejecución del script.
	 *
	 * @param mixed $data - La variable a mostrar.
	 */
	function dd($data)
	{
		echo '<pre>';
		var_dump($data);
		echo '</pre>';
		die();
	}
}

if (!function_exists('getParams')) {
	function getParams($allData)
	{
		// Convertir array asociativo a array no asociativo manteniendo tipos de datos
		$nonAssociativeData = array_values($allData);
		return array_map(function ($value) {
			// Intentar convertir el valor al tipo de dato original
			if (is_numeric($value)) {
				if (strpos($value, '.') !== false) {
					return (float)$value;
				} else {
					return (int)$value;
				}
			}
			return $value;
		}, $nonAssociativeData);
	}
}

if (!function_exists('jsonResponse')) {
	/**
	 * Enviar una respuesta JSON.
	 *
	 * @param mixed $data - Los datos a codificar en JSON.
	 * @param int $status_code - El código de estado HTTP (por defecto 200).
	 */
	function jsonResponse($data, $status_code = 200)
	{
		header('Content-Type: application/json');
		http_response_code($status_code);
		echo json_encode($data);
		return;
	}
}

if (!class_exists('Request')) {
	class Request
	{
		/**
		 * Obtener un valor de $_GET de forma segura
		 *
		 * @param string $key - La clave del valor a obtener
		 * @param mixed $default - Valor por defecto si la clave no existe
		 * @return mixed - El valor de $_GET o el valor por defecto
		 */
		public static function get($key, $default = null)
		{
			return isset($_GET[$key]) ? htmlspecialchars($_GET[$key]) : $default;
		}
		
		/**
		 * Obtener un valor de $_POST de forma segura
		 *
		 * @param string $key - La clave del valor a obtener
		 * @param mixed $default - Valor por defecto si la clave no existe
		 * @return mixed - El valor de $_POST o el valor por defecto
		 */
		public static function post($key, $default = null)
		{
			return isset($_POST[$key]) ? htmlspecialchars($_POST[$key]) : $default;
		}
		
		/**
		 * Obtener un valor de los datos JSON de forma segura
		 *
		 * @param string $key - La clave del valor a obtener
		 * @param mixed $default - Valor por defecto si la clave no existe
		 * @return mixed - El valor de los datos JSON o el valor por defecto
		 */
		public static function json($key, $default = null)
		{
			$data = json_decode(file_get_contents('php://input'), true);
			return isset($data[$key]) ? $data[$key] : $default;
		}
		
		/**
		 * Obtener todos los datos combinados de $_GET, $_POST y datos JSON
		 *
		 * @param string|null $specificKey - Clave específica para obtener su valor
		 * @return mixed - Array combinado de todas las fuentes de datos o valor específico
		 */
		public static function all($specificKey = null)
		{
			$allData = [];
			
			// Obtener datos de $_GET
			foreach ($_GET as $key => $value) {
				$allData[$key] = $_GET[$key];
			}
			
			// Obtener datos de $_POST
			foreach ($_POST as $key => $value) {
				$allData[$key] = $_POST[$key];
			}
			
			// Obtener datos JSON
			$json = json_decode(file_get_contents('php://input'), true);
			if (is_array($json)) {
				foreach ($json as $key => $value) {
					$allData[$key] = $json[$key];
				}
			}
			
			// Devolver valor específico si se proporciona una clave
			if ($specificKey !== null) {
				return isset($allData[$specificKey]) ? $allData[$specificKey] : null;
			}
			
			return $allData;
		}
	}
}

if (!class_exists('Session')) {
	class Session
	{
		/**
		 * Iniciar una sesión si no ha sido iniciada
		 */
		public static function start()
		{
			if (session_status() === PHP_SESSION_NONE) {
				session_start();
			}
		}
		
		/**
		 * Establecer un valor en la sesión
		 *
		 * @param string $key - La clave del valor a establecer
		 * @param mixed $value - El valor a establecer
		 */
		public static function set($key, $value)
		{
			self::start();
			$_SESSION[$key] = $value;
		}
		
		/**
		 * Obtener un valor de la sesión
		 *
		 * @param string $key - La clave del valor a obtener
		 * @param mixed $default - Valor por defecto si la clave no existe
		 * @return mixed - El valor de la sesión o el valor por defecto
		 */
		public static function get($key, $default = null)
		{
			self::start();
			return isset($_SESSION[$key]) ? $_SESSION[$key] : $default;
		}
		
		/**
		 * Eliminar un valor de la sesión
		 *
		 * @param string $key - La clave del valor a eliminar
		 */
		public static function delete($key)
		{
			self::start();
			unset($_SESSION[$key]);
		}
		
		/**
		 * Destruir la sesión
		 */
		public static function destroy()
		{
			self::start();
			session_destroy();
		}
	}
}

if (!class_exists('Env')) {
	class Env
	{
		/**
		 * Cargar variables de entorno desde un archivo .env
		 *
		 * @param string $path - La ruta del archivo .env
		 */
		public static function load($path = ".env")
		{
			if (!file_exists($path)) {
				throw new \InvalidArgumentException(sprintf('%s does not exist', $path));
			}
			
			$lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
			foreach ($lines as $line) {
				if (strpos(trim($line), '#') === 0) {
					continue;
				}
				
				list($key, $value) = explode('=', $line, 2);
				$key = trim($key);
				$value = trim($value);
				
				if (!array_key_exists($key, $_SERVER) && !array_key_exists($key, $_ENV)) {
					putenv(sprintf('%s=%s', $key, $value));
					$_ENV[$key] = $value;
					$_SERVER[$key] = $value;
				}
			}
		}
		
		/**
		 * Obtener una variable de entorno
		 *
		 * @param string $key - La clave de la variable de entorno
		 * @param mixed $default - Valor por defecto si la variable no existe
		 * @return mixed - El valor de la variable de entorno o el valor por defecto
		 */
		public static function get($key, $default = null)
		{
			$value = getenv($key);
			if ($value === false) {
				return $default;
			}
			return $value;
		}
	}
}