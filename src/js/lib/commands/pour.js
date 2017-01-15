const Command = require('../command');
const Procedure = require('../procedure');

/**
 * Initializes a new function.
 */
module.exports = new Command('POUR', /POUR\s+(\w+)((\s+:\w+)*)/i, (term, controller, name, args) => {
	if (controller.captureProcedure)
		return term.error('Already defining function, use FIN first!');

	let existingCommand = controller.getCommand(name);
	if (existingCommand && existingCommand.isCore)
		return term.error(`${existingCommand.name} is a core command and cannot be overriden.`);

	args = args.trim().match(/:\w+/g) || [];

	controller.captureProcedure = new Procedure(name, args);
}, true);
