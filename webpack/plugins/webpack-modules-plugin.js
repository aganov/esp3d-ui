/**
 * This plugin handles `.mjs` files correctly within webpack
 * Docs: https://github.com/lukeed/webpack-modules
 */

import WebpackModules from "webpack-modules"

export default () => new WebpackModules()