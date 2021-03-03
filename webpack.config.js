const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = (env = {}) => {
  const baseConfig = {
    //external source maps in prod to reduce bundle size but still allow debugging!
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    entry: './src/client/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }

  if (!isProduction) {
    baseConfig.devServer = {
      inline: true,
      compress: true,
      port: 3010,
      hot: true,
      open: true,
      proxy: {
        //forward all routes to local express server and still keep hot-module-replacement from webpack
        '/**': {
          target: `http://localhost:3011`,
        },
      },
    }
    baseConfig.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ]
  }

  return baseConfig
}
