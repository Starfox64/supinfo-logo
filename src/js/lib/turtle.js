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
		this.previousPos = new Vector(0,0);
		this.angle = new Vector(1, 0);
		this.angle.rotateDeg(angle).normalize();
		this.drawing = drawing;
		this.hidden = hidden;
	}

	/*
	 * Draw the path the turtle just traveled through
	 */
	draw() {
		if (this.drawing) {
			renderingContext.beginPath();
			renderingContext.moveTo(this.previousPos.x, this.previousPos.y);
			renderingContext.lineTo(this.position.x, this.position.y);
			renderingContext.closePath();
			renderingContext.stroke();
		}
	}

	/**
	 * Move the turtle on a line defined by the turtle's direction (angle)
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
		this.draw();
	}

	/**
	 * Set turtle's angle from the X axis
	 * @param {Integer} angle - In degrees, the new angle
	 */
	setAngle(angle) {
		this.angle.rotateDeg(angle).normalize();
	}
	/**
	 * Add degrees to turtle's current angle (CCW)
	 * @param {Integer} degrees - Amount of degrees to add to current angle
	 */
	rotateBy(degrees) {
		this.angle.rotateDeg(degrees).normalize();
	}

	/**
	 * Returns wether turtle is hidden or not
	 * @return {Boolean}
	 */
	isHidden() {
		return this.hidden;
	}
	/**
	 * Returns wether movements will be drawn or not
	 * @return {Boolean}
	 */
	isDrawing() {
		return this.drawing;
	}
}

module.exports = Turtle;
