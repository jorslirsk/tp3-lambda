# :cloud: Computación en la nube: Trabajo Práctico 3 - lambda :cloud:

##  Datos personales

- Nombre: **Mariano Jaliff**
- Legajo: **38914**

##  Instalación

### Run Proyecto

```bash
npm i
docker container rm dynamodb
docker network create awslocal
docker run --rm -p 8000:8000 --network awslocal --name dynamodb amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb
sam local start-api --docker-network awslocal
```

### Crear tablas e indices
Abrir `http://localhost:8000/shell/` y copiar el contenido de tableCreation.js

## :pushpin: [EndPoints](requests.http)

### Crear un envío

> El usuario desea crear un envio, especificando el destino y el email

```http request
POST http://localhost:3000/envios
Content-Type: application/json

{
  "destino": "MDZ",
  "email": "mariano@jaliff.com.ar"
}
```

### Obtener envíos pendientes

> Obtención de envios pendientes.

```http request
GET http://localhost:3000/envios/pendientes
```
### Entregar un pedido

> Eliminar atributo pendiente de un envio en particular.

```http request
PUT http://localhost:3000/envios/${idEnvio}/entregado
```

### Obtener un envío en particular

> Obtener mas información acerca de un envio en particular.

```http request
GET http://localhost:3000/envio/${idEnvio}
```
