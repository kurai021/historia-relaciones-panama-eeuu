const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

module.exports = {
  entry: './src',
  devtool: !isProduction && 'source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js','.css'],
    alias: {
      'reveal': path.join(__dirname, './node_modules/reveal.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|otf|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: isProduction && {
        collapseWhitespace: true
      },
      inlineSource: isProduction && '\.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    new OptimizeCssAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    stats: 'minimal',
    overlay: true
  }
}