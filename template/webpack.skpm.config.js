const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function (config, isPluginCommand) {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
  });
  
  if (!config.resolve) {
    config.resolve = {
      extensions: []
    };
  }
  
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"];
  
  // transformations for production (publish)
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        },
        test: /\.j|ts($|\?)/i
      })
    );
  }
}
