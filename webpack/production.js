import merge from "webpack-merge"
import environment from "./environment"
import { productionPlugins } from "./plugins"

module.exports = merge(environment, {
  plugins: productionPlugins
})
