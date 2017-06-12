var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname+'/public',
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        loader:'babel-loader'  //Run babel-loader in every .js file this transform non standard js like jsx es2015
      },
      {
        test:/\.json$/,
        loader:'json-loader'  //Run babel-loader in every .js file this transform non standard js like jsx es2015
      }
    ]
  }
};