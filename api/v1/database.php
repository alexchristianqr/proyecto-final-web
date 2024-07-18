<?php

include "./../helpers.php";
Env::load("../.env");

class Database
{
	
	private $host = null;
	private $db_name = null;
	private $username = null;
	private $password = null;
	private $conn;
	
	public function __construct()
	{
		$this->host = Env::get('DB_HOST');
		$this->db_name = Env::get('DB_NAME');
		$this->username = Env::get('DB_USER');
		$this->password = Env::get('DB_PASS');
	}
	
	// Conectar a la base de datos
	public function connect()
	{
		$this->conn = null;
		
		try {
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $this->conn;
		} catch (PDOException $e) {
			throw new ErrorException($e);
		}
		
	}
	
	// Ejecutar una consulta SELECT
	public function select($query, $params = [])
	{
		try {
			$stmt = $this->conn->prepare($query);
			$stmt->execute($params);
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			throw new ErrorException($e);
		}
	}
	
	// Ejecutar una consulta INSERT
	public function insert($query, $params = [])
	{
		try {
			$stmt = $this->conn->prepare($query);
			$stmt->execute($params);
			return $this->conn->lastInsertId();
		} catch (PDOException $e) {
			throw new ErrorException($e);
		}
	}
	
	// Ejecutar una consulta UPDATE
	public function update($query, $params = [])
	{
		try {
			$stmt = $this->conn->prepare($query);
			$stmt->execute($params);
			return $stmt->rowCount();
		} catch (PDOException $e) {
			throw new ErrorException($e);
		}
	}
}