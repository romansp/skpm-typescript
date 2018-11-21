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
}
