# Ejercicios de SQL - Parte de Lectura

## Objetivo
Estos ejercicios están diseñados para ayudarte a practicar y mejorar tus habilidades de lectura en SQL. Cada ejercicio contiene una consulta SQL y se espera que interpretes el resultado que devolverá.

## Antes de empezar
Tendremos que tener instalado `MySQL` y `WorkBench` en nuestro ordenador

* Instalación de MySQL:

1. Acceder a https://dev.mysql.com/downloads/mysql/
2. En el momento que se creó el ejercicio la versión estable es la 8.0.36. Sino se deberá instalar la versión anterior a (innovation)
3. Seleccionar sistema operativo
4. Seleccionar vuestra arquitectura
5. Pulsar el botón de download y seguir los pasos de instalación (next, next, next...)
6. Pedirá una contraseña. Añadirla y apiuntarla para no perderla. La necesitaremos más adelante para `Workbench`. Nuestro usuario será root.

Una vez instalado completamente MySQL haremos la siguiente instalación

* Instalación de Workbench:

1. Acceder a https://dev.mysql.com/downloads/workbench/
3. Seleccionar sistema operativo
4. Seleccionar vuestra arquitectura
5. Pulsar el botón de download y seguir los pasos de instalación (next, next, next...)

## Instrucciones
Usa workbecnch para crear tu BBDD con tu tabla (ver más abajo) y ejecutar cada consulta. 
Todas las preguntas están en el archivo statements.

1. Lee cuidadosamente cada pregunta.
2. Escribe la consulta SQL correspondiente para obtener la información solicitada.
3. Deja tus consultas en el docuemnto `statements.sql`
4. Puedes apoyarte en https://www.w3schools.com/sql/default.asp para resolver los ejercicios.

Esta es la tabla que debes crear en tu BBDD. Se llama `usuarios_lenguajes` y tienes que añadir los siguientes datos:

``` SQL 

CREATE TABLE usuarios_lenguajes (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    edad INT,
    lenguaje VARCHAR(50) NOT NULL
);

-- Insertar datos
INSERT INTO usuarios_lenguajes (nombre, apellido, email, edad, lenguaje) VALUES
('Juan', 'Gomez', 'juan.gomez@example.com', 28, 'Java'),
('Maria', 'Lopez', 'maria.lopez@example.com', 32, 'JavaScript'),
('Carlos', 'Rodriguez', 'carlos.rodriguez@example.com', 25, 'Python'),
('Laura', 'Fernandez', 'laura.fernandez@example.com', 30, 'C++'),
('Pedro', 'Martinez', 'pedro.martinez@example.com', 22, 'Ruby'),
('Ana', 'Hernandez', 'ana.hernandez@example.com', 35, 'SQL'),
('Miguel', 'Perez', 'miguel.perez@example.com', 28, 'PHP'),
('Sofia', 'Garcia', 'sofia.garcia@example.com', 26, 'Swift'),
('Javier', 'Diaz', 'javier.diaz@example.com', 31, 'TypeScript'),
('Luis', 'Sanchez', 'luis.sanchez@example.com', 27, 'Go'),
('Elena', 'Moreno', 'elena.moreno@example.com', 29, 'C#'),
('Daniel', 'Romero', 'daniel.romero@example.com', 33, 'HTML'),
('Paula', 'Torres', 'paula.torres@example.com', 24, 'CSS'),
('Alejandro', 'Ruiz', 'alejandro.ruiz@example.com', 28, 'R'),
('Carmen', 'Vega', 'carmen.vega@example.com', 29, 'Kotlin'),
('Adrian', 'Molina', 'adrian.molina@example.com', 34, 'Objective-C'),
('Isabel', 'Gutierrez', 'isabel.gutierrez@example.com', 26, 'Scala'),
('Hector', 'Ortega', 'hector.ortega@example.com', 30, 'Perl'),
('Raquel', 'Serrano', 'raquel.serrano@example.com', 32, 'Shell'),
('Alberto', 'Reyes', 'alberto.reyes@example.com', 28, 'VB.NET');
```