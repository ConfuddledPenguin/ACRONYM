/**
 * Created by Thomas on 11/6/2015.
 */

var express = require('express'),
    bodyParser = require('body-parser');

var APIControl = function(){

    var APIControl = express.Router();

    var userRouter = require('./Users')();
    APIControl.use('/users', userRouter);

	var fridgeRouter = require('./Fridges')();
	APIControl.use('/fridges', fridgeRouter);

	var productRouter = require('./Products')();
	APIControl.use('/products', productRouter);

	var dashRouter = require('./Dash')();
	APIControl.use('/dashboard', dashRouter);

	APIControl.use('*', function(req, res){

		res.status(404).send('api not found');

	});

    return APIControl;

};

module.exports = APIControl;
