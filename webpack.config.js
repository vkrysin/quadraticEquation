const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: [ './index.js',
            './styles.css',
    ]
  },
  optimization: {
    minimize: false
  },

  module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                   /*process.env.NODE_ENV !== 'production' ? 'style-loader' :*/ MiniCssExtractPlugin.loader,
                   'css-loader'
                  ]
            },
            {
                test: /\.png$/,
                type: 'asset'
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
  },
  devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html'
      }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]',
    publicPath: '',
  }
};