const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/public/css',
          },
        }, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: [
          './lib/',
          './node_modules/',
          './app.js',
          './webpack.config.js',
          './migrations/',
          './models/',
          './routes/'
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS stringss
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }, 
};