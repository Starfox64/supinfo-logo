const Command = require('../command');
const util = require('../util');
const Turtle = require('../turtle');

/**
 * Clears the drawing area, resets the turtle and centers the screen.
 */
module.exports = new Command('VE', /VE/i, (term, controller) => {
	renderingContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	turtleRenderingContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	util.centerCanvas();
	turtle = new Turtle(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, -90, true, false);
}, true);
