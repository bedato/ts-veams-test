/**
 * Generic packages
 */
 const fs = require('fs');
 const path = require('path');
 
 /**
  * Webpack
  */
 const webpack = require('webpack');
 const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 const UglifyJsPlugin = require('terser-webpack-plugin');
 
 /**
  * Env & Veams
  */
 const veamsConfig = require('../../../veams-cli.json');
 const env = process.env.NODE_ENV;
 const local = env === 'local';
 
 /**
  * Directory Handling
  */
 const appDirectory = fs.realpathSync(process.cwd());
 const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
 
 /**
  * Generic Webpack Options
  */
 const context = resolveAppPath(veamsConfig.paths.app);
 const docsContext = resolveAppPath(veamsConfig.paths.docs);
 const configContext = resolveAppPath(veamsConfig.paths.config);
 const outputPath = resolveAppPath(veamsConfig.paths.dest);
 const envFile = resolveAppPath(veamsConfig.paths.env) + `/environment.${env}.js`;
 
 /**
  * Rules
  */
 const scriptRule = require('./rules/scripting');
 const styleRule = require('./rules/styling');
 
 /**
  * Plugins
  */
 const scriptPlugins = require('./plugins/scripts.plugins');
 const stylePlugins = require('./plugins/styles.plugins');
 
 /**
  * Optimizer
  */
 function optimizerPlugins() {
	 let plugins = [];
 
	 if (!local) {
		 plugins.push(
			 new UglifyJsPlugin({
				 cache: true,
				 parallel: true,
				 sourceMap: true // set to true if you want JS source maps
			 }),
			 new OptimizeCSSAssetsPlugin({})
		 )
	 }
 
	 return plugins;
 }
 
 /**
  * Tasks
  */
 module.exports = [
	 {
		 context,
		 devtool: 'cheap-module-source-map',
		 resolve: {
			 symlinks: false,
			 alias: {
				 'app.veams$': `${context}/app.veams.ts`,
				 'env': envFile
			 },
			 extensions: [
				 '.ts', '.js'
			 ]
		 },
		 // Entry point for webpack
		 entry: {
			 app: `${context}/app.js`,
			 docs: `${docsContext}/scripts/docs.js`,
		 },
		 // Output directory and filename
		 output: {
			 filename: 'scripts/[name].bundle.js',
			 path: outputPath
		 },
		 // Tell webpack to run babel on every file it runs through
		 module: {
			 rules: [
				 scriptRule(),
				 styleRule()
			 ]
		 },
		 plugins: scriptPlugins().concat(
			 stylePlugins(configContext)
		 ),
		 // Some libraries import Node modules but don't use them in the browser.
		 // Tell Webpack to provide empty mocks for them so importing them works.
		 node: {
			 dgram: 'empty',
			 fs: 'empty',
			 net: 'empty',
			 tls: 'empty',
			 child_process: 'empty',
		 },
		 // Turn off performance hints during development because we don't do any
		 // splitting or minification in interest of speed. These warnings become
		 // cumbersome.
		 performance: {
			 hints: false
		 },
		 optimization: {
			 minimizer: optimizerPlugins()
		 }
	 }
 ];
 