var datastore = require('./DataStore.js');

function Model(schema) {
	var store = datastore.store
	this.schema = schema;
	this.id = null;

	for (var key in this.schema) {
		this[key] = null;
	}

	store[this.constructor.name] = store[this.constructor.name] || [];
console.log('this.id',this.id);
	Model.getNextId = function() {
		if (typeof Model.id !== 'number') {
			return Model.id = 1;
		}
		return Model.id += 1;
	}
}


module.exports = Model;