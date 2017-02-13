const Command = require('../command');

/**
 * Rises the pen.
 */
module.exports = new Command('LC', /LC/i, (term, controller) => {
	turtle.drawing = false;
}, true);
