var app = function(){

	var express = require('express'),
		fs = require('fs'),
		bodyParser = require('body-parser'),
		config = require('./../config');
	var app = express();

	var mongoose = require('mongoose');
	mongoose.connect(config.mongoDB.string);

	/*
	 * Serve favicon before logging starts
	 */
	var favicon = require('serve-favicon');
	app.use(favicon(config.favicon.src));

	/*
	 * Set up logging
	 */
	var logger = require('morgan');
	var logfile = config.logging.logDir + config.logging.logFile;
	fs.exists(logfile, function(exists){
		if(!exists){
			fs.mkdirSync(config.logging.logDir);
			fs.writeFileSync(logfile,'',[], function(err){
				if(err){
					console.error('Error creating log file');
				}else{
					console.info('Log file created at ' + logfile)
				}
			})
		}else{
			console.info('Using log file at ' + logfile)
		}
	});
	var accessLogStream = fs.createWriteStream(logfile, {flags: 'a'});
	app.use(logger('combined', {stream: accessLogStream}));
	app.use(logger('dev'));


	//serve static resources
	app.use(express.static('public'));


	//serve index
	/**
	 * @api {get} / Get Application
	 * @apiName GetApp
	 * @apiGroup GetApp
	 *
	 * @apiDescription
	 * Grabs the index html file that is the wonderful SPA.
	 *
	 * @apiSuccess html file
	 */
	app.get('/', function(req,res) {
		res.sendFile('public/index.html');
	});


	/*
	 * Set up middleware
	 */

	//auth
	var auth = require('./middleware/Auth.js');
	app.use('/api/', auth);

	//check permissions
	var entitlements = require('./middleware/Entitlements');
	app.use('/api/', entitlements);

	//parse the json we have received
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	/*
	 * Time to do routes.
	 *
	 * Done in external file for sensibleness
	 */
	var APIControlRouter = require('./routes/APIControlRouter')();
	app.use('/api', APIControlRouter);

	//Got here? well we have no fucking idea what you want! have the index, the app will deal with your 404
    app.use('*', function(req, res, next){

	    var path = require('path');
	    res.sendFile(path.resolve('public/index.html'));
    });

	return app;
};

module.exports = app;