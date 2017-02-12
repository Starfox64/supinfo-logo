const Command = require('../command');

/**
 * Makes the turtle move forward.
 */
module.exports = new Command('AV', /AV\s+(\d+)/i, (term, controller, pixels) => {
	pixels = Number(pixels);
	turtle.moveAlongDirection(pixels);
	turtle.draw();

}, true);
