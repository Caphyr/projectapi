var db = require('./BaseDao.js');

var TodoDao = {

    getAllTasks:function(personaId, callback) {
        db.connect();
        var sql = 'SELECT * FROM todos WHERE PersonaID = ' + db.escape(personaId);
        db.query(sql, callback);
        db.disconnect();
    },

    deleteTask:function(todoId, callback) {
        db.connect();
        this.getTask(todoId, function(err, result) {
            if(err) {
                console.log({ 'Internal DB error' : err});
                callback(err, null);
            }
            else {
                if(result.length == 0) {
                    console.log({ 'Internal DB warning' : 'No se encontraron resultados.'});
                    callback(null, result);
                }
                else {
                    var sql = 'DELETE FROM todos WHERE todoID = ' + db.escape(todoId);
                    db.query(sql, callback);
                }
            }
            db.disconnect();
        });
    },

    getTask:function(todoId, callback) {
        var sql = 'SELECT Titulo FROM todos WHERE todoID = ' + db.escape(todoId);
        db.query(sql, function(err, result) {
            if(err) {
                callback(err, null);
            }
            else {
                callback(null, result);
            }
        });
    },

    getTaskStatus:function(todoId, callback){
        var sql = 'SELECT Completada FROM todos WHERE todoID = ' + db.escape(todoId);
        db.query(sql, function(err, result) {
            if(err) {
                console.log({ 'Internal DB error' : err });
                callback(err, null);
            }
            else {
                if(result.length > 0){
                    callback(null, result[0].Completada);
                }
            }
        });
    },

    modifyTaskStatus:function(todoId, callback) {
        db.connect();
        this.getTask(todoId, function(err, result) {
            if(err) {
                console.log({ 'Internal DB error' : err});
                callback(err, null);
            }
            else {
                if(result.length == 0) {
                    console.log({ 'Internal DB warning' : 'No se encontraron resultados.'});
                    callback(null, false);
                }
                else {
                    TodoDao.getTaskStatus(todoId, function(err, result){
                        if(err) {
                            callback(err, null);
                        }
                        else if(result == 0) {
                            var sql = 'UPDATE todos SET Completada = 1 WHERE todoID = ' + db.escape(todoId);
                        }
                        else if(result == 1) {
                            var sql = 'UPDATE todos SET Completada = 0 WHERE todoID = ' + db.escape(todoId);
                        }
                        db.query(sql, callback);
                        db.disconnect();
                    });
                }
            }
        });
    },

    addTask:function(body, callback){
        db.connect();
        var sql = 'INSERT INTO todos (PersonaID, Titulo, Descripcion) '
			+ 'VALUES (' + db.escape(body.personaId) + ',' + db.escape(body.titulo) + ',' + db.escape(body.descripcion) + ')';
        db.query(sql, callback);
        db.disconnect();
    }
};

module.exports = TodoDao;
