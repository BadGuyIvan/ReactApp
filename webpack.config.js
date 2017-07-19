const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports =  {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.html$/, use: "html-loader"},
      { test: /\.json$/, use: 'json-loader'},
      {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: "images/"
        },
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html"
    })
  ]
}
