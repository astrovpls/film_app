const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false
  const modeEnv = argv.mode || 'development'
  const isProd = modeEnv === 'production'
  const config = webpackConfig(modeEnv)
  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  }

  if (isProd) {
    optimizations.minimizer.push(new TerserPlugin())
  }

  return {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      writeToDisk: true,
      compress: true,
      port: 4200,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: false,
      historyApiFallback: true,
      proxy: {
        //forward all routes to local express server and still keep hot-module-replacement from webpack
        '*': {
          target: `http://localhost:3000`,
        },
      }
    },
    resolve: config.resolve,
    module: {
      rules: [config.modules.js, config.modules.css],
    },
    plugins: [
      // new CleanWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'assets/index.css',
      })
      // new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    entry: {
      main: './src/Client.tsx',
    },
    output: {
      filename: !isProd
        ? 'assets/[name].js'
        : 'assets/[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    devtool: "eval-cheap-source-map",
    optimization: optimizations,
  }
}
