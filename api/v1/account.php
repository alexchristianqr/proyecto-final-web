<?php
session_start();

$data = $_SESSION["username"];
var_dump($data);