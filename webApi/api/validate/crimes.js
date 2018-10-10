"use strict";

var _ = require('underscore');
var Joi = require('joi');

var models = require('../models');

function CrimeValidate(){};
CrimeValidate.prototype = (function(){

	return {
		find: {
			query: (() => {
				return {
					page: Joi.number().min(1).optional()
				}
			})
		}
  //   create: {
  //     payload: (function payload() {
  //       var crimeSchema = new models.Crime().schema;
  //       return {
  //         compNos : crimeSchema.user.required(),
  //         test : crimeSchema.test.required()
  //       };
  //   })()
  // }
		// findByID: {
		// 	path: (function path() {
		// 		var taskSchema = new models.Task().schema;
		// 		return {
		// 			task_id : taskSchema.taskId.required().rename('taskId')
		// 		};
		// 	})()
		// },
		// find : {
		// 	query: (function query() {
		// 		var taskSchema = new models.Task().schema;
		// 		return {
		// 			description : taskSchema.description
		// 		};
		// 	})()
		// },
		// insert: {
		// 	payload: (function payload() {
		// 		var taskSchema = new models.Task().schema;
		// 		return {
		// 			description : taskSchema.description.required()
		// 		};
		// 	})()
		// },
		// update: (function update() {
		// 	var taskSchema = new models.Task().schema;
		// 	return {
		// 		path: {
		// 			task_id : taskSchema.taskId.required().rename('taskId')
		// 		},
		// 		payload: {
		// 			description : taskSchema.description.required()
		// 		}
		// 	}
		// })(),
		// delete: {
		// 	path: (function path() {
		// 		var taskSchema = new models.Task().schema;
		// 		return {
		// 			task_id : taskSchema.taskId.required().rename('taskId')
		// 		};
		// 	})()
		// }
	};
})();

var crimeValidate = new CrimeValidate();
module.exports = crimeValidate;