import merge from "webpack-merge"
import environment from "./environment"
import { developmentPlugins } from "./plugins"

module.exports = merge(environment, {
  devtool: "source-map",
  plugins: developmentPlugins
})
