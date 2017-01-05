const Command = require('../command');

/**
 * Makes the turtle turn right.
 */
module.exports = new Command('TD', /TD\s+(\d+)/i, (term, controller, degrees) => {
	degrees = Number(degrees);

}, true);
