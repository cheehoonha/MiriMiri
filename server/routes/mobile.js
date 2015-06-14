var express = require('express');
var mobile = express.Router();
var restaurantDB = require('./../database/restaurant.js');
var async = require("async");

// Test methods
mobile.get('/', function(req, res) {
	res.json({
		foo: "bar"
	});
});

var names = ['chee', 'wan', 'jin', 'hyun'];
mobile.get('/complicated', function(req, res) {
	var result = [];
	for (var name in names) {
		result.push({
			name: names[name]
		});
	}

	res.json({
		players: result
	});
});

// Methods for production version
mobile.get('/getRestaurantList', function(req, res) {
	async.waterfall([
		function(callback) {
			restaurantDB.selectFromRestaurantTable(callback)
		}
	], function(err, result) {
		// result now equals 'done'
		if (err) {
			console.log("Waterfall - Error: " + err);
			return;
		}

		var resultCode = 0;
		var userId = "ABCDEFG1234";
		var orderType = 1;
		var numOfResult = 17;
		var restaurants = result;

		res.json({
			result_code: resultCode,
			user_id: userId,
			order_type: orderType,
			num_of_result: numOfResult,
			restaurants: restaurants
		});
	});
});

module.exports = mobile;