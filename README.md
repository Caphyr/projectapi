# API REST PROJECT

An API REST PROJECT

## Installing

First of all, you should install *NPM* and *Node.js*. Please take a look and install both [Install NPM and Node](https://www.npmjs.com/get-npm) 

After that, do the next:

I supossed you're on your project folder.

> npm install

to install all packages and modules.

It could take a while...

Before run our server we should run a MySQL client and import our credentials.sql file.
[Credential](./credentials.sql)

Now, run your server with the following:

> node app.js

After that, and if everything going well, you'll see the following message 
> Server app listening on port 3000!

So, please go to 
> localhost:3000/v1/

And finally, that's all.


## To-Do's list

- [x] Mediante un GET el servidor responde con un JSON con los TO-DO segun un ID de una persona.
- [x] Mediante DELETE el servidor eliminar un TO-DO de la base de datos.
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
- Para modificar un To-Do `PUT v1/todos/:id`. el `:id` debe ser un **ID** valido de un To-Do. Enviar un BODY en formato JSON con el siguiente formato:
```javascript
{
	"titulo" : "(string)",
	"descripcion" : "(string)"
	"completada" : "true | false"
}
```

**Nota:** Si no se respetan los formatos anteriores provocara un error en la petición.


## Integrantes:

* De Leon, Pedro.
* Di Cristofaro, Emanuel.
* Negrin, Juan.
