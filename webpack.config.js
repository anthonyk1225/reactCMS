const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  devtool: "eval",
  entry:  [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app/app"
  ],
  output: {
    path: __dirname + "/build/",
    filename: "app.js",
    publicPath: "http://localhost:3000/build/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
      { test: /\.scss?$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', 'scss']
  },
}
