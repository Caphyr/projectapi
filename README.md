# API REST PROJECT

An API REST PROJECT

[Project's link](https://github.com/BicycleIzation/Proyecto-de-Ingenieria).

## To-Do's list

- [x] /v1/todos/listar/:id - Mediante un GET el servidor responde con un JSON con los TO-DO segun un ID de una persona.
- [x] /v1/todos/:todoid - Mediante DELETE el servidor eliminar un TO-DO de la base de datos.
- [x] Mediante PUT modifica el estatus de un TO-DO.
- [X] Mediante PUT modifica el TO-DO.
- [x] Mediante POST agrega un nuevo TO-DO.

## How to:

- Para listar los ToDo's de una persona: `GET v1/todos?lista=x`. Donde 'x' es el id de la persona.
- Para cambiar el estado de un ToDo (Incompleto/Completado): `PUT /todos/:id/alterar-completado`
- Para eliminar un ToDo: `DELETE v1/todos/:todoid`. (:todoid debe ser reemplazado por el ID del ToDo).
- Para crear un nuevo ToDo: `POST v1/todos`. Enviar un BODY en formato JSON con lo siguiente
```javascript
{
	"personaId" : "(int)",
	"titulo" : "(string)",
	"descripcion" : "(string)"
}
```
- Para modificar un To-Do `PUT v1/todos/:id`. Enviar un BODY en formato JSON con el siguiente formato:
```javascript
{
	"personaId" : "(int)",
	"titulo" : "(string)",
	"descripcion" : "(string)"
}

**Nota**: Si no se respetan los formatos anteriores provocara un error en la petición.


## Integrantes:

* De Leon, Pedro.
* Di Cristofaro, Emanuel.
* Negrin, Juan.
