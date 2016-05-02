module.exports = {
  context: __dirname, 
  entry: './index.js',
  output: { filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js?/, 
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json?/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  }
}
