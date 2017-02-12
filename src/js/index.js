window.jQuery = require('jquery');
window.$ = window.jQuery;
require('jquery.terminal');

require('../css/reset.css');
require('../css/terminal.css');
require('../css/style.css');


(function() {
	'use strict';

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

		window.renderingContext = $('#canvas').get(0).getContext('2d');
		renderingContext.strokeStyle = 'white';
		window.turtle = new (require('./lib/turtle'))(1500,1500,0, true, false);
	});
})();
