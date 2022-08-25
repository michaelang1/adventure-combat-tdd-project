const { Room } = require('./room');

class DarkRoom extends Room {
	constructor(name, description) {
		super(name, description);
		this.darkness = true;
	}

	printRoom() {
		if (this.darkness) {
			console.clear();
			console.log('');
			console.log(this.name);
			console.log('');
			console.log(this.description);
			console.log('');
			console.log('You cannot see anything, find a flashlight or lamp!');
		} else {
			super.printRoom();
		}
	}
}
module.exports = {
	DarkRoom,
};
