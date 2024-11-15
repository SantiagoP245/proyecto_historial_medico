Proyecto de Gestión de Historial Médico
Descripción del Proyecto

Este proyecto consiste en una aplicación backend para la gestión del historial médico de pacientes, que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los registros de pacientes y sus historiales médicos. Utiliza Node.js y MongoDB como tecnologías principales.
Formato de Intercambio de Datos

El intercambio de datos se realiza en formato JSON. Las solicitudes y respuestas de las API se manejan utilizando este formato estándar para representar la información entre el cliente y el servidor.
Ejemplo de formato de datos:

Solicitud POST (Agregar paciente):

{
  "nombre": "Juan Pérez",
  "edad": 30,
  "dni": "12345678",
  "historial_medico": [
    {
      "fecha": "2024-05-01",
      "descripcion": "Consulta general",
      "diagnostico": "Salud general"
    }
  ]
}

Respuesta GET (Obtener paciente):

{
  "_id": "605c72ef153207001f1b7e8",
  "nombre": "Juan Pérez",
  "edad": 30,
  "dni": "12345678",
  "historial_medico": [
    {
      "fecha": "2024-05-01",
      "descripcion": "Consulta general",
      "diagnostico": "Salud general"
    }
  ]
}

Descripción de URL de los Servicios

La aplicación cuenta con varios endpoints para interactuar con la base de datos.

    POST /api/pacientes
        Descripción: Crear un nuevo paciente.
        Ejemplo de solicitud:

    {
      "nombre": "Juan Pérez",
      "edad": 30,
      "dni": "12345678"
    }

GET /api/pacientes

    Descripción: Obtener todos los pacientes.

GET /api/pacientes/

    Descripción: Obtener un paciente específico por su ID.

PUT /api/pacientes/

    Descripción: Actualizar la información de un paciente específico.
    Ejemplo de solicitud:

        {
          "nombre": "Juan Pérez Actualizado",
          "edad": 31,
          "dni": "12345678"
        }

    DELETE /api/pacientes/
        Descripción: Eliminar un paciente por su ID.

Instalación
Requisitos previos

    Node.js: Se debe tener instalado Node.js en su versión 16 o superior.
    MongoDB: Debe tener una instancia de MongoDB corriendo en su máquina local o en un servidor remoto.

Pasos para instalar el proyecto

    Clonar el repositorio:

git clone https://github.com/tuusuario/proyecto-historial-medico.git

Entrar al directorio del proyecto:

cd proyecto-historial-medico

Instalar las dependencias del proyecto:

npm install

Crear un archivo .env en la raíz del proyecto con la siguiente configuración:

MONGO_URI=mongodb://localhost:27017/historial_medico
PORT=3000

Iniciar el servidor:

    npm start

    El servidor estará corriendo en http://localhost:3000.

Configuración

    Base de datos: Asegúrate de tener MongoDB corriendo en el puerto predeterminado 27017 en tu máquina local o usa un servicio en la nube como MongoDB Atlas.
    Variables de entorno: Las variables de entorno esenciales se encuentran en el archivo .env. Si estás utilizando una base de datos en la nube, cambia la variable MONGO_URI por la URL de tu instancia.

Plataformas Utilizadas

    Node.js: Entorno de ejecución para JavaScript en el servidor.
    Express.js: Framework minimalista para crear la API RESTful.
    MongoDB: Base de datos NoSQL, utilizada para almacenar la información médica de los pacientes.
    Postman: Herramienta para probar las APIs.

Lenguajes Utilizados

    JavaScript: Lenguaje principal del backend, usando Node.js.
    JSON: Formato de intercambio de datos entre cliente y servidor.

Base de Datos

MongoDB ha sido seleccionada debido a las siguientes razones:

    Escalabilidad: MongoDB es altamente escalable, lo que permite que el sistema maneje grandes cantidades de datos médicos a medida que el proyecto crece.
    Modelo flexible: No requiere esquemas rígidos como las bases de datos SQL, lo que es adecuado para almacenar información que puede variar de un paciente a otro.
    Desempeño: MongoDB ofrece un alto rendimiento en operaciones de lectura y escritura.

Diseño del Esquema de la Base de Datos

A continuación se muestra un diseño básico del esquema de la base de datos en MongoDB para los pacientes:

    Pacientes
        _id: Identificador único de MongoDB.
        nombre: Nombre completo del paciente.
        edad: Edad del paciente.
        dni: Documento Nacional de Identidad.
        historial_medico: Array de objetos con registros médicos.

Ejemplo de documento de paciente:

{
  "_id": "605c72ef153207001f1b7e8",
  "nombre": "Juan Pérez",
  "edad": 30,
  "dni": "12345678",
  "historial_medico": [
    {
      "fecha": "2024-05-01",
      "descripcion": "Consulta general",
      "diagnostico": "Salud general"
    }
  ]
}

Manual de Configuración y Pasos para Cumplir con Requerimientos Opcionales
Requerimiento: Agregar y obtener historiales médicos de pacientes

    Crear un historial médico para un paciente: Añadir un nuevo historial médico a un paciente con la solicitud PUT a /api/pacientes/:id.
    Obtener historial médico de un paciente: La API devuelve un historial médico completo al consultar un paciente con GET /api/pacientes/:id.


