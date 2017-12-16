var mysql = require("mysql");

var db = {

	con : null,

	connect:function(){
		this.con = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'juan73',
			database: 'ToDo'
		});
		this.con.connect(function(err){
			if(err){
				console.error({ "Internal DB error" : err.stack});
			}
		});
	},

	disconnect:function(){
		this.con.end(function(err){
			if(err){
				throw err;
			}
		})
	},

	query:function(sql, callback){
		this.con.query(sql, callback);
	},

	escape:function(escapeString){
		return this.con.escape(escapeString);
	}
}

module.exports = db;
