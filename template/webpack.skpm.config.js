module.exports = function (config, isPluginCommand) {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
  });
  config.resolve.extensions.push(".ts");
}
