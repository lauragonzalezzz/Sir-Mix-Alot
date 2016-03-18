var datastore = require('./DataStore.js').store;

function Model(schema) {
	this.schema = schema;
	this.id = null;

	for (var key in this.schema) {
		this[key] = null;
	}

	datastore[this.constructor.name] = datastore[this.constructor.name] || [];


}

	Model.prototype.save = function() {
		Model.getNextId();
		datastore[this.constructor.name].push(this);
		console.log('datastore',datastore);
	}

	Model.getNextId = function() {
		if (typeof this.constructor.name.id !== 'number') {
			console.log('this.constructor',this.constructor);
			return this.constructor.name.id = 1;
		}
		return this.constructor.name.id += 1;
	}

	Model.find = function(id) {
		// if (id === this.id) {
		// 	return this.store;
		// }
	}

module.exports = Model;