// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

var friends = require('../data/friend-data.js');
var path = require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------
	function indexOfMin(arr) {
	    if (arr.length === 0) {
	        return -1;
	    }

	    var min = arr[0];
	    var minIndex = 0;

	    for (var i = 1; i < arr.length; i++) {
	        if (arr[i] < min) {
	            minIndex = i;
	            min = arr[i];
	        }
	    }

	    return minIndex;
	}

	app.post('/api/friends', function(req, res){

		// Enter code here to handle incoming survey results and handle compatibility logic
		var userAnswers = req.body.answers;
		var scores = [];

		for (var i=0; i<friends.length; i++) {
			scores[i] = 0;
			for (var j=0; j<userAnswers.length; j++) {
				scores[i] += Math.abs((parseInt(friends[i].answers[j]) - parseInt(userAnswers[j])));
			}
		}
		var matchIndex = indexOfMin(scores);

		friends.push(req.body);

		res.json(friends[matchIndex]);

	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		friends = [];

		console.log(friends);
	})
}