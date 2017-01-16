const Command = require('./command');

/**
 * A Procedure is a user created command the executes multiple commands.
 */
class Procedure extends Command {
	/**
	 * Instanciates a procedure.
	 * @constructor
	 * @param {String} name - The name of the command used in the terminal.
	 * @param {Array<String>} args - An array of argument names (prefixed with ':').
	 */
	constructor(name, args) {
		let argumentRegex = '';
		for (var i = 0; i < args.length; i++)
			argumentRegex += '\\s+(\\w+)';

		super(name, new RegExp(`${name}${argumentRegex}`, 'i'));

		this.args = args;
		this.commands = [];
	}

	/**
	 * Executes a command's callback.
	 * @param {String} input - The expression entered by the user.
	 * @param {Object} terminal - JQuery Terminal instance.
	 * @param {TerminalController} controller - The instance of the TerminalController.
	 * @returns {Boolean}
	 */
	execute(input, terminal, controller) {
		let args = this.argumentRegex.exec(input.trim());
		if (!args) {
			terminal.error(`${input}: Syntax Error: Could not validate arguments!`);
			return false;
		}

		args = args.slice(1, args.length);

		this.commands.forEach((command) => {
			controller.executeInput(this.replaceArguments(command, args), terminal);
		});
	}

	/**
	 * Replaces the command arguments by their actual value.
	 * @param {String} input - The captured command expression.
	 * @param {Array<String>} args - The values the the argument names should be replaced with.
	 * @returns {String}
	 */
	replaceArguments(input, args) {
		this.args.forEach((argument, index) => {
			input = input.replace(argument, args[index]);
		});

		return input;
	}
}

module.exports = Procedure;
