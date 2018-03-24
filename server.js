const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 3005;

let db = require('./config/db');


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err);

	db = database.db("farihara");
	require('./app/routes')(app, db);
	app.listen(port, () => console.log('Hello there'));
});
