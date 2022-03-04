const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname,"dist"),
		publicPath: "/",
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js",".jsx"]
	},
	mode: 'production',
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use:{
					loader: "html-loader"
				}
			},
			{
				test: /\.(jpg|png|svg)$/,
				type: "assect/resource"
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		/*new copyWebpackPlugin({
			patterns:[
				{
					from: path.resolve(__dirname, "src/assets/icons"),
					to: "assets/icons"
				}
			]
		}),*/
		new CleanWebpackPlugin()	
	],
	optimization: {
		minimize: true,
		minimizer:[
			new terserWebpackPlugin()
		]
	}
}
