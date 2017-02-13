const Command = require('../command');

/**
 * Lowers the pen.
 */
module.exports = new Command('BC', /BC/i, (term, controller) => {
	turtle.drawing = true;
}, true);
