var connection = require('./connection.js').connection;

function createRestaurantTable() {
	connection.connect();

	var query = 'CREATE TABLE restaurant' +
		'(id INT(11) AUTO_INCREMENT, ' +
		'title VARCHAR(255), ' +
		'text TEXT, ' +
		'PRIMARY KEY(id));';

	connection.query(query, function(err, result) {
		if (err)
			console.log('Error: Table was not created. ' + err);
		else
			console.log('Table created!');
	});

	connection.end();
}

function insertIntoRestaurantTable() {
	connection.connect();

	var restaurant = {'id':null,
					'title':"Burger King",
					'text':"Very Delicious"}

	var query = 'INSERT INTO restaurant set ?';

	connection.query(query, restaurant, function(err, result) {
		if (err)
			console.log('Error: Insert failed. ' + err);
		else
			console.log('Table Inserted into restaurant table!');
	});

	connection.end();
}

function selectFromRestaurantTable(callback) {
	connection.connect();

	var query = 'SELECT * FROM restaurant';
	
	connection.query(query, callback);
/*
	connection.query(query, function(err, result) {
		if (err) {
			console.log('Error: Select failed. ' + err);
			callback(err, null);
		}
		else {
			console.log('Table Selected from restaurant table!');
			callback(null, result);
		}
	});
*/
	connection.end();
}

exports.createRestaurantTable = createRestaurantTable;
exports.insertIntoRestaurantTable = insertIntoRestaurantTable;
exports.selectFromRestaurantTable = selectFromRestaurantTable;

