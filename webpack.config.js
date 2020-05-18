const path = require('path');

module.exports = {
  // entrada da aplicação no SRC
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // arquivos transpilados na pasta PUBLiC 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  /** Live Reload */
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      // arquivos js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      // arquivos css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      // imagens
      {
        test: /.*\.(gif|png|jpeg|jpg)$/i,
        use: { 
          loader: 'file-loader' 
        },
      },
    ]
  }
}