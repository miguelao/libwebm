const path = require('path');

module.exports = {
  entry: './demo/demo.js',
  output: {
    path: __dirname + '/demo',
    filename: 'demo.bundle.js'
  },
  node: {
    fs: "empty"
  }
};
