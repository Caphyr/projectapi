var express = require('express');
var router = express.Router();
var todo = require('../modules/TodoDao2.js');
var persona = require('../modules/PersonaDao.js');
var session = require('express-session');
var bodyParser = require('body-parser');

router.use(express.static('views'));
var jsonParser = bodyParser.json()
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({
	secret: 'keyboard cat',
}));

var sess;



router.get('/login', function(req, res){
	sess = req.session;
	if(sess.email){
		res.redirect('ToDoList.html');
	}
	else {
		res.redirect('login.html');
	}
});

router.post('/signin', jsonParser, function(req, res) {
	console.log(JSON.stringify(req.body) + ' /signin');
	console.log(req.body.email);
	if(typeof(req.body.email) != undefined){
		persona.getUser(function(err, results){
			if(err) {
				res.status(500);
				res.json({ error : 'Error en la comunicación con la base de datos.'});
			}
			else if(results.length == 0) {
				res.status(200);
				res.json({ mensaje : 'No hay datos disponibles.'})
			}
			else {
				console.log(req.body);
				for (var i = 0; i < results.length; i++) {
					if( (results[i].Correo == req.body.email) && (results[i].Password == req.body.pw)){
						res.redirect('ToDoList.html');
					}
				}
			}
		})
	}
	else {
		res.status(400);
		res.json({ mensaje : 'Bad request'});
	}
})

router.get('/todos', function(req, res) {
	var personaId = req.query.lista;
	if(req.query.lista != '' && typeof(req.query.lista) != undefined){
		if(!isNaN(req.query.lista)){
			todo.getAllTasks(personaId, function(err, results) {
				if(err) {
					res.status(500);
					console.error(err);
					res.json({ mensaje : 'Error en la comunicación con la base de datos.'})
				}
				if(results.length == 0){
					res.status(200);
					res.json({ mensaje : 'ID sin tareas registradas.'});
				}
				else {
					res.status(200);
					res.json(results);
				}
			});
		}
		else{
			res.status(400);
			res.json({ mensaje : 'Bad request' });
		}
	}
	else {
		res.status(400);
		res.json({ mensaje : 'Bad request' });
	}
});

router.delete('/todos/:id', function(req, res){
	if(req.params.id && !isNaN(req.params.id)){
		todo.deleteTask(req.params.id, function(err, result) {
			if(err){
				res.status(500);
				console.error(err);
				res.json({ mensaje : 'Error en la comunicación con la base de datos.'});
			}
			else if(result == undefined){
				res.status(404);
				res.json({ mensaje : 'No se encontro el recurso solicitado.'})
			}
			else {
				res.status(200);
				res.json({ mensaje : 'To-Do eliminado.'});
			}
		})
	}
	else {
		res.status(400);
		res.json({ mensaje : 'Bad Request'});
	}
});

router.put('/todos/:id/alterar-completado', function(req, res){
	if(req.params.id && !isNaN(req.params.id)) {
		todo.modifyTaskStatus(req.params.id, function(err, result){
			if(err) {
				res.status(500);
				console.error(err);
				res.json({ mensaje : 'Error en la comunicación con la base de datos.'});
			}
			else if(result == undefined) {
				res.status(404);
				res.json({ mensaje : 'No se encontro el recurso solicitado'});
			}
			else {
				res.status(200);
				res.json({ mensaje: 'To-Do Modificado' });
			}
		});
	}
	else {
		res.status(400);
		res.json({ mensaje: 'Bad request'});
	}
});

router.post('/todos', function(req, res){
	if( (req.body.personaId != undefined && req.body.titulo != undefined) && (req.body.personaId != "" && req.body.titulo != "") ){
		if(!req.body.descripcion) {
			req.body.descripcion = "";
		}
		todo.addTask(req.body, function(err){
			if(err) {
				res.status(500);
				res.json({ mensaje : 'Error en la comunicación con la base de datos.'})
			}
			else {
				res.status(200);
				res.json({ mensaje: 'To-Do agregado!'});
			}
		})
	}
	else {
		res.status(400);
		res.json({ mensaje : 'Bad request'});
	}
});

router.put('/todos/:id', function(req, res){
	var id = req.params.id;
	if(!isNaN(id)){
		var body = req.body;
		if((body.titulo != undefined && body.descripcion != undefined && body.completada != undefined)){
			if(body.titulo != "" && body.descripcion != "" && body.completada != ""){
				todo.modifyTask(id, body, function(err, result) {
					if(err) {
						res.status(500);
						res.json({ mensaje : 'Error en comunicación con la base de datos.'} );
					}
					else if(result == undefined) {
						res.status(404);
						res.json({ mensaje : 'No se encontro el recurso solicitado'});
					}
					else {
						res.status(200);
						res.json({ mensaje : 'To-Do modificado'});
					}
				});
			}
			else {
				res.status(400);
				res.json({ mensaje : 'Bad request' });
			}
		}
		else {
			res.status(400);
			res.json({ mensaje : 'Bad request.' });
		}
	}
	else{
		res.status(400);
		res.json({ mensaje : 'Bad request.' });
	}
});

module.exports = router;
