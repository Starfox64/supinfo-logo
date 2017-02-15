const Command = require('../command');

/**
 * Displays the turtle.
 */
module.exports = new Command('MT', /MT/i, (term, controller) => {
	turtle.setHidden(false);
}, true);
