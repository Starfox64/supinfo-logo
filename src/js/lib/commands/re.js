const Command = require('../command');

/**
 * Makes the turtle move backward.
 */
module.exports = new Command('RE', /RE\s+(\d+)/i, (term, controller, pixels) => {
	pixels = - Number(pixels);
	turtle.moveAlongDirection(pixels);
}, true);
