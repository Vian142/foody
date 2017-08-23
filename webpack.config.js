var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?camelCase&sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
      ]
    },
    {
        test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|gif|svg)(\?.*$|$)/,
        loaders: ['file-loader?name=./common/[hash].[ext]']
    }]
  }
};
