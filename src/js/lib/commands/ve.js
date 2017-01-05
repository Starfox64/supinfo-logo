const Command = require('../command');
const util = require('../util');

/**
 * Clears the drawing area, resets the turtle and centers the screen.
 */
module.exports = new Command('VE', /VE/i, (term, controller) => {
	util.centerCanvas();
}, true);
