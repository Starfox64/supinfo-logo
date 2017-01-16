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
		let command = this.detectCommand(input, terminal);
		if (!command)
			return false;

		if (this.captureProcedure && command.name !== 'FIN') {
			this.captureProcedure.commands.push(input);
			return true;
		}

		return command.execute(input, terminal, this);
	}

	/**
	 * Attempts to detect which command corresponds to the input.
	 * @param {String} input - The string to be scanned for commands.
	 * @param {Object} terminal - JQuery Terminal instance.
	 * @returns {Command|null}
	 */
	detectCommand(input, terminal) {
		input = input.trim();
		let commandRegex = input.match(/\w+/);

		if (!commandRegex) {
			terminal.error(`${input}: Syntax Error: Cannot parse input!`);
			return;
		}

		let commandName = commandRegex[0].toUpperCase();
		let command = this.getCommand(commandName);

		if (!command) {
			terminal.error(`${commandName}: Unknown Command: This command does not exist!`);
			return;
		}

		return command;
	}

	/**
	 * Splits commands entered on a single line.
	 * @param {String} input - A string containing 0,n commands.
	 * @param {Object} terminal - JQuery Terminal instance.
	 * @returns {Array<String>}
	 */
	splitCommands(input, terminal) {
		let result = [];

		while (input.length > 0) {
			let command = this.detectCommand(input);
			let match = command.argumentRegex.exec(input);

			if (!match) {
				terminal.error(`${command.name}: Syntax Error: Could not validate arguments!`);
				return [];
			}

			let commandInput = match[0];

			result.push(commandInput);
			input = input.substring(commandInput.length).trim();
		}

		return result;
	}
}

module.exports = TerminalController;
