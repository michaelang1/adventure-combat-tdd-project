const { expect } = require('chai');
const { Room } = require('../class/room.js');
const { DarkRoom } = require('../class/darkroom.js');
const { Flashlight } = require('../class/flashlight.js');
const { Player } = require('../class/player.js');

describe('DarkRoom', () => {
	let darkRoom;
	let player;
	let flashlight;

	beforeEach(() => {
		darkRoom = new DarkRoom('darkroom', 'completely dark room');
		player = new Player('player', darkRoom);
		flashlight = new Flashlight('flashy', 'bright flashlight');
	});

	it('should have name and description attributes', function () {
		expect(darkRoom.name).to.equal('darkroom');
		expect(darkRoom.description).to.equal('completely dark room');
	});

	it('should be an instance of DarkRoom and Room', () => {
		expect(darkRoom instanceof Room).to.be.true;
		expect(darkRoom instanceof DarkRoom).to.be.true;
	});

	it('should be dark by default', () => {
		expect(darkRoom.darkness).to.be.true;
	});

	it('should still be dark when player picks up a flashlight', () => {
		darkRoom.items.push(flashlight);
		player.takeItem('flashy');
		expect(darkRoom.darkness).to.be.true;
	});

	it('should be bright when player switches a flashlight and dark again after another switch', () => {
		player.items.push(flashlight);
		player.switchFlash();
		expect(darkRoom.darkness).to.be.false;

		player.switchFlash();
		expect(darkRoom.darkness).to.be.true;

		player.switchFlash();
		expect(darkRoom.darkness).to.be.false;
	});

	it('should be dark when player drops a flashlight', () => {
		player.items.push(flashlight);
		player.switchFlash();
		expect(darkRoom.darkness).to.be.false;

		player.dropItem('flashy');
		expect(darkRoom.darkness).to.be.true;
	});

	it('should be dark when player tries to switch flashlight but does not have one', () => {
		expect(player.items.length).to.equal(0);
		player.switchFlash();
		expect(darkRoom.darkness).to.be.true;
	});

	it('should reset to dark upon entry by the player', () => {
		let regularRoom = new Room(
			'Regular Room',
			'A regular room for testing'
		);
		regularRoom.connectRooms('n', darkRoom);
		player.currentRoom = regularRoom;
		expect(player.currentRoom).to.equal(regularRoom);

		darkRoom.darkness = false;
		expect(darkRoom.darkness).to.be.false;

		player.move('n');
		expect(player.currentRoom).to.equal(darkRoom);
		expect(darkRoom.darkness).to.be.true;
	});
});
