/**
 * Created by Tom on 15/11/2015.
 */

var q = require('q');
var deferred = q.defer();
var mongoose = require('mongoose');
var config = require('../../../config');

var products = {

	addProduct: function(product){

		var productModel = require('../../models/Product.model');

		var productDAO = new productModel({
			_id: product.barcode,
			code: product.barcode,
			weight: product.weight
		});

		if(product.name){
			productDAO.name = product.name;
		}
		if(product.description){
			productDAO.description = product.description;
		}

		productDAO.save(function(err, doc){

			if(err){

				if(err.code===11000){

					deferred.reject('Product Already Exists');
				}

				deferred.reject('error saving product');
			}else{
				deferred.resolve(doc);
			}

		});

		return deferred.promise;
	},

	getProduct: function(id){

		var productModel = require('../../models/Product.model');

		deferred = q.defer();
		productModel.findById(id, function(err, doc){

			if(err){
				deferred.reject("Error with product code");
			}else if(doc){
				deferred.resolve(doc);
			}

		});

		return deferred.promise;
	},

	updateProduct: function(id, product){

		var productModel = require('../../models/Product.model');

		deferred = q.defer();

		productModel.findOneAndUpdate(
			{_id: id},
			{
				name: product.name,
				barcode: product.barcode,
				weight: product.weight,
				description: product.description
			},
			{new: true},
			function(err, doc) {

				if (err) {
					deferred.reject('Error updating product');
				} else {
					deferred.resolve(doc);
				}

			});

		return deferred.promise;
	},

	searchProducts: function(text, number){

		text = (!text)? '*' : text;
		number = (!number)? 0 : number;

		var productModel = require('../../models/Product.model');

		deferred = q.defer();

		if( text === '*'){

			productModel
				.find({})
				.sort({'name': 1})
				.exec(function(err, results){

					if(err){
						deferred.reject('Error searching for string');
					}else{

						var r = results.slice(number, number + 25);

						deferred.resolve(r);
					}
				});

		}else{

			productModel
				.find(
					{ $text: { $search: text}},
					{ score : { $meta: "textScore" } }
				)
				.sort({ score : { $meta : 'textScore' } })
				.exec(function(err, results){

					if(err){
						deferred.reject('Error searching for string');
					}else{

						var r = results.slice(number, number + 25);

						deferred.resolve(r);
					}
				});

		}

		return deferred.promise;

	}

};


module.exports = products;