const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
//const copyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");
const webpackPwaManifest = require("webpack-pwa-manifest");
const workboxWebpackPlugin = require("workbox-webpack-plugin");


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
		new webpackPwaManifest({
			name: 'Pet-social tu app de mascotas famosas',
			short_name: 'Pet-social',
			description: 'Con Pet-social puedes ver fotos de los animales en tendencia',
			background_color: '#fff',
			theme_color: '#b1a',
			icons: [
				{
					src: path.resolve('./src/assets/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512],
					purpose: "maskable"
				}
			]
		}),
		new workboxWebpackPlugin.GenerateSW({
			maximumFileSizeToCacheInBytes: 5000000,
			runtimeCaching:[
				{
					urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
					handler: 'CacheFirst',
					options: {
						cacheName: 'images'
					}
				},
				{
					urlPattern: new RegExp("https://pet-social-jmg24a.vercel.app"),
					handler: 'NetworkFirst',
					options: {
					  cacheName: 'api'
					}
				}
			]
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
