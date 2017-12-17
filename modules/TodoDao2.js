 var db = require('./BaseDao.js');

var ToDo = {

    getAllTasks:function(personaId, callback){
        db.connect();
        var sql = 'SELECT * FROM todos WHERE PersonaID = ' + db.escape(personaId);
        db.query(sql, callback);
        db.disconnect();
    },

    searchToDo:function(todoId, callback){
        var sql = 'SELECT Titulo FROM todos WHERE todoID = ' + db.escape(todoId);
        db.query(sql, callback);
    },

    deleteTask:function(todoId, callback){
        db.connect();
        this.searchToDo(todoId, function(err, results) {
            if(err) {
                callback(err, null);
            }
            else {
                if(results.length == 0) {
                    callback(null, undefined);
                }
                else {
                    var sql = 'DELETE FROM todos WHERE todoID = ' + db.escape(todoId);
                    db.query(sql, callback);
                    db.disconnect();
                }
            }
        });
    },

    getTaskStatus:function(todoId, callback){
        var sql = 'SELECT Completada FROM todos WHERE todoID = ' + db.escape(todoId);
        db.query(sql, function(err, results){
            if(err) {
                callback(err, null);
            }
            else {
                if(results.length == 0){
                    callback(null, undefined);
                }
                else {
                    callback(null, results[0].Completada);
                }
            }
        });
    },

    modifyTaskStatus:function(todoId, callback) {
        db.connect();
        ToDo.searchToDo(todoId, function(err, results) {
            if(err) {
                callback(err, null);
            }
            else {
                if(results.length == 0) {
                    callback(null, undefined);
                }
                else {
                    ToDo.getTaskStatus(todoId, function(err, results) {
                        if(err) {
                            callback(err, null);
                        }
                        else {
                            if(results.length == 0){
                                callback(null, undefined);
                            }
                            else {
                                if(results == 1){
                                    var sql = 'UPDATE todos SET Completada = 0 WHERE todoID = ' + db.escape(todoId);
                                }
                                else if(results == 0) {
                                    var sql = 'UPDATE todos SET Completada = 1 WHERE todoID = ' + db.escape(todoId);
                                }
                                db.query(sql, callback);
                                db.disconnect();
                            }
                        }
                    })
                }
            }
        });
    },

    modifyTask:function(todoId, body, callback){
        db.connect();
        ToDo.searchToDo(todoId, function(err, results){
            if(err){
                callback(err, null);
            }
            else {
                if(results.length == 0){
                    callback(null, undefined);
                }
                else {
                    if(body.completada == true) {
                        var sql = 'UPDATE todos SET Titulo = ' + db.escape(body.titulo) + ', Descripcion = ' + db.escape(body.descripcion) + ", Completada = 1 WHERE todoID = " + db.escape(todoId);
                    }
                    else {
                        var sql = 'UPDATE todos SET Titulo = ' + db.escape(body.titulo) + ', Descripcion = ' + db.escape(body.descripcion) + ", Completada = 0 WHERE todoID = " + db.escape(todoId);
                    }
                    db.query(sql, callback);
                    db.disconnect();
                }
            }
        });
    },

    addTask:function(body, callback) {
        db.connect();
        var sql = 'INSERT INTO todos (PersonaID, Titulo, Descripcion) VALUES (' + db.escape(body.personaId) + ',' + db.escape(body.titulo) + ',' + db.escape(body.descripcion) + ')';
        db.query(sql, callback);
        db.disconnect();
    }


};

module.exports = ToDo;
