/**
 * Handles and parses input then calls command callbacks.
 */
class TerminalController {
	/**
	 * Instanciates a Terminal parser.
	 * @constructor
	 */
	constructor() {
		this.captureProcedure = false;
		this.commands = {};
	}

	/**
	 * Fetches a command by it's name.
	 * @param {String} commandName - The name of the command.
	 * @returns {Command}
	 */
	getCommand(commandName) {
		return this.commands[commandName.toUpperCase()];
	}

	/**
	 * Registers a command to the terminal.
	 * @param {Command} command - A Command instance.
	 * @returns {Boolean}
	 */
	registerCommand(command) {
		let existingCommand = this.getCommand(command.name);
		if (existingCommand && existingCommand.isCore)
			return false;

		this.commands[command.name] = command;
		return true;
	}

	/**
	 * Removes (or unregisters) a command from the terminal.
	 * @param {String|Command} command - The command name or the command object.
	 * @returns {Boolean}
	 */
	removeCommand(command) {
		let commandName = command;
		if (typeof command == 'object')
			commandName = command.name;

		if (this.getCommand(commandName)) {
			delete this.commands[commandName];
			return true;
		}

		return false;
	}

	/**
	 * Attempts to match an input to a command and executes it.
	 * @param {String} input - Expression entered in the terminal.
	 * @param {Object} terminal - JQuery Terminal instance.
	 * @returns {Boolean}
	 */
	executeInput(input, terminal) {
		let command = input.match(/\w+/);

		if (!command) {
			terminal.error('Invalid input!');
			return false;
		}

		command = this.getCommand(command[0]);

		if (!command) {
			terminal.error('Unrecognized command!');
			return false;
		}

		if (this.captureProcedure && command.name !== 'FIN') {
			this.captureProcedure.commands.push(input);
			return true;
		}

		return command.execute(input, terminal, this);
	}
}

module.exports = TerminalController;
