const Command = require('../command');
const util = require('../util');
const Turtle = require('../turtle');

/**
 * Clears the drawing area, resets the turtle and centers the screen.
 */
module.exports = new Command('VE', /VE/i, (term, controller) => {
	renderingContext.clearRect(0, 0, 3000, 3000);
	util.centerCanvas();
	turtle = new Turtle(1500, 1500, 0, true, false);
}, true);
