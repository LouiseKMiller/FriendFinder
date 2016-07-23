// ===============================================================================
// DATA
// Below data will hold all of the potential friends information.
//
// ===============================================================================


var friendsArray = [
		{
		name: "Opus",
		photoURL: "http://i.ebayimg.com/images/g/J1wAAOSwpDdVbZvG/s-l300.jpg",
		answers: ["0", "3"],
	},
	{
		name: "Steve Dallas",
		photoURL: "https://en.gravatar.com/userimage/7142978/18bd423b0c3d1d2c6597b618e72bea91.jpg?size=200",
		answers: ["0", "0"],
	},
	{
		name: "Bill the Cat",
		photoURL: "https://s-media-cache-ak0.pinimg.com/736x/be/10/ef/be10ef819e52bdda00c75b6a9f037f2d.jpg",
		answers: ["1", "1"],
	},
	{
		name: "Binkley",
		photoURL: "http://www.jrj-socrates.com/Cartoon%20Pics/Comics/Bloom%20County/Binkley_300.gif",
		answers: ["2", "2"],
	},
	{
		name: "Milo",
		photoURL: "https://s-media-cache-ak0.pinimg.com/736x/74/07/7a/74077a755e37aada5bb2e008fa017258.jpg",
		answers: ["3", "3"],
	},
	{
		name: "Portnoy",
		photoURL: "http://www.jrj-socrates.com/Cartoon%20Pics/Comics/Bloom%20County/Portnoy_300.gif",
		answers: ["3", "3"],
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;