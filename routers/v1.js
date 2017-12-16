var express = require('express');
var router = express.Router();
var todo = require('../modules/TodoDao.js');

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
			else if(result != true){
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
			else if(result) {
				res.status(200);
				res.json({ mensaje: 'To-Do Modificado' });
			}
			else {
				res.status(404);
				res.json({ mensaje : 'No se encontro el recurso solicitado'});
			}
		});
	}
	else {
		res.status(400);
		res.json({ mensaje: 'Bad request'});
	}
});

router.post('/todos/', function(req, res){
	if(req.body){
		d
	}
});

module.exports = router;
