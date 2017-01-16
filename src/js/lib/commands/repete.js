const Command = require('../command');

/**
 * Repeats the entered commands a set amound of times.
 */
module.exports = new Command('REPETE', /REPETE\s+(\d+)\s+\[(.+)\]/i, (term, controller, times, commands) => {
	times = Number(times);
	console.log(commands);
	commands = controller.splitCommands(commands, term);
	console.log(commands);

	for (var i = 0; i < times; i++) {
		for (let commandInput of commands) {
			controller.executeInput(commandInput);
		}
	}
}, true);
