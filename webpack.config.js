var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');
module.exports={
  entry:__dirname+'/src/app.js',

  output:{
    path:__dirname+'/prd/',
    filename:'bundle.js'
  },

  devtool:'source-map',

  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:'style!css'
      },
      
      {
        test:/\.scss$/,
        loader:ET.extract('style','css!sass')
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['react']
        }
      }

    ]
  },

  devServer:{
    contentBase:__dirname+'/prd',
    port:80,
    host:'localhost',
    proxy:{
      '/api':{
        target:'http://localhost:9000',
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },



  plugins:[
    new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]
}
