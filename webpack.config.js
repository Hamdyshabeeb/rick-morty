const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-plugin-react');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new ESLintPlugin(),
	],
};
