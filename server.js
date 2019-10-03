const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 3000,
	con = require("./config/db.js");

// body-parser
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	req.con = con
	next();
})

app.use(function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

app.listen(port);

// rotas
require('./routes')(app);

console.log('Servidor HTTP esta escutando na porta ' + port);