let commands = [
	require('./av'),
	require('./re'),
	require('./td'),
	require('./tg'),
	require('./fcc'),
	require('./lc'),
	require('./bc'),
	require('./ve'),
	require('./ct'),
	require('./mt'),
	require('./repete'),
	require('./pour'),
	require('./fin')
];

commands.map((command) => {
	window.controller.registerCommand(command);
});
