const HtmlWebPackPlugin = require("html-webpack-plugin")
const WebpackModules = require("webpack-modules")

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new WebpackModules(),
    new HtmlWebPackPlugin({
      inlineSource: ".(js|css)$",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
