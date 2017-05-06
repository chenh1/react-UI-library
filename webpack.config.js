var postCSSConfig = require('./postcss.config');

module.exports = {
  module: { 
  	loaders: [ 
  	  {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss!sass'
      },
    ]
  },
  postcss: function() {
    return postCSSConfig;
  },
};