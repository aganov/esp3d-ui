const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin")
const merge = require("webpack-merge")
const environment = require("./environment.js")

module.exports = merge(environment, {
  plugins: [
    new HtmlWebpackInlineSourcePlugin()
  ]
})
