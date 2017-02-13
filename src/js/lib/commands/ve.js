const Command = require('../command');
const util = require('../util');
const Turtle = require('../turtle');

/**
 * Clears the drawing area, resets the turtle and centers the screen.
 */
module.exports = new Command('VE', /VE/i, (term, controller) => {
	turtle = new Turtle(1500, 1500, 0, true, false);
	util.centerCanvas();
}, true);
