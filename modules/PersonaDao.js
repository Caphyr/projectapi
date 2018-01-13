var db = require('./BaseDao.js');

var Persona = {
    id: null,
    usuario : null,
    password : null,

    // getUser: function(body, callback){
    //     db.connect();
    //     var sql = 'SELECT * FROM personas';
    //     db.query(sql, function(err, results) {
    //         if(err) {
    //             callback(err, null);
    //         }
    //         else {
    //             if(results.length == 0) {
    //                 callback(null, undefined);
    //             }
    //             else {
    //                 var response = null;
    //                 var email = body;
    //                 console.log(body + ' mysql');
    //                 console.log(results[i].Correo + ' ' + email);
    //                 for (var i = 0; i < results.length; i++) {
    //                     if((results[i].Correo).trim() == email){
    //                         console.log()
    //                         response = results[i].Correo;
    //                         break;
    //                     }
    //                 }
    //                 callback(null, response);
    //             }
    //         }
    //     })
    // }

    getUser: function(callback) {
        db.connect();
        var sql = 'SELECT * FROM personas';
        db.query(sql, callback);
        db.disconnect();
    }

};

module.exports = Persona;
