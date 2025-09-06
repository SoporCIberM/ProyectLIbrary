# Sistema de Gestión de Biblioteca

## Descripción del Proyecto

> Este proyecto es una aplicación web diseñada para la gestión integral de una biblioteca. Permite a los usuarios buscar, visualizar y tomar prestados libros, mientras que los administradores tienen control total sobre el catálogo de libros y los usuarios. El objetivo es digitalizar y optimizar los procesos de una biblioteca tradicional, haciendo la gestión de recursos más eficiente y accesible.

## Requisitos Técnicos

Para ejecutar este proyecto de manera local, asegúrate de tener instaladas las siguientes herramientas y versiones:

- **Node.js**: v14 o superior
- **npm**: v6 o superior (o Yarn si prefieres)
- **MySQL**: v5.7 o superior
- **Java**: v11 o superior
- **Spring Boot**: v2.5.x o superior
- **Git**: v2.x o superior

Es recomendable tener un entorno de desarrollo con soporte para Java y Node.js, además de tener configurado un servidor MySQL local para la base de datos.

## Tecnologías Utilizadas

Las siguientes tecnologías han sido seleccionadas para el desarrollo del proyecto:

- **Frontend**: React, Git, GitHub
- **Backend**: Spring Boot, Spring Security
- **Base de Datos**: MySQL
- **Gestión de Paquetes**: npm, Yarn, Bun
- **Estilos**: Tailwind CSS

## Instalación

Sigue los pasos a continuación para tener una copia local del proyecto funcionando.

### 1. Clona el repositorio

Primero, clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/soporCiber11M/ProyectLibrary.git
cd ProyectLIbrary
```
Instala las dependencias del frontend

Accede al directorio del frontend e instala las dependencias necesarias:
```bash
cd frontend # o la carpeta correspondiente
npm install   # o yarn install
```
nstala las dependencias del backend

Accede al directorio del backend e instala las dependencias necesarias:
```bash
cd backend  # o la carpeta correspondiente
npm install   # o yarn install
```
Configura las variables de entorno

Crea un archivo .env en la raíz del directorio backend (y también en frontend si es necesario) y agrega las variables de configuración. Por ejemplo:
```bash
DB_URI=mysql://usuario:contraseña@localhost:3306/biblioteca
PORT=3000
```

Ejecuta la aplicación

Inicia los servidores del frontend y backend en terminales separadas:

*Backend:*
```bash
cd backend
npm start  # o npm run dev
```

*Frontend:*
```bash
cd frontend
npm start  # o npm run dev

```
---
## Roles de Usuario

> El sistema cuenta con dos roles principales para gestionar diferentes niveles de acceso y permisos:

### Administrador

***Gestión completa del catálogo de libros (añadir, editar, eliminar).***

***Gestión de usuarios y sus roles.***

***Visualización de informes y estadísticas de préstamos.***

### Usuario

***Búsqueda de libros en el catálogo.***

***Visualización de detalles de los libros.***

***Funcionalidad para tomar prestados y devolver libros.***

***Visualización de su historial de préstamos.***

### Flujo de Trabajo con Git

***Este proyecto utiliza un flujo de trabajo de ramificación basado en Git Flow, con las siguientes ramas principales:***

***main:*** Contiene el código listo para ser desplegado en producción.

***develop:*** Rama principal de desarrollo, donde se integran las nuevas funcionalidades.

***feature/:*** Ramas específicas para el desarrollo de nuevas funcionalidades o correcciones de errores.

### Pasos a seguir para el desarrollo

***Actualiza tu rama local develop:***


![License](https://img.shields.io/badge/License-MIT-blue.svg)




