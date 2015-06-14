var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'cheehoonha',
	password: 'gkwlgns87',
	database: 'mirimiri_development'
});

exports.connection = connection;