/**
 * A command is a function that will be called when it's name and arguments
 * are entered in the terminal.
 */
class Command {
	/**
	 * Instanciates a command.
	 * @constructor
	 * @param {String} name - The name of the command used in the terminal.
	 * @param {Function} callback - The function to execute when the command is called.
	 * @param {Boolean} isCore - If set to true the command won't be overriden by others.
	 */
	constructor(name, callback, isCore = false) {
		this.name = name.toUpperCase();
		this.callback = callback;
		this.isCore = isCore;
	}

	/**
	 * Executes a command's callback.
	 * @param {String} input - The expression entered by the user.
	 * @param {Object} terminal - JQuery Terminal instance.
	 * @param {TerminalController} controller - The instance of the TerminalController.
	 */
	execute(input, terminal, controller) {
		let args = input.trim().substr(this.name.length);
		this.callback(args, terminal, controller);
	}
}

module.exports = Command;