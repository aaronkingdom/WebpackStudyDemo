var path = require('path');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/babel'),
    filename: 'react-bootstrap.exclude.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ],
  },
}
