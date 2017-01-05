const Command = require('../command');

/**
 * Makes the turtle turn left.
 */
module.exports = new Command('TG', /TG\s+(\d+)/i, (term, controller, degrees) => {
	degrees = Number(degrees);

}, true);
