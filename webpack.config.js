var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('style.css');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: './src/dist'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: extractCSS.extract('css')}
		]
	},
	plugins: [
		extractCSS
	]
}
