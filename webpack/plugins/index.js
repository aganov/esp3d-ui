import compressionPlugin from "./compression-plugin"
import htmlWebpackInlineSourcePlugin from "./html-webpack-inline-source-plugin"
import htmlWebpackPlugin from "./html-webpack-plugin"
import miniCssExtractPlugin from "./mini-css-extract-plugin"
import optimizeCSSAssetsPlugin from "./optimize-css-assets-webpack-plugin"
import terserPlugin from "./terser-plugin"
import webpackModulesPlugin from "./webpack-modules-plugin"

export const optimizationPlugins = {
  minimizer: [
    terserPlugin(),
    optimizeCSSAssetsPlugin()
  ]
}

export const environmentPlugins = [
  miniCssExtractPlugin(),
  webpackModulesPlugin(),
  htmlWebpackPlugin()
]

export const devPlugins = []

export const productionPlugins = [
  htmlWebpackInlineSourcePlugin(),
  compressionPlugin()
]
