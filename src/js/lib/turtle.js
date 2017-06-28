const Vector = require('victor');

/**
 * Object representing the turtle seen on the canvas
 */
class Turtle {
	/**
	 * Instanciates a turtle
	 * @param {Integer} x - position in the horizontal axis
	 * @param {Integer} y - position in the vertical axis
	 * @param {Float} angle - Direction. In degrees, angle between the direction's vector of Turtle and the X axis's vector
	 * @param {Boolean} drawing - If true, movements will be drawn to canvas
	 * @param {Boolean} hidden - If true, the turtle won't be shown on canvas, if false, it will be
	 * @constructor
	 */
	constructor(x, y, angle, drawing, hidden) {
		this.position = new Vector(x, y);
		this.previousPos = this.position.clone();

		this.angle = new Vector(1, 0);
		this.angle.rotateDeg(angle).normalize();

		this.drawing = drawing;
		this.hidden = hidden;

		this.draw();
	}

	/**
	 * Draw the turtle on screen
	 */
	draw() {
		turtleRenderingContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		if (!this.hidden) {
			turtleRenderingContext.strokeStyle = '#FFFF00';

			turtleRenderingContext.beginPath();
			turtleRenderingContext.moveTo(this.position.x, this.position.y);
			turtleRenderingContext.arc(
				this.position.x, this.position.y, 10,
				this.angle.angle() + (Math.PI / 4),
				this.angle.angle() + (7 * Math.PI / 4)
			);
			turtleRenderingContext.closePath();
			turtleRenderingContext.stroke();
		}
	}

	/**
	 * Draw the path the turtle just traveled through
	 */
	drawPath() {
		if (this.drawing) {
			renderingContext.beginPath();
			renderingContext.moveTo(this.previousPos.x, this.previousPos.y);
			renderingContext.lineTo(this.position.x, this.position.y);
			renderingContext.closePath();
			renderingContext.stroke();
		}
	}

	/**
	 * Draw the new step of the drawing plus the turtle on the canvas
	 */
	update() {
		//draw the new step and save the step
		this.drawPath();
		//draw the turtle on top of everything
		this.draw();
	}

	/**
	 * Move the turtle along a line defined by the turtle's direction (angle)
	 * @param {Integer} distance - Distance to travel from current position to new position
	 */
	moveAlongDirection(distance) {
		//TODO: move by a number of pixels, not by a distance
		this.previousPos = this.position.clone();
		this.position.add(
			this.angle.clone().multiply(
				new Vector(distance, distance)
			)
		);
		this.update();
	}

	/**
	 * Add degrees to turtle's current angle (CCW)
	 * @param {Integer} degrees - Amount of degrees to add to current angle
	 */
	rotateBy(degrees) {
		this.angle.rotateDeg(degrees).normalize();
		this.draw();
	}

	/**
	 * Set hidden, and then redraw the canvas with(out) the turtle
	 * @param {Boolean} hidden - whether the turtle is hidden or not
	 */
	setHidden(hidden) {
		this.hidden = hidden;
		this.draw();
	}
}

module.exports = Turtle;
