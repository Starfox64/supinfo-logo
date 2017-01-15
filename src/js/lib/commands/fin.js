const Command = require('../command');

/**
 * Finalizes the current function and registers it to the controller.
 */
module.exports = new Command('FIN', /FIN/i, (term, controller) => {
	if (!controller.captureProcedure)
		return term.error('Cannot use FIN when not capturing a procedure.');

	controller.registerCommand(controller.captureProcedure);
	controller.captureProcedure = false;
}, true);
