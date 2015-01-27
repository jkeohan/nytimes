var express = require('express');
var router = express.Router();
var fs = require('fs');
var appdata = require('../bestsellers_test.json')
//var appdata = require('../bestsellers_test.json');


fs.readFile('../bestsellers_test.json', function (err,data) {
	console.log(data)
	content = JSON.stringify(data)
	console.log("content stringify")
	console.log(content)

});

// fs.readFile('../bestsellers_test.json', function(err, data) {
//   if(err) throw err;
//   console.log(JSON.stringify(data.toString()));
// });


/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(Object.keys(appdata).length)
	//var books = appdata
  res.render('index', { 
  	title: 'NY Times Book Review',
  	page: 'home'
  	//books: books
  });
});


module.exports = router;

// GET /books - shows all books
// POST /book - creates a new book
// GET /book/:id - shows a specific book
// PUT /book/:id - updates a specific book
// DELETE /book/:id - deletes a book from the hash
