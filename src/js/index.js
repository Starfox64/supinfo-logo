window.jQuery = require('jquery');
window.$ = window.jQuery;
require('jquery.terminal');

require('../css/reset.css');
require('../css/terminal.css');
require('../css/style.css');

(function() {
	'use strict';

	const util = require('./lib/util');

	$(document).ready(() => {
		$('#terminal').terminal((command, term) => {
			term.error('Sorry, it\'s not ready yet :(');
		}, {
			prompt: '?',
			greetings: '',
			clear: false
		});

		util.centerCanvas();

		let canvasContext = $('#canvas').get(0).getContext('2d');
	});
})();
