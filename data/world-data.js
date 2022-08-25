module.exports = {
	rooms: [
		{
			id: 1,
			name: 'Crossroad',
			description:
				'You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.',
			exits: { n: 2, e: 3, w: 4, s: 5 },
		},
		{
			id: 2,
			name: 'Northern point',
			description:
				'You are standing at the north point of a crossroad. To the south, you see an empty intersection.',
			exits: { s: 1 },
		},
		{
			id: 3,
			name: 'Eastern point',
			description:
				'You are standing at the east point of a crossroad. To the west, you see an empty intersection. To the east, you see a dark room.',
			exits: { w: 1, e: 7 },
		},
		{
			id: 4,
			name: 'Western point',
			description:
				'You are standing at the west point of a crossroad. To the east, you see an empty intersection.',
			exits: { e: 1 },
		},
		{
			id: 5,
			name: 'Southern point',
			description:
				'You are standing at the south point of a crossroad. To the north, you see an empty intersection. To the south, you see a dark room.',
			exits: { n: 1, s: 6 },
		},

		{
			id: 6,
			name: 'Southern dark room',
			description:
				'You are standing in a dark room beyond the south point of a crossroad. To the north, there is the south point.',
			exits: { n: 5 },
			isDark: true,
		},

		{
			id: 7,
			name: 'east dark room',
			description:
				'You are standing in a dark room beyond the east point of a crossroad. To the west, there is the east point.',
			exits: { w: 3 },
			isDark: true,
		},
	],
	items: [
		{
			name: 'rock',
			description: 'Just a simple rock',
			room: 1,
		},
		{
			name: 'sandwich',
			description: 'A tasty looking sandwich',
			room: 2,
			isFood: true,
		},
		{
			name: 'candy',
			description: 'A tasty looking candy',
			room: 6,
			isFood: true,
		},
		{
			name: 'ice-cream',
			description: 'A refreshing ice-cream',
			room: 4,
			isFood: true,
		},

		{
			name: 'flashlight',
			description: 'A powerful flashlight',
			room: 7,
			isFlash: true,
		},

		{
			name: 'oil-lamp',
			description: 'A sturdy bright oil lamp',
			room: 2,
			isFlash: true,
		},
	],
	enemies: [
		{
			name: 'goblin',
			description: 'A mean-looking goblin',
			room: 3,
		},
		{
			name: 'beast',
			description: 'A mean-looking beast',
			room: 2,
		},
	],
};
