# Trabajo final base de datos avanzada
Integrantes: Luis Inostroza Flores, Mario Labbé Sanhueza.


# Instalación
1.- Clona o descarga este repositorio en tu maquina local.

2.- Asegurate de tener Node.js instalado.

3.- antes de ejecutar, necesitas tener instaladas las dependencias:

``` npm install express mongoose ```

5.- Una vez instalada las dependencias inicia el servidor:

``` node api.js```

# Endpoints
A continuación se muestran los endpoints disponibles en nuestra API:


| Método HTTP  | URL | Descripción |
| ------------- | ------------- | ------------- |
| GET | http://localhost:3000/players/ | Retorna todos los jugadores, si la peticion es exitosa, envia un codigo de estado **HTTP 201 (Ok)** |
| GET | http://localhost:3000/players/:id: | Retorna un jugador basado en su id asociado, si el jugador no existe, envía un código de estado **HTTP 404 (NotFound)**, en caso de ser encontrado, retorna el jugador y envía un de estado **HTTP 200 (OK).** |
| POST | http://localhost:3000/players | Crea un nuevo jugador, la solicitud debe incluir los datos del nuevo jugador dentro del cuerpo (body). Si el jugador es creado retorna los datos del nuevo jugador y envia un código de estado **HTTP 201 (Created)**. |
| PUT | http://localhost:3000/players/:id: | Actualiza un jugador existente, si el jugador no puede ser encontrado, envia u codigo de estado **HTTP 404 (NotFound)**, en caso de ser encontrado y actualizado, retorna el jugador actualizado yu envia uin codigo de estado **HTTP 200(OK)** |
| DELETE | http://localhost:3000/players/:id: | Elimina un jugador basado en su id asociado, si el jugador no existe, envía un código de estado **HTTP 404 (NotFound)**, en caso de ser encontrado y eliminado, envia un código de estado **HTTP 204(NoContent)** |
