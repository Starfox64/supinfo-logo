
/**
 * Centers the canvas in the drawarea.
 */
exports.centerCanvas = () => {
	let drawArea = $('#drawarea');
	let canvas = $('#bg');

	drawArea.scrollTop((canvas.height() - drawArea.height()) / 2);
	drawArea.scrollLeft((canvas.width() - drawArea.width()) / 2);
};
