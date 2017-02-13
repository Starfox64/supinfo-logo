const Command = require('../command');

/**
 * Changes the color of the turtle.
 */
module.exports = new Command('FCC', /FCC\s+(#[0-9A-F]{6})/i, (term, controller, color) => {
	renderingContext.strokeStyle = color.toUpperCase();
}, true);
