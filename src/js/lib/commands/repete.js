const Command = require('../command');

/**
 * Repeats the entered commands a set amound of times.
 */
module.exports = new Command('REPETE', /REPETE\s+(\d+)\s+\[(.+)\]/i, (term, controller, times, commands) => {
	times = Number(times);

}, true);
