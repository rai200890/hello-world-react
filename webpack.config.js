var LiveReloadPlugin = require("webpack-livereload-plugin")
var options = {port: 3000}
module.exports = {
  plugins: [
    new LiveReloadPlugin(options)
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
