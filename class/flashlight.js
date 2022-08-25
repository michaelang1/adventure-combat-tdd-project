const { Item } = require('./item');

class Flashlight extends Item {
	constructor(name, description) {
		super(name, description);
	}
}

module.exports = {
	Flashlight,
};
