window.jQuery = require('jquery');
window.$ = window.jQuery;
require('jquery.terminal');

require('../css/reset.css');
require('../css/terminal.css');
require('../css/style.css');


(function() {
	'use strict';

	window.CANVAS_HEIGHT = 3000;
	window.CANVAS_WIDTH = 3000;

	window.controller = new (require('./lib/terminal-controller'))();
	require('./lib/commands');

	const util = require('./lib/util');

	$(document).ready(() => {
		$('#terminal').terminal((command, term) => {
			controller.executeInput(command, term);
		}, {
			prompt: '?',
			greetings: '',
			clear: false
		});

		util.centerCanvas();

		window.renderingContext = $('#bg').get(0).getContext('2d');
		window.turtleRenderingContext = $('#fg').get(0).getContext('2d');
		renderingContext.strokeStyle = '#FFFFFF';
		window.turtle = new (require('./lib/turtle'))(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, -90, true, false);
	});
})();
