var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'liebiao'
});

/* GET home page. */
router.post('/xian', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT id,name FROM biao',
	  function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
	var aa=(req.body.id-1)*2;
  connection.query('SELECT * FROM biao LIMIT '+aa+',2',function(err, rows, fields) {
	  	res.send(rows)
	 })
});


module.exports = router;
