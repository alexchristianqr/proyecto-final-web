-- ****************************** --
-- normalizacion de base de datos --
-- ****************************** --
-- sitio web: https://www.marcossarmiento.com/2017/06/28/normalizacion-de-base-de-datos/
-- 1fn: eliminar datos repetitivos en varias columnas
-- 2fn: eliminar datos redundantes en la tabla principal y ponerlas en otra tabla por pk1 y pk2.
-- 3fn: eliminar columnas que no dependen de la pk en la tabla principal en y ponerlas a otra tabla

-- # crear base de datos
CREATE DATABASE db_hotel;

-- # usar base de datos
USE db_hotel;

-- # crear tabla usuarios
CREATE TABLE usuarios
(
    id INT NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    rol ENUM('cliente','empleado','admin') NOT NULL,
    username VARCHAR(100) NOT NULL,
    pwd VARCHAR(250) NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    fecha_eliminado DATETIME,
    PRIMARY KEY (id),
    UNIQUE (username, estado)
);
-- # crear tabla personas
CREATE TABLE personas
(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    tipo_documento INT,
    nrodocumento VARCHAR(30),
    sexo ENUM('F','M'),
    edad VARCHAR(5),
    telefono VARCHAR(30),
    fecha_nacimiento VARCHAR(30),
    estado_civil ENUM('soltero', 'casado', 'viudo') DEFAULT 'soltero',
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id),
    UNIQUE (tipo_documento, nrodocumento)
);

-- # crear tabla clientes_perfiles
CREATE TABLE clientes_perfiles
(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    permisos TEXT NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id)
);

-- # crear tabla clientes
CREATE TABLE clientes
(
    id INT NOT NULL AUTO_INCREMENT,
    id_persona INT NOT NULL,
    id_usuario INT NOT NULL,
    id_cliente_perfil INT NOT NULL,
    empresa VARCHAR(250),
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (id_persona) REFERENCES personas(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_cliente_perfil) REFERENCES clientes_perfiles(id)
);

-- # crear tabla empleados_perfiles
CREATE TABLE empleados_perfiles
(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    permisos TEXT NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id)
);

-- # crear tabla empleado
CREATE TABLE empleados
(
    id INT NOT NULL AUTO_INCREMENT,
    id_persona INT NOT NULL,    
    id_usuario INT NOT NULL,
    id_empleado_perfil INT NOT NULL,
    sueldo DECIMAL(10,2) NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (id_persona) REFERENCES personas(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_empleado_perfil) REFERENCES empleados_perfiles(id)
);

-- # crear tabla tipo habitación
CREATE TABLE tipo_habitacion
(
    id INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(250) NOT NULL,
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id)
);

-- # crear tabla habitación
CREATE TABLE habitaciones
(
    id INT NOT NULL AUTO_INCREMENT,
    id_tipohabitacion INT NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    nivel VARCHAR(25) NOT NULL,
    numero_piso VARCHAR(25) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad_camas INT NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (id_tipohabitacion) REFERENCES tipo_habitacion(id)
);

-- # crear tabla producto
CREATE TABLE productos
(
    id INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(250) NOT NULL,
    precio DECIMAL NOT NULL,
    cantidad_stock INT NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id)
);

-- # crear tabla reservaconsumo
CREATE TABLE reservas_consumo
(
    id INT NOT NULL AUTO_INCREMENT,
    id_reserva INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    estado ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id)
);

-- # crear tabla reserva
CREATE TABLE reservas
(
    id INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_habitacion INT NOT NULL,
    id_empleado INT NOT NULL,
    monto_total DECIMAL(10,2) NOT NULL,
    fecha_reserva DATETIME,
    fecha_entrada DATETIME,
    fecha_salida DATETIME,
    estado ENUM('activo','pendiente_pago','pagado','cancelado') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizado DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id),
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

-- # Crear tabla comprobante de pago
CREATE TABLE comprobantes
(
    id INT NOT NULL AUTO_INCREMENT,
    id_reserva INT NOT NULL,
    id_empleado INT NOT NULL,
    tipo_comprobante INT NOT NULL, -- 1: FACTURA, 2: BOLETA
    estado ENUM('activo','pendiente_pago','pagado','cancelado') DEFAULT 'activo',
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_pagado DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (id_reserva) REFERENCES reservas(id),
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

-- empleados_perfiles
INSERT INTO empleados_perfiles (nombre, permisos) VALUES ('Administrador', '{}');
INSERT INTO empleados_perfiles (nombre, permisos) VALUES ('Recepcionista', '{}');
INSERT INTO empleados_perfiles (nombre, permisos) VALUES ('Personal de limpieza', '{}');

-- clientes_perfiles
INSERT INTO clientes_perfiles (nombre, permisos) VALUES ('Cliente', '{}');
INSERT INTO clientes_perfiles (nombre, permisos) VALUES ('Invitado', '{}');

-- usuarios
INSERT INTO usuarios (nombres, apellidos, rol, username, pwd, estado) 
VALUES ('Alex', 'Quispe', 'empleado', 'alex.quispe@gmail.com', '12345678', 'activo');
INSERT INTO usuarios (nombres, apellidos, rol, username, pwd, estado) 
VALUES ('Maria', 'Gonzales', 'cliente', 'maria.gonzales@utp.edu.pe', '12345678', 'activo');
INSERT INTO usuarios (nombres, apellidos, rol, username, pwd, estado) 
VALUES ('Susan', 'Torres', 'cliente', 'susan.torres@utp.edu.pe', '12345678', 'activo');

-- personas / empleados
INSERT INTO personas (nombre, apellido, tipo_documento, nrodocumento, sexo, edad) 
VALUES ('Alex', 'Quispe', 1, '12345678', 'M', '30');
INSERT INTO empleados (id_persona, id_usuario, id_empleado_perfil, sueldo) 
VALUES (1, 1, 1, 1250.69);

-- personas / clientes
INSERT INTO personas (nombre, apellido, tipo_documento, nrodocumento, sexo, edad) 
VALUES ('Maria', 'Gonzales', 1, '74567890', 'M', '34');
INSERT INTO clientes (id_persona, id_usuario, id_cliente_perfil, empresa) 
VALUES (2, 2, 1, NULL);
-- //
INSERT INTO personas (nombre, apellido, tipo_documento, nrodocumento, sexo, edad) 
VALUES ('Susan', 'Torres', 1, '87946521', 'M', '48');
INSERT INTO clientes (id_persona, id_usuario, id_cliente_perfil, empresa) 
VALUES (3, 3, 2, NULL);

-- tipo habitacion
INSERT INTO tipo_habitacion (descripcion) 
VALUES ('clasico');

-- habitacion
INSERT INTO habitaciones (id_tipohabitacion, descripcion, nivel, numero_piso, precio, cantidad_camas) 
VALUES (1, 'habitación con agua caliente + tv', '1', '101', 49.50, 1);

-- reserva
INSERT INTO reservas (id_cliente, id_habitacion, id_empleado, monto_total, fecha_reserva, fecha_entrada, fecha_salida)
  VALUES (1, 1, 1, 89.90, '2023-11-10 18:45:29', '2023-11-10 18:45:29', '2023-11-10 18:45:29');

-- producto
INSERT INTO productos (descripcion, precio, cantidad_stock) 
VALUES ('botella de agua cielo', 5, 100);

-- reserva consumo
INSERT INTO reservas_consumo (id_producto, id_reserva, cantidad, precio) 
VALUES (1, 1, 3, 5.50);

-- comprobante pago
INSERT INTO comprobantes (id_reserva, id_empleado, tipo_comprobante, fecha_pagado, estado) 
VALUES (1, 1, '1', '2023-11-10 18:45:29', 'pagado');

/*create or alter function dbo.fnclientetienedescuento
  (@clienteid) returns boolean as
  begin
    -- select * from
   end;*/

/*create or alter function sppagarreserva
  (@reservaid int) as
  begin
    -- select * from
   end;*/

