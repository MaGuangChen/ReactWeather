module.exports = {
  entry: './app/app.jsx' ,//入口
  output: {
      path:__dirname,
      filename: './public/bundle.js'//生成一個bundle.js
  },
  resolve: {
      root:__dirname,//node js的變數
      alias: {
      },
      extensions:['', '.js', '.jsx']
  },
  module: {
      loaders: [
        {
             loader: 'babel-loader',
             query: {
                 presets: ['react','es2015']
             },
             test: /\.jsx?$/,
             exclude:/(node_modules｜bower_components)/
          }
      ]
  }
};

